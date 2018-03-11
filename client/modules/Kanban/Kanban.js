// import React, { Component, PropTypes } from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Lanes from '../Lane/Lanes';
import { createLane } from '../Lane/LaneActions';

// Import Style
import styles from './Kanban.css';

const Kanban = (props) => (
  <div>
    <button className={styles.AddLane}>
    onClick={() => props.createLane({
      name: 'New lane',
      notes: [],
    })}
  >Add lane</button>
    <Lanes lanes={props.lanes} />
  </div>
);

// Kanban.need = [() => { return fetchLanes(); }];

const mapStateToProps = state => ({
  lanes: state.lanes,
});

const mapDispatchToProps = {
  createLane,
};

  Kanban.propTypes = {
      lanes: PropTypes.array,
      createLane: PropTypes.func,
    };

export default connect(mapStateToProps, mapDispatchToProps)(Kanban);