import ProjectsList from '../projects-list/ProjectsList';
import { SideBarContainer } from './Sidebar.styles';

const Sidebar = () => {
  return (
    <SideBarContainer>
      <ProjectsList />
    </SideBarContainer>
  );
};

export default Sidebar;
