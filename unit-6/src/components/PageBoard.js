import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Event from "./Event"

const Board = styled.div`
    font-size: 18px;
    color: black;
`
const Title = styled.h3`
  text-align: center;
  font-size: 32px;
  font-weight: 700;
  margin-top: 40px;
  margin-bottom: 20px;
  color: #333;
  letter-spacing: 1px;
  text-transform: uppercase;
  border-bottom: 3px solid #ff914d;
  padding-bottom: 8px;
`
const EventWrap = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
`
function PageBoard( {items} ) {
    return(
        <Board>
            <Title>Events around the WORLD</Title>
            <EventWrap>
                {items.map((item, index) => (
                    <Event key={index} {...item}/>
                ))}
                
            </EventWrap>
        </Board>
    )
}

PageBoard.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default PageBoard;
