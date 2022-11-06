import React from 'react';
import styled from 'styled-components';
import Container from 'helpers/Container';
import { SpacerBeta } from 'helpers/Spacings';
import SearchRecord from 'components/SearchRecord';
import { Outlet } from 'react-router-dom';
import search from 'icons/search.png';
import { useState } from 'react';
import data from 'data.json'

const ScrolledList = styled.div`
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
const StyledInputWrapper = styled.div`
  position: relative;
`;

const StyledInput = styled.input`
  height: 78px;
  display: block;
  border-radius: 36px;
  background: #40798c;
  border: none;
  box-shadow: none;
  padding: 15px 120px 15px 45px;
  width: 100%;
  color: #ffffff;
  font-size: 30px;
  line-height: 1;
`;

const StyledButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 45px;
  border: none;
  background: none;
  padding: 7px;
  cursor: pointer;
`;

const StyledImg = styled.img`
  display: block;
`;

const StatsSearch = () => {
  const [query, setQuery] = useState("")
  return (
    <Container>
       <StyledInputWrapper>
        <StyledInput placeholder="Search for garbage" onChange={event => setQuery(event.target.value)}/>
        <StyledButton type="submit">
          <StyledImg src={search} alt="Search" />
        </StyledButton>
      </StyledInputWrapper>
      <SpacerBeta />
      <ScrolledList>
      {
        data.map((record) => {
        if(query == ""){
          return(
            <SearchRecord name={record.name} truckID={record.id} />
          )
        }else{
        if(record.id.includes(query)||record.name.toLowerCase().includes(query)){
          return(
            <SearchRecord name={record.name} truckID={record.id} />
        )}}})
      }
      </ScrolledList>
      <Outlet />
    </Container>
  );
};

export default StatsSearch;
