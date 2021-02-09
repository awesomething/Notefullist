import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import NoteListNav from "../NoteListNav/NoteListNav";
import HomePageNav from "../HomePageNav/HomePageNav";
import NoteListMain from "../NoteListMain/NoteListMain";
import HomePageMain from "../HomePageMain/HomePageMain";
import AddFolder from "../AddFolder/AddFolder";
import AddNotes from "../AddNotes/AddNotes";
import ApiContext from "../ApiContext";
import config from "../config";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import "./App.css";

class App extends Component {
  state = {
    notes: [],
    folders: [],
  };

  componentDidMount() {
    Promise.all([
      fetch(`${config.API_ENDPOINT}/notes`),
      fetch(`${config.API_ENDPOINT}/folders`),
    ])
      .then(([notesRes, foldersRes]) => {
        if (!notesRes.ok) return notesRes.json().then((e) => Promise.reject(e));
        if (!foldersRes.ok)
          return foldersRes.json().then((e) => Promise.reject(e));

        return Promise.all([notesRes.json(), foldersRes.json()]);
      })
      .then(([notes, folders]) => {
        this.setState({ notes, folders });
      })
      .catch((error) => {
        console.error({ error });
      });
  }

  handleAddFolder = (folder) => {
    this.setState({
      folders: [...this.state.folders, folder],
    });
  };

  handleAddNotes = (note) => {
    this.setState({
      notes: [...this.state.notes, note],
    });
  };

  handleDeleteNote = (noteId) => {
    this.setState({
      notes: this.state.notes.filter((note) => note.id !== noteId),
    });
  };

  renderNavRoutes() {
    return (
      <>
        {["/", "/folder/:folderId"].map((path) => (
          <Route exact key={path} path={path} component={NoteListNav} />
        ))}
        <Route exact path="/note/:noteId" component={HomePageNav} />
        <Route exact path="/add-folder" component={HomePageNav} />
        <Route exact path="/add-note" component={HomePageNav} />
      </>
    );
  }

  renderMainRoutes() {
    return (
      <>
        {["/", "/folder/:folderId"].map((path) => (
          <Route exact key={path} path={path} component={NoteListMain} />
        ))}
        <Route exact path="/note/:noteId" component={HomePageMain} />
        <Route exact path="/add-folder" component={AddFolder} />
        <Route exact path="/add-note" component={AddNotes} />
      </>
    );
  }

  render() {
    const value = {
      notes: this.state.notes,
      folders: this.state.folders,
      addFolder: this.handleAddFolder,
      addNotes: this.handleAddNotes,
      deleteNote: this.handleDeleteNote,
    };
    
    return (
      <ApiContext.Provider value={value}>
        <ErrorBoundary>
        <div className="App">
          <nav className="App__nav">{this.renderNavRoutes()}</nav>
          <header className="App__header">
            <h1>
              <Link to="/">Noteful</Link>{" "}
            </h1>
          </header>
          <main className="App__main">{this.renderMainRoutes()}</main>
        </div>
        </ErrorBoundary>
      </ApiContext.Provider>
    );
  }
}

export default App;
