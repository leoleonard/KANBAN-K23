// import uuid from 'uuid';
import callApi from '../../util/apiCaller';
import { lanes } from '../../util/schema';
import { normalize } from 'normalizr';
import { notes } from '../Note/NoteActions';

// Export Constants
export const CREATE_LANE = 'CREATE_LANE';
export const UPDATE_LANE = 'UPDATE_LANE';
export const DELETE_LANE = 'DELETE_LANE';
export const EDIT_LANE = 'EDIT_LANE';
export const CREATE_LANES = 'CREATE_LANES';


// Export Actions

// add a Lane
export function createLane(lane) {
    return {
      type: CREATE_LANE,
      lane: {
        // id: uuid(),
        notes:  lane.notes || [],
        ...lane,
      }
    };
  }

 // add LaneS
  export function createLanes(lanesData) {
    return {
      type: CREATE_LANES,
      lanes: lanesData,
    };
  }

  //update a Lane
  export function updateLane(lane) {
    return {
      type: UPDATE_LANE,
      lane,
    };
  }

  //delete a Lane
  export function deleteLane(laneId) {
    return {
      type: DELETE_LANE,
      laneId
    };
}
    //editLane
  export function editLane(laneId) {
      return {
          type: EDIT_LANE,
          laneId,
      };
    }


    // fetch Lane
    export function fetchLanes() {
        return (dispatch) => {
          return callApi('lanes').then(res => {
            const normalized = normalize(res.lanes, lanes);
            const { lanes: normalizedLanes, notes } = normalized.entities;
      
           dispatch(createLanes(normalizedLanes));
           dispatch(createNotes(notes));
          });
        };
      }

      // LaneRequest
      export function createLaneRequest(lane) {
        return (dispatch) => {
          return callApi('lanes', 'post', lane).then(res => {
            dispatch(createLane(res));
          });
        };
      };