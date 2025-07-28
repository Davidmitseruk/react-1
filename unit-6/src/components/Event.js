import React from "react";
import styled from "styled-components"
import PropTypes from "prop-types"
import {FaClock, FaUser} from "react-icons/fa";
import {BsGeoAltFill} from "react-icons/bs"


const EventCard = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  background-color: bisque;
  width: 240px;
  padding: 12px;
  margin: 30px;
`
const Title = styled.h2`
text-align: center;
 color: brown;
 font-size: 24px;
 margin-bottom: 10px;
 font-weight: 600;
`
const Location = styled.h3`
color: rgb(136, 185, 11);
 font-size: 18px;
 margin-bottom: 10px;
 font-weight: 400;
`
const Speaker = styled.h3`
color: rgb(136, 185, 11);
 font-size: 18px;
 margin-bottom: 10px;
 font-weight: 400;
`
const Data = styled.h3`
color: rgb(136, 185, 11);
 font-size: 18px;
 margin-bottom: 10px;
 font-weight: 400;
`
const Time = styled.h3`
color: rgb(136, 185, 11);
 font-size: 18px;
 margin-bottom: 10px;
 font-weight: 400;
`
function Event({ name, location, speaker, time }) {
    const startDate = new Date(time.start);
    const hours = String(startDate.getHours()).padStart(2, "0");
    const minutes = String(startDate.getMinutes()).padStart(2, "0");
    const day = String(startDate.getDate()).padStart(2, "0");
    const month = String(startDate.getMonth() + 1).padStart(2, "0"); 
    const year = startDate.getFullYear();
    const startTime = new Date(time.start);
    const endTime = new Date(time.end)
    const durationMs = endTime - startTime
    const durationHour = durationMs/(1000*60*60)
    const formattet = `${hours}: ${minutes}, ${day}.${month}.${year}`
  return (
    <EventCard>
      <Title>{name} </Title>
      <Location>
        <BsGeoAltFill style={{marginRight: 8}}/>
        {location}
        </Location>
        <Speaker>
         <FaUser style={{marginRight: 8}}/>   
        {speaker}
        </Speaker>
        <Time>
        <FaClock style={{marginRight: 8}}/>
        {durationHour} Hours
        </Time>
    </EventCard>
  );
}

Event.propTypes = {
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    speaker: PropTypes.string.isRequired,
    time: PropTypes.shape({
        start: PropTypes.string.isRequired,
        end: PropTypes.string.isRequired
    }).isRequired
}

export default Event;