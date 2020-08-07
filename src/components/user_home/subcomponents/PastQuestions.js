import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function DialogSelect() {
  const classes = useStyles();
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

  const handleClickOpen1 = () => {
    setOpen1(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };

  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };
  return (
    <div>
      <Box
        style={{
          border: "solid",
          borderColor: "grey",
          borderWidth: "thin",
          textAlign: "center",
        }}
        onClick={handleClickOpen1}
      >
        <Typography>Date: 08/06/2020</Typography>
        <Typography>Subject: Math</Typography>
        <Typography>Question: What is 2...</Typography>
        <Typography>Answered: Yes</Typography>
      </Box>
      <Dialog disableEscapeKeyDown open={open1} onClose={handleClose1}>
        <DialogContent>
          <Typography>Date: 08/06/2020</Typography>
          <Typography>Subject: Math </Typography>
          <Typography>Question: What is 2 + 2?</Typography>
          <Typography>Answer: 4</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose1} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
      <br />
      <Box
        style={{
          border: "solid",
          borderColor: "grey",
          borderWidth: "thin",
          textAlign: "center",
        }}
        onClick={handleClickOpen2}
      >
        <Typography>Date: 08/06/2020</Typography>
        <Typography>Subject: English</Typography>
        <Typography>Question: In Pride and...</Typography>
        <Typography>Answered: No</Typography>
      </Box>
      <Dialog disableEscapeKeyDown open={open2} onClose={handleClose2}>
        <DialogContent>
          <Typography>Date: 08/06/2020</Typography>
          <Typography>Subject: English </Typography>
          <Typography>
            Question: In Pride and Prejudice, who is Mr. Darcy?
          </Typography>
          <Typography>Answer:</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose2} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
