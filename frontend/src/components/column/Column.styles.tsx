import { Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const ColumnHeader = styled(Box)`
  padding: 20px 5px;
  margin: 5px;
  color: #828fa3;
  letter-spacing: 1px;
`;

export const ColumnTaskContainer = styled(Box)`
  width: 280px;
`;

export const ColumnTask = styled(Box)`
  padding: 20px 5px;
  margin: 5px;
  border-radius: 10px;
  color: white;
  background-color: #2b2c37;
  letter-spacing: 1px;
`;

export const AddNewTaskContainer = styled(Box)`
  display: flex;
  align-items: center;
  border-radius: 10px;
  padding: 10px 5px;
`;

export const AddNewTaskButton = styled(Button)`
  background-color: #3f51b5;
  font-size: 10px;
  font-weight: 700;
  cursor: pointer;
  color: white;
  letter-spacing: 1px;

  &:hover {
    background-color: #7986cb;
  }
`;
export const ProjectColumn = styled(Box)`
  display: flex;
  flex-direction: row;
`;
export const ProjectColumnCard = styled(Box)`
  display: flex;
  flex-direction: column;
`;
