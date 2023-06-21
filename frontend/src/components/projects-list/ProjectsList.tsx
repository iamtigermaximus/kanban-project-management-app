import { useState } from 'react';
import { initData } from '../../actions/initData';
import {
  AddNewBoardButton,
  AddNewBoardButtonContainer,
  BoardColumn,
  ModalButton,
  ModalButtonContainer,
  ProjectName,
  ProjectNameContainer,
  ProjectsListContainer,
} from './ProjectsList.styles';
import { Box, Modal, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: 600,
  p: 4,
};

const ProjectsList = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <ProjectsListContainer>
      {initData.map((project) => (
        <ProjectNameContainer key={project.id}>
          <ProjectName>{project.name}</ProjectName>
        </ProjectNameContainer>
      ))}
      <AddNewBoardButtonContainer onClick={handleOpen}>
        <AddNewBoardButton>+ Create New Board</AddNewBoardButton>
      </AddNewBoardButtonContainer>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, backgroundColor: 'white' }}>
          <h2 id="parent-modal-title">Add new board</h2>
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { my: 1, width: '100%' },
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <h5>Board Name</h5>
              <TextField id="outlined" defaultValue="eg. Web Design" />
              <h5>Board Columns</h5>
              <BoardColumn>
                <TextField id="outlined" defaultValue="Todo" />
                <DeleteIcon />
              </BoardColumn>
              <BoardColumn>
                <TextField id="outlined" defaultValue="In Progress" />
                <DeleteIcon />
              </BoardColumn>
              <BoardColumn>
                <TextField id="outlined" defaultValue="Completed" />
                <DeleteIcon />
              </BoardColumn>
              <ModalButtonContainer>
                <ModalButton>+ Add New Column</ModalButton>
              </ModalButtonContainer>
              <ModalButtonContainer>
                <ModalButton>Create New Board</ModalButton>
              </ModalButtonContainer>
            </div>
          </Box>
        </Box>
      </Modal>
    </ProjectsListContainer>
  );
};

export default ProjectsList;
