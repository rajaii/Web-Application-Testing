import React from 'react';
import styled from 'styled-components';

const StrikeDiv = styled.div`
display: flex;
justify-content: center;
width: 200px;
height: 170px;
color: white;
background-color: red;

`
const StrikeP = styled.p`
font-weight: bold;
font-size: 3rem;
text align: center;
height: 100%;

`
const BallDiv = styled.div`
display: flex;
justify-content: center;
width: 200px;
height: 170px;
color: black;
background-color: green;

`
const BallP = styled.p`
font-weight: bold;
font-size: 3rem;
text align: center;
height: 100%;

`
const BatterDiv = styled.div`
display: flex;
justify-content: center;
width: 250px;
height: 170px;
background-color: blue;

`
const BatterP = styled.p`
font-weight: bold;
font-size: 3rem;
text align: center;
height: 100%;
color: red;

`

const FlexDiv = styled.div`
display: flex;
justify-content: center;
`


function Display(props) {
    return (
        <FlexDiv>
            <StrikeDiv>
                <StrikeP>Strikes: {props.stats.strikes}</StrikeP>
            </StrikeDiv>
            <BallDiv>
                <BallP>Balls: {props.stats.balls}</BallP>
            </BallDiv>
            <BatterDiv>
                <BatterP>At bat: {props.stats.atBat}</BatterP>
            </BatterDiv>
        </FlexDiv>
    )
}

export default Display;