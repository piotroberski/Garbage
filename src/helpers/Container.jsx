import React from 'react';
import styled from 'styled-components';
import { mixins } from 'styles/mixins';

const StyledContainer = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  padding: 0 15px;

  ${(props) => props.layout === 'wide' && `max-width: 1920px`};

  ${mixins.sm`
		padding: 0 30px;
  `};
`;

const Container = ({ children, ...rest }) => {
  return <StyledContainer {...rest}>{children}</StyledContainer>;
};

export default Container;
