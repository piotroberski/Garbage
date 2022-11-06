import React from 'react';
import Container from 'helpers/Container';
import { useParams } from 'react-router-dom';
import styled, { css } from 'styled-components';
import mixins from 'styles/mixins';
import { SpacerBeta } from 'helpers/Spacings';
import StyledH1 from 'helpers/Headings';
import cabbage from 'icons/cabbage.png';

const StyledInfoPillsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${mixins.lg`
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    white-space: nowrap;
  `};
`;

const StyledInfoPill = styled.div`
  background: #1f363d;
  border-radius: 36px;
  padding: 16px 26px;
  margin: 0 0 15px 0;
  text-align: center;

  ${mixins.lg`
    margin: 0 20px;
  `};
`;

const StyledTruckData = styled.div`
  border: 5px solid #1f363d;
  border-radius: 51px;
  padding: 50px;
`;

const StyledHr = styled.hr`
  background: #1f363d;
  height: 5px;
  margin-bottom: 40px;
  border: none;
`;

const ScrolledList = styled.div`
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

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
  text-decoration: none;
`;

const StyledBarProperty = styled.div`
  position: relative;
  text-transform: uppercase;
  text-align: center;
  padding: 0 30px;
  ${(props) =>
    props.width &&
    css`
      flex: 1 1 ${props.width}%;
    `};

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

const StatsDetails = () => {
  const { truckID } = useParams();
  const name = 'Krótka 4';
  const lat = '51.107883';
  const lon = '17.038538';

  return (
    <Container layout="wide">
      <StyledInfoPillsWrapper>
        <StyledInfoPill>ADDRESS | {name}</StyledInfoPill>
        <StyledInfoPill>LAT | {lat}</StyledInfoPill>
        <StyledInfoPill>LON | {lon}</StyledInfoPill>
      </StyledInfoPillsWrapper>
      <SpacerBeta />
      <StyledTruckData>
        <StyledH1>
          {name} | #{truckID}
        </StyledH1>
        <StyledHr />
        <ScrolledList>
          {[...Array(4)].map((x, i) => (
            <StyledBar>
              <StyledBarProperty width={'10'}>
                <StyledImg src={cabbage} alt="cabbage" />
              </StyledBarProperty>
              <StyledBarProperty width={'15'}>15 %</StyledBarProperty>
              <StyledBarProperty width={'75'}>
                LAST EMPTIED: 13:11 | CAP: 120L | COUNT: 200
              </StyledBarProperty>
            </StyledBar>
          ))}
        </ScrolledList>
      </StyledTruckData>
    </Container>
  );
};

export default StatsDetails;
