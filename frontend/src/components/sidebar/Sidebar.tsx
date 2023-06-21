import ProjectsList from '../projects-list/ProjectsList';
import { SideBarContainer, SideBarHeader } from './Sidebar.styles';

const Sidebar = () => {
  return (
    <SideBarContainer>
      <SideBarHeader>All Boards (0)</SideBarHeader>
      <ProjectsList />
    </SideBarContainer>
  );
};

export default Sidebar;
