import React from "react";
import styles from "styled-components"
import PropTypes from "prop-types"


const EventCard = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  background-color: bisque;
  width: 240px;
  padding: 12px;
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
function Event ({name, location, speaker, time}) {
    return(
        <EventCard>
            <Title>{name}</Title>
            <Location>{location}</Location>
            <Speaker>{speaker}</Speaker>
            <Data></Data>
            <Time>{time}</Time>
        </EventCard>
    )
}


export default Event;