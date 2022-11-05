import React from 'react';
import styled from 'styled-components';

const StyledBar = styled.div`
  min-width: 100%;
  padding: 15px 30px;
  background: #1f363d;
  margin-bottom: 15px;
  border-radius: 40px;
  white-space: nowrap;
  text-align: center;
  color: #ffffff;
  font-weight: 700;
`;

const SearchRecord = ({ name, truckID }) => {
  return (
    <StyledBar>
      {name} | #{truckID}
    </StyledBar>
  );
};

export default SearchRecord;
