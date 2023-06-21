import Sidebar from '../sidebar/Sidebar';
import TaskBoard from '../task-board/TaskBoard';
import { BoardContainer } from './Board.styles';

const Board = () => {
  return (
    <BoardContainer>
      <Sidebar />
      <TaskBoard />
    </BoardContainer>
  );
};

export default Board;
