import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
// Buttons
import IconButton from "@material-ui/core/IconButton";
import ButtonBase from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },

  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: "25ch",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function Form() {
  const classes = useStyles();
  let subjects = [
    "Computer Science",
    "College",
    "English",
    "History",
    "Math",
    "Science",
    "Other",
  ];

  return (
    <>
      <Box style={{ padding: "30px" }}>
        <form className={classes.root}>
          <Typography>Name</Typography>
          <FormControl fullWidth className={classes.margin}>
            <Input />
          </FormControl>
        </form>
      </Box>
      <br />
      <Box style={{ padding: "30px" }}>
        <FormControl className={classes.formControl}>
          <Typography>Subject</Typography>
          <Select labelId="demo-simple-select-label" id="demo-simple-select">
            {subjects.map((subject) => {
              return (
                <MenuItem value={subject} key={subject}>
                  {subject}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Box>
      <br />
      <Box style={{ padding: "30px" }}>
        <form className={classes.root}>
          <Typography>Question</Typography>
          <FormControl fullWidth className={classes.margin}>
            <Input />
          </FormControl>
        </form>
      </Box>
      <ButtonBase style={{ margin: "30px" }} variant="outlined">
        SUBMIT
      </ButtonBase>
    </>
  );
}
