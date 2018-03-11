import { connect } from 'react-redux';
import Lane from './Lane';
// import kreatorów akcji do prosów Lane
import * as laneActions from './LaneActions';
import { createNote } from '../Note/NoteActions';

const mapStateToProps = (state) => {
  return {
    laneNotes: ownProps.lane.notes.map(noteId => state.notes.find(note => note.id === noteId))
  };
};
 // podpięcie zaimportowanych kreatorów do propsów komponentu
const mapDispatchToProps = {
    ...laneActions,
    addNote: createNote,
  };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Lane);