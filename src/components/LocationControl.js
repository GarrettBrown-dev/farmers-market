import React from "react";
import Location from "./Location";
class LocationControl extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      index: null
    };
  }
  
  handleSelect = (e) => {
    this.setState({index:e.target.value});
  }

  render() {
    const marketSchedule = [  
      {  
        day: "Sunday",
        location: "Lents International",
        hours: "9:00am - 2:00pm",
        booth: "4A"
      },
      {  
        day: "Monday",
        location: "Pioneer Courthouse Square",
        hours: "10:00am - 2:00pm",
        booth: "7C"
      },
      {  
        day: "Tuesday",
        location: "Hillsboro",
        hours: "5:00pm - 8:30pm",
        booth: "1F"
      },
      {  
        day: "Wednesday",
        location: "Shemanski Park",
        hours: "10:00am - 2:00pm",
        booth: "3E"
      },
      {  
        day: "Thursday",
        location: "Northwest Portland",
        hours: "2:00pm - 6:00pm",
        booth: "6D"
      },
      {  
        day: "Saturday",
        location: "Beaverton",
        hours: "10:00am - 1:30pm",
        booth: "9G"
      }
    ];

    let currentVisibleState = null;
    if(this.state.index !== null){
      const thisDay = marketSchedule[parseInt(this.state.index)];
      currentVisibleState = <Location day={thisDay.day} location={thisDay.location} hours={thisDay.hours} booth={thisDay.booth} />
    }
    return (
      <React.Fragment>
        <label>
          <b>Which day do you want to visit?</b>
          <select
            value ={this.state.index}
            onChange={this.handleSelect}
            >
              <option disabled selected defaultValue> -- select an option -- </option>
              {marketSchedule.map((e, index) =>
                <option value={index}>{e.day}</option>
              )}
            </select>
          {console.log(this.state)}
          
        </label>
        {currentVisibleState}
      </React.Fragment>
    )
  }
}

export default LocationControl;