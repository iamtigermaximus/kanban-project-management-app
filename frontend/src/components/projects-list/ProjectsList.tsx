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

const ProjectsList = () => {
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
  return (
    <ProjectsListContainer>
      <SideBarHeader>All Boards (0)</SideBarHeader>
      {projects.map((project) => (
        <ProjectNameContainer key={project.id}>
          <ProjectName>{project.name}</ProjectName>
        </ProjectNameContainer>
      ))}
      <CreateNewBoard />
    </ProjectsListContainer>
  );
};

export default ProjectsList;
