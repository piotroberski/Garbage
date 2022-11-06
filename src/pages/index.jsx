import React from 'react';
import styled from 'styled-components';
import Container from 'helpers/Container';
import StyledH1 from 'helpers/Headings';
import RouteRecord from 'components/RouteRecord';
import { SpacerAlpha, SpacerBeta } from 'helpers/Spacings';

const ScrolledList = styled.div`
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Home = () => {
  return (
    <Container layout="wide">
      <StyledH1>PREVIOUS ROUTES</StyledH1>
      <SpacerAlpha />
      <ScrolledList>
        {/* {records.map(({truckID, capacity}) => <RouteRecord truckID={truckID} capacity={capacity} />)} */}
        {[...Array(6)].map((x, i) => (
          <RouteRecord
            key={i}
            truckID="123"
            capacity="15000"
            departure="13:15"
            arrival="13:30"
          />
        ))}
      </ScrolledList>
      <SpacerBeta />
      <StyledH1>NEXT ROUTE</StyledH1>
      <SpacerAlpha />
      <ScrolledList>
        {[...Array(2)].map((x, i) => (
          <RouteRecord
            key={i}
            truckID="123"
            capacity="15000"
            departure="13:15"
            arrival="13:30"
          />
        ))}
      </ScrolledList>
    </Container>
  );
};

export default Home;
