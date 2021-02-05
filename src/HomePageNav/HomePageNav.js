import React from 'react'
import RoundButton from '../RoundButton/RoundButton'
import ApiContext from '../ApiContext'
import { findNote, findFolder } from '../notes-helpers'
import './HomePageNav.css'

export default class HomePageNav extends React.Component {
  static defaultProps = {
    history: {
      goBack: () => { }
    },
    match: {
      params: {}
    }
  }
  static contextType = ApiContext;

  render() {
    const { notes, folders, } = this.context
    const { noteId } = this.props.match.params
    const note = findNote(notes, noteId) || {}
    const folder = findFolder(folders, note.folderId)
    return (
      <div className='HomePageNav'>
        <RoundButton
          tag='button'
          role='link'
          onClick={() => this.props.history.goBack()}
          className='HomePageNav__back-button'
        >
          <br />
          Back
        </RoundButton>
        {folder && (
          <h3 className='HomePageNav__folder-name'>
            {folder.name}
          </h3>
        )}
      </div>
    )
  }
}
