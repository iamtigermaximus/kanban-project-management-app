import { IProject } from '../../interfaces/Kanban';
import Column from '../column/Column';
import { ColumnsContainer } from './Columns.styles';

type ColumnsProps = {
  selectedProject: IProject | null;
};

const Columns = ({ selectedProject }: ColumnsProps) => {
  if (!selectedProject) {
    return null;
  }
  return (
    <ColumnsContainer>
      <Column selectedProject={selectedProject} />
    </ColumnsContainer>
  );
};

export default Columns;
