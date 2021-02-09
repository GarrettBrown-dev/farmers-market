import React from "react";
import PropTypes from 'prop-types';

function Location(props){
  return(
    <>
      <h3>{props.day}</h3>
      <p>{props.location}</p>
      <p>{props.hours}</p>
      <p>{props.booth}</p>
    </>
  )
}

Location.propTypes ={
  day: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired,
  booth: PropTypes.string.isRequired
}
export default Location;