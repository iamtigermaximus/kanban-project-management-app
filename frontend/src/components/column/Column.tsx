import { ChangeEvent, useState } from 'react';
import { initData } from '../../actions/initData';
import {
  Box,
  Checkbox,
  FormControl,
  MenuItem,
  Modal,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import {
  ColumnTaskContainer,
  ColumnHeader,
  ProjectColumn,
  ProjectColumnCard,
} from './Column.styles';
import Card from '../card/Card';
import AddNewCard from '../modals/addNewCard/AddNewCard';
import AddNewColumn from '../modals/addNewColumn/AddNewColumn';
import { SubtasksColumn } from '../modals/addNewTask/AddNewTask.styles';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  p: 4,
};

const Column = () => {
  const [openCard, setOpenCard] = useState(false);
  const [status, setStatus] = useState('');
  const [checked, setChecked] = useState(true);

  const handleCheckbox = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const handleChange = (event: SelectChangeEvent) => {
    setStatus(event.target.value as string);
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
                <AddNewCard />
              </ProjectColumnCard>
            </>
          ))}
        </ProjectColumn>
      ))}
      <AddNewColumn />
    </>
  );
};

export default Column;
