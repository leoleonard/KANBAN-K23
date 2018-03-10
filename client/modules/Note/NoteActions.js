import uuid from 'uuid'

// Export Constants
export const CREATE_NOTE = 'CREATE_NOTE';
export const UPDATE_NOTE = 'UPDATE_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';

// Export Actions
// add a Note
export function createNote(note, laneId) {
    return {
      type: CREATE_NOTE,
      laneId,
      note: {
        id: uuid(),
        ...note,
      },
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