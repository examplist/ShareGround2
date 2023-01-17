import styled from 'styled-components';
import { header_height, footer_height, OnlyMessage } from 'styles/layout';

export const confirmed = styled.main`
  min-height: calc(100vh - ${header_height} - ${footer_height});
  padding: 2rem 1rem;
`;

export const notConfirmed = styled(OnlyMessage)``;

export const canNotCreate = styled(OnlyMessage)``;

export const editPageNoAuthor = styled(OnlyMessage)``;
