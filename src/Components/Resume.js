import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import resumePDF from './Resume.pdf'
import DescriptionIcon from '@material-ui/icons/Description';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Slide in alert dialog
      </Button> */}
      <Button onClick={handleClickOpen}>
        <DescriptionIcon
          style={props.stylesProp}
          color="action" />
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        scroll="body"
        // fullScreen={true}
        fullWidth={true}
        maxWidth="lg"
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Resume"}</DialogTitle>
        <DialogContent
          width="100%"
          >
            <iframe
              src={resumePDF}
              width="100%"
              height="800"
              >
              This browser does not support PDFs.
            </iframe>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}
