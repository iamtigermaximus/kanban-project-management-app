import {
  ColumnTaskContainer,
  ColumnHeader,
  AddNewTaskButton,
  AddNewTaskContainer,
  ProjectColumn,
  ProjectColumnCard,
} from './Column.styles';
import { initData } from '../../actions/initData';
import Card from '../card/Card';
import {
  Box,
  FormControl,
  MenuItem,
  Modal,
  Select,
  SelectChangeEvent,
  TextField,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { ChangeEvent, useState } from 'react';
import {
  BoardColumn,
  ModalButton,
  ModalButtonContainer,
} from '../projects-list/ProjectsList.styles';
import { SubtasksColumn } from '../navbar/Navbar.styles';
import Checkbox from '@mui/material/Checkbox';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  p: 4,
};

const Column = () => {
  const [open, setOpen] = useState(false);
  const [openCard, setOpenCard] = useState(false);
  const [addCard, setAddCard] = useState(false);
  const [status, setStatus] = useState('');
  const [checked, setChecked] = useState(true);

  const handleCheckbox = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event: SelectChangeEvent) => {
    setStatus(event.target.value as string);
  };

  const handleAddCard = () => {
    setAddCard(true);
  };
  const handleCardClose = () => {
    setAddCard(false);
  };

  const handleOpenCard = () => {
    setOpenCard(true);
  };
  const handleCloseCard = () => {
    setOpenCard(false);
  };
  return (
    <>
      {initData.map((project) => (
        <ProjectColumn key={project.id}>
          {project.data.map((singleProject) => (
            <>
              <ProjectColumnCard key={singleProject.id}>
                <ColumnTaskContainer>
                  <ColumnHeader>{singleProject.categoryTitle} (0)</ColumnHeader>
                  {singleProject.cards.map((card) => (
                    <>
                      <div onClick={handleOpenCard}>
                        <Card
                          key={card.id.toString()}
                          title={card.title}
                          desc={card.desc}
                        />
                      </div>
                      <Modal
                        open={openCard}
                        onClose={handleCloseCard}
                        aria-labelledby="parent-modal-title"
                        aria-describedby="parent-modal-description"
                      >
                        <Box sx={{ ...style, backgroundColor: 'white' }}>
                          <h2 id="parent-modal-title">Task 1</h2>
                          <Box
                            component="form"
                            sx={{
                              '& .MuiTextField-root': {
                                my: 1,
                                width: '100%',
                              },
                            }}
                            noValidate
                            autoComplete="off"
                          >
                            <div>
                              <h5>Subtasks</h5>
                              <SubtasksColumn>
                                <Checkbox
                                  checked={checked}
                                  onChange={handleCheckbox}
                                  inputProps={{ 'aria-label': 'controlled' }}
                                />
                                <h3>Subtask 1</h3>
                              </SubtasksColumn>
                              <SubtasksColumn>
                                <Checkbox
                                  checked={checked}
                                  onChange={handleCheckbox}
                                  inputProps={{ 'aria-label': 'controlled' }}
                                />
                                <h3>Subtask 2</h3>
                              </SubtasksColumn>
                              <SubtasksColumn>
                                <Checkbox
                                  checked={checked}
                                  onChange={handleCheckbox}
                                  inputProps={{ 'aria-label': 'controlled' }}
                                />
                                <h3>Subtask 3</h3>
                              </SubtasksColumn>
                              <h5>Current Status</h5>
                              <FormControl fullWidth>
                                <Select
                                  labelId="demo-simple-select-label"
                                  id="demo-simple-select"
                                  value={status}
                                  onChange={handleChange}
                                >
                                  <MenuItem value="Todo">Todo</MenuItem>
                                  <MenuItem value="In Progress">
                                    In Progress
                                  </MenuItem>
                                  <MenuItem value="Completed">
                                    Completed
                                  </MenuItem>
                                </Select>
                              </FormControl>
                            </div>
                          </Box>
                        </Box>
                      </Modal>
                    </>
                  ))}
                </ColumnTaskContainer>
                <AddNewTaskContainer onClick={handleAddCard}>
                  <AddNewTaskButton>+ Add New Card</AddNewTaskButton>
                </AddNewTaskContainer>
                <Modal
                  open={addCard}
                  onClose={handleCardClose}
                  aria-labelledby="parent-modal-title"
                  aria-describedby="parent-modal-description"
                >
                  <Box sx={{ ...style, backgroundColor: 'white' }}>
                    <h2 id="parent-modal-title">Add New Card</h2>
                    <Box
                      component="form"
                      sx={{
                        '& .MuiTextField-root': {
                          my: 1,
                          width: '100%',
                        },
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
                        <TextField
                          id="outlined-multiline-static"
                          multiline
                          rows={4}
                        />
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
              </ProjectColumnCard>
            </>
          ))}
        </ProjectColumn>
      ))}
      <ColumnTaskContainer onClick={handleOpen}>
        <ColumnHeader>
          <AddNewTaskButton>+ Add New Column</AddNewTaskButton>
        </ColumnHeader>
      </ColumnTaskContainer>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, backgroundColor: 'white' }}>
          <h2 id="parent-modal-title">Edit board</h2>
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
                <ModalButton>Save Changes</ModalButton>
              </ModalButtonContainer>
            </div>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default Column;
