// Import Actions
import { CREATE_NOTE, CREATE_NOTES, UPDATE_NOTE, DELETE_NOTE, EDIT_NOTE} from './NoteActions';

import omit from 'lodash/omit';

// Initial State
const initialState = {};
export default function notes(state = initialState, action) {
  switch (action.type) {
    case CREATE_NOTE:
    case UPDATE_NOTE:
      return { ...state, [action.note.id]: action.note };
    case EDIT_NOTE: {
      const note = { ...state[action.id], editing: true };
      return { ...state, [action.id]: note };
    }
    case DELETE_NOTE:
      return omit(state, action.noteId);
    case CREATE_NOTES:
      return { ...action.notes };
    default:
      return state;
  }
}

// export default function notes(state = initialState, action) {
//   switch (action.type) {
//     case CREATE_NOTE:
//       return [...state, action.note];

//    case UPDATE_NOTE:
//      return state.map((note) => {
//        return note.id === action.id ? { ...note, ...action.note } : note;
//      });

//     case DELETE_NOTE:
//       return state.filter((note) => note.id !== action.noteId);

//     case EDIT_NOTE:
//      return state.map(note => note.id === action.noteId ? {...note, editing: true} : note);

//     default:
//       return state;
//   }
// }
