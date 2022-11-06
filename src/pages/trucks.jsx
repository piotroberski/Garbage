import React from 'react';
import styled from 'styled-components';
import Container from 'helpers/Container';
import StyledH1 from 'helpers/Headings';
import TruckRecord from 'components/TruckRecord';
import { SpacerAlpha } from 'helpers/Spacings';

const ScrolledList = styled.div`
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Trucks = () => {
  return (
    <Container layout="wide">
      <StyledH1>AVAILABLE TRUCKS</StyledH1>
      <SpacerAlpha />
      <ScrolledList>
        {[...Array(4)].map((x, i) => (
          <TruckRecord
            key={i}
            truckID="123"
            capacity="15000"
            time="28.10.2022-13:26"
          />
        ))}
      </ScrolledList>
    </Container>
  );
};

export default Trucks;
