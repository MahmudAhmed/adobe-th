import { ModalWrapper } from '@/components/global/imageModal/style'
import { Box, Fade, Modal } from '@mui/material'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
};

type ModalProps = {
  open: boolean
  handleClose: () => void 
  item: ImageItem
}

export default function BasicModal({open, handleClose, item} : ModalProps) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Fade in={open} timeout={500}>
          <ModalWrapper>
            <img
              src={item.img}
              alt={item.title}
            />
            {/* <Ratings item={item} /> */}
          </ModalWrapper>
        </Fade>
        </Box>
      </Modal>
    </div>
  );
}