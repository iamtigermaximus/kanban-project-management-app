import {
  Brand,
  BrandContainer,
  MenuContainer,
  MoreVertIconContainer,
  NavigationBar,
  NewTaskButton,
  NewTaskContainer,
  NewTaskMenuContainer,
  ProfileContainer,
  ProfileIcon,
  ProjectName,
  SubtasksColumn,
} from './Navbar.styles';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import ProfileMenu from '../profile/Profile';
import {
  Box,
  FormControl,
  MenuItem,
  Modal,
  Select,
  SelectChangeEvent,
  TextField,
} from '@mui/material';
import { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  ModalButtonContainer,
  ModalButton,
} from '../projects-list/ProjectsList.styles';
import EditBoardModal from '../modals/EditBoardModal';
// import EditBoardModal from '../../modals/EditBoardModal';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: 750,
  p: 4,
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState('');

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event: SelectChangeEvent) => {
    setStatus(event.target.value as string);
  };
  return (
    <NavigationBar>
      <BrandContainer>
        <Brand>
          <ViewQuiltIcon fontSize="large" />
          KANBAN
        </Brand>
      </BrandContainer>
      <MenuContainer>
        <ProjectName>Project 1</ProjectName>
        <NewTaskMenuContainer>
          <NewTaskContainer onClick={handleOpen}>
            <NewTaskButton>+ ADD NEW TASK</NewTaskButton>
          </NewTaskContainer>
          <MoreVertIconContainer>
            <EditBoardModal />
          </MoreVertIconContainer>
        </NewTaskMenuContainer>
      </MenuContainer>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, backgroundColor: 'white' }}>
          <h2 id="parent-modal-title">Add New Task</h2>
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { my: 1, width: '100%' },
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <h5>Task Name</h5>
              <TextField
                id="outlined"
                defaultValue="e.g. Remove Console logs"
              />
              <h5>Description</h5>
              <TextField id="outlined-multiline-static" multiline rows={4} />
              <h5>Subtasks</h5>
              <SubtasksColumn>
                <TextField id="outlined" />
                <DeleteIcon />
              </SubtasksColumn>
              <SubtasksColumn>
                <TextField id="outlined" />
                <DeleteIcon />
              </SubtasksColumn>
              <ModalButtonContainer>
                <ModalButton>+ Add New Subtask</ModalButton>
              </ModalButtonContainer>
              <h5>Current Status</h5>
              <FormControl fullWidth>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={status}
                  onChange={handleChange}
                >
                  <MenuItem value="Todo">Todo</MenuItem>
                  <MenuItem value="In Progress">In Progress</MenuItem>
                  <MenuItem value="Completed">Completed</MenuItem>
                </Select>
              </FormControl>
              <ModalButtonContainer>
                <ModalButton>Create Task</ModalButton>
              </ModalButtonContainer>
            </div>
          </Box>
        </Box>
      </Modal>
      <ProfileContainer>
        <ProfileIcon>
          <ProfileMenu />
        </ProfileIcon>
      </ProfileContainer>
    </NavigationBar>
  );
};

export default Navbar;
