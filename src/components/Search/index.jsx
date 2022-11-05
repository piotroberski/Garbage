import React from 'react';
import styled from 'styled-components';
import search from 'icons/search.png';

const StyledForm = styled.form`
  display: block;
  margin: 0;
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

const Search = () => {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <StyledForm onSubmit={onSubmit}>
      <StyledInputWrapper>
        <StyledInput placeholder="Search for garbage" />
        <StyledButton type="submit">
          <StyledImg src={search} alt="Search" />
        </StyledButton>
      </StyledInputWrapper>
    </StyledForm>
  );
};

export default Search;
