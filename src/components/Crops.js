import React from 'react';
import PropTypes from 'prop-types';

function Crops(props) {
  return(
    <>
      <h3 class="title">{props.month}</h3>
      <ul>
      {props.selection.map((e, index) => 
        <li class="crops" id={index}>{e}</li>
      )}
      </ul>
    </>
  )
}

Crops.propTypes = {
  month: PropTypes.string.isRequired,
  selection: PropTypes.array.isRequired
}

export default Crops;