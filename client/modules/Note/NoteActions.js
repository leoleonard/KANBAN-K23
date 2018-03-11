// import uuid from 'uuid';
import callApi from '../../util/apiCaller';
// Export Constants
export const CREATE_NOTE = 'CREATE_NOTE';
export const UPDATE_NOTE = 'UPDATE_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';
export const CREATE_NOTES = 'CREATE_NOTES';

// Export Actions
// add a Note
export function createNote(note, laneId) {
    return {
      type: CREATE_NOTE,
      noteId,
      note,
      // note: {
      //   id: uuid(),
      //   ...note,
      // },
    };
  }

  // add Notes
export function createNotes(notesData) {
  return {
    type: CREATE_NOTES,
    notes: notesData,
  };
}

  // update a Note
  export function updateNote(note) {
    return {
      type: UPDATE_NOTE,
      note,
    };
  }
  

  // delete a Note
  export function deleteNote(noteId, laneId) {
    return {
      type: DELETE_NOTE,
      noteId,
      laneId,
    };
  }

  // edit a Note
  export function editNote(noteId) {
    return {
      type: EDIT_NOTE,
      noteId,
    };
  }

  export function createNoteRequest(note, laneId) {
    return (dispatch) => {
      return callApi('notes', 'post', { note, laneId }).then(noteResp => {
        dispatch(createNote(noteResp, laneId));
      });
    };
  }