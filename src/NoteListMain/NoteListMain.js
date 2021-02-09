import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Note from '../Note/Note'
import RoundButton from '../RoundButton/RoundButton'
import ApiContext from '../ApiContext'
import { getNotesForFolder } from '../notes-helpers'
import './NoteListMain.css'

export default class NoteListMain extends React.Component {
  static defaultProps = {
    match: {
      params: {}
    }
  }
  static contextType = ApiContext

  render() {
    const { folderId } = this.props.match.params
    const { notes=[] } = this.context
    
    const notesForFolder = getNotesForFolder(notes, folderId)
    return (
      <section className='NoteListMain'>
        <ul>
          {notesForFolder.map(note =>
            <li key={note.id}>
              <Note
                id={note.id}
                name={note.name}
                modified={note.modified}
              />
            </li>
          )}
        </ul>
        <div className='NoteListMain__button-container'>
          <RoundButton
            tag={Link}
            to='/add-note'
            type='button'
            className='NoteListMain__add-note-button'
          >
            <br />
            Note
          </RoundButton>
        </div>
      </section>
    )
  }
}


NoteListMain.propTypes = {
  match: PropTypes.shape({
    params:PropTypes.shape({
      folderId: PropTypes.string
    })
  })
}