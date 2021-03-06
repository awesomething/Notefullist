import React from 'react'
import Note from '../Note/Note'
import PropTypes from 'prop-types'
import ApiContext from '../ApiContext'
import { findNote } from '../notes-helpers'
import './HomePageMain.css'

export default class HomePageMain extends React.Component {
  static defaultProps = {
    match: {
      params: {}
    }
  }
  static contextType = ApiContext

  handleDeleteNote = noteId => {
    this.props.history.push(`/`)
  }

  render() {
    const { notes=[] } = this.context
    const { noteId } = this.props.match.params
    const note = findNote(notes, noteId) || { content: '' }
   
    return (
      <section className='HomePageMain'>
        <Note
          id={note.id}
          name={note.name}
          modified={note.modified}
          onDeleteNote={this.handleDeleteNote}
        />
        <div className='HomePageMain__content'>
          {note.content.split(/\n \r|\n/).map((para, i) =>
            <p key={i}>{para}</p>
          )}
        </div>
      </section>
    )
  }
}

HomePageMain.propTypes = {
  history: PropTypes.any,
  match: PropTypes.shape({
    params:PropTypes.shape({
      folderId: PropTypes.string
    })
  })
}
