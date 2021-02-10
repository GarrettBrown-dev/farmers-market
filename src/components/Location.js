import React from "react";
import PropTypes from 'prop-types';

function Location(props){
  return(
    <>
      <h3 class="title">{props.day}</h3>
      <p class="details">{props.location}</p>
      <p class="details">{props.hours}</p>
      <p class="details">Booth: {props.booth}</p>
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