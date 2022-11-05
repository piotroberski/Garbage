import React from 'react';
import styled from 'styled-components';
import cabbage from 'icons/cabbage.png';

const StyledBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 100%;
  min-height: 78px;
  padding: 15px 30px;
  background: #1f363d;
  margin-bottom: 15px;
  border-radius: 40px;
  white-space: nowrap;
`;

const StyledBarProperty = styled.div`
  position: relative;
  text-transform: uppercase;
  flex: 1 1 ${(props) => props.width || 25}%;
  text-align: center;
  padding: 0 30px;

  &::after {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    height: 64px;
    width: 2px;
    background: #cfe0c3;
    border-radius: 2px;
  }

  &:last-child::after {
    content: none;
  }
`;

const StyledImg = styled.img`
  display: block;
  margin: 0 auto;
`;

const RouteRecord = ({ truckID, capacity, departure, arrival }) => {
  return (
    <StyledBar>
      <StyledBarProperty width={'12'}>
        <StyledImg src={cabbage} alt="cabbage" />
      </StyledBarProperty>
      <StyledBarProperty>Truck: #{truckID}</StyledBarProperty>
      <StyledBarProperty>Capacity: {capacity} l</StyledBarProperty>
      <StyledBarProperty>Departure: {departure}</StyledBarProperty>
      <StyledBarProperty>Arrival: {arrival}</StyledBarProperty>
    </StyledBar>
  );
};

export default RouteRecord;
