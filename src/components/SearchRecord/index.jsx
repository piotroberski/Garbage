import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledBarLink = styled(Link)`
  min-width: 100%;
  padding: 15px 30px;
  background: #1f363d;
  margin-bottom: 15px;
  border-radius: 40px;
  white-space: nowrap;
  text-align: center;
  color: #ffffff;
  font-weight: 700;
  text-decoration: none;
`;

const SearchRecord = ({ name, truckID }) => {
  return (
    <StyledBarLink to={truckID}>
      {name} | #{truckID}
    </StyledBarLink>
  );
};

export default SearchRecord;
