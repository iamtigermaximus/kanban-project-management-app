import Columns from '../columns/Columns';
import Sidebar from '../sidebar/Sidebar';
import { BoardContainer } from './Board.styles';

const Board = () => {
  return (
    <BoardContainer>
      <Sidebar />
      <Columns />
    </BoardContainer>
  );
};

export default Board;
