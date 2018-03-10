// Import Actions
import { CREATE_LANE, UPDATE_LANE, DELETE_LANE } from './LaneActions';

// Initial State
const initialState = {};

export default function lanes(state = initialState, action) {
  switch (action.type) {
    case CREATE_LANE:
      return [...state, action.name];
      case UPDATE_LANE:
      return state.map(lane => {
        return lane.id === action.id ? { ...lane, ...action.lane } : lane;
      });
    case DELETE_LANE:
      return state.filter(lane => lane.id !== action.laneId);
    
    default:
      return state;
    }
}

// const LaneReducer = (state = initialState, action) => {
//   switch (action.type) {
//     default:
//       return state;
//   }
// };

export default LaneReducer;
