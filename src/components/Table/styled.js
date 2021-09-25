import styled from 'styled-components';
import { breakpoint } from '../../utils'

export const BoxTable = styled.div`
  background-color: var(--white);
  padding: 30px 12px;
  box-shadow: 0 4px 15px rgba(0,0,0,.1);
  border-radius: var(--border-radius);
`;

export const TableContainer = styled.div`
  width: 100%;
  display: table;
`;

export const TableRow = styled.div`
  display: table-row;
`;

export const TableHeader = styled.div`
  display: table-cell;
  font-weight: 700;
  vertical-align: middle;
`;

export const TableData = styled.div`
  display: table-cell;
  vertical-align: middle;
`;