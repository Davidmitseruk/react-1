import React from "react";
import styles from "styled-components";
import PropTypes from "prop-types";
import Event from "./Event"

function PageBoard(items) {
    return(
        <Board>
            <Title></Title>
            <EventWrap>
                {items.map((item, index) => (
                    <Event key={index} {...item}/>
                ))}
                
            </EventWrap>
        </Board>
    )
}


export default PageBoard;
