import {
  ProjectName,
  ProjectNameContainer,
  ProjectsListContainer,
  SideBarHeader,
} from './ProjectsList.styles';
import CreateNewBoard from '../modals/createNewBoard/CreateNewBoard';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { IProject } from '../../interfaces/Kanban';

type ProjectsListProps = {
  handleProjectSelect: (project: IProject) => void;
};

const ProjectsList = ({ handleProjectSelect }: ProjectsListProps) => {
  const [projects, setProjects] = useState<IProject[]>([]); // State variable to store the fetched projects

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5500/api/projects'); // Replace with your API endpoint
      setProjects(response.data); // Handle the retrieved data
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData(); // Call the function when the component mounts
  }, []);

  const selectProject = (project: IProject) => {
    handleProjectSelect(project);
  };
  return (
    <ProjectsListContainer>
      <SideBarHeader>All Boards (0)</SideBarHeader>
      {projects.map((project) => (
        <ProjectNameContainer
          key={project.id}
          onClick={() => selectProject(project)}
        >
          <ProjectName>{project.name}</ProjectName>
        </ProjectNameContainer>
      ))}
      <CreateNewBoard />
    </ProjectsListContainer>
  );
};

export default ProjectsList;
