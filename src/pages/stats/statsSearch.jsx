import React from 'react';
import styled from 'styled-components';
import Container from 'helpers/Container';
import { SpacerBeta } from 'helpers/Spacings';
import Search from 'components/Search';
import SearchRecord from 'components/SearchRecord';
import { Outlet } from 'react-router-dom';

const ScrolledList = styled.div`
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const StatsSearch = () => {
  return (
    <Container>
      <Search />
      <SpacerBeta />
      <ScrolledList>
        <SearchRecord name="Ślężna 1" truckID="4125" />
        <SearchRecord name="Grabiszynska 14" truckID="5151" />
        <SearchRecord name="Ślężna 1" truckID="4125" />
        <SearchRecord name="Grabiszynska 14" truckID="5151" />
        <SearchRecord name="Ślężna 1" truckID="4125" />
        <SearchRecord name="Grabiszynska 14" truckID="5151" />
        <SearchRecord name="Ślężna 1" truckID="4125" />
        <SearchRecord name="Grabiszynska 14" truckID="5151" />
      </ScrolledList>
      <Outlet />
    </Container>
  );
};

export default StatsSearch;