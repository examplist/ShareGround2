import styled from 'styled-components';
import * as theme from 'styles/theme';

export const Container = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;

  .pagination {
    display: flex;
  }
  .page-item {
    margin-right: 1rem;
    padding: 1rem;
    list-style: none;
    font-size: 1.25rem;
  }

  .page-link {
    cursor: pointer;
  }

  .active {
    color: ${theme.color_carrot};
  }
`;
