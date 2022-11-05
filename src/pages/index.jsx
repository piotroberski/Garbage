import React from 'react';
import styled from 'styled-components';
import Container from 'helpers/Container';
import StyledH1 from 'helpers/Headings';
import RouteRecord from 'components/RouteRecord';
import { SpacerBeta } from 'helpers/Spacings';

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
      <ScrolledList>
        {/* {records.map(({truckID, capacity}) => <RouteRecord truckID={truckID} capacity={capacity} />)} */}
        <RouteRecord
          truckID="123"
          capacity="15000"
          departure="13:15"
          arrival="13:30"
        />
        <RouteRecord
          truckID="123"
          capacity="15000"
          departure="13:15"
          arrival="13:30"
        />
        <RouteRecord
          truckID="123"
          capacity="15000"
          departure="13:15"
          arrival="13:30"
        />
        <RouteRecord
          truckID="123"
          capacity="15000"
          departure="13:15"
          arrival="13:30"
        />
        <RouteRecord
          truckID="123"
          capacity="15000"
          departure="13:15"
          arrival="13:30"
        />
      </ScrolledList>
      <SpacerBeta />
      <StyledH1>NEXT ROUTE</StyledH1>
      <ScrolledList>
        <RouteRecord
          truckID="123"
          capacity="15000"
          departure="13:15"
          arrival="13:30"
        />
        <RouteRecord
          truckID="123"
          capacity="15000"
          departure="13:15"
          arrival="13:30"
        />
        <RouteRecord
          truckID="123"
          capacity="15000"
          departure="13:15"
          arrival="13:30"
        />
        <RouteRecord
          truckID="123"
          capacity="15000"
          departure="13:15"
          arrival="13:30"
        />
        <RouteRecord
          truckID="123"
          capacity="15000"
          departure="13:15"
          arrival="13:30"
        />
        <RouteRecord
          truckID="123"
          capacity="15000"
          departure="13:15"
          arrival="13:30"
        />
        <RouteRecord
          truckID="123"
          capacity="15000"
          departure="13:15"
          arrival="13:30"
        />
      </ScrolledList>
    </Container>
  );
};

export default Home;
