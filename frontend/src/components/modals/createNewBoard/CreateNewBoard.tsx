import { Modal, Box, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  AddNewBoardButton,
  AddNewBoardButtonContainer,
  BoardColumn,
  ModalButton,
  ModalButtonContainer,
} from './CreateNewBoard.styles';
import useModalState from '../useModalState';
import { style } from '../addNewCard/AddNewCard.styles';

const CreateNewBoard = () => {
  const { open, handleOpen, handleClose } = useModalState(false);

  return (
    <div>
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
    </div>
  );
};

export default CreateNewBoard;
