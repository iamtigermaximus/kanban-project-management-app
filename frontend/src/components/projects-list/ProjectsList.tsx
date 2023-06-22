import { initData } from '../../actions/initData';
import {
  ProjectName,
  ProjectNameContainer,
  ProjectsListContainer,
} from './ProjectsList.styles';
import CreateNewBoard from '../modals/createNewBoard/CreateNewBoard';

const ProjectsList = () => {
  return (
    <ProjectsListContainer>
      {initData.map((project) => (
        <ProjectNameContainer key={project.id}>
          <ProjectName>{project.name}</ProjectName>
        </ProjectNameContainer>
      ))}
      <CreateNewBoard />
    </ProjectsListContainer>
  );
};

export default ProjectsList;
