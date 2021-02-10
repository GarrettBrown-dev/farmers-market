import React from 'react';
import LocationControl from './LocationControl';
import CropControl from './CropControl';

function Body(){
  return(
    <React.Fragment>
      <LocationControl/>
      <CropControl/>
    </React.Fragment>
  )
}
export default Body;