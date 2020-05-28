
import React from 'react';
import {
  withStyles,
  makeStyles,
} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { green, purple } from '@material-ui/core/colors';

import LoginScreen from '../Assets/img/ic-login.png'

import "./styles.css";

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      //margin: theme.spacing(2),
      width: '18ch',
      minWidth: '16ch'
    },
  },
  margin: {
    margin: theme.spacing(1),
  },
  input: {
    color: "white"
  },
}));

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'white',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'blueviolet',
      },
      '&:hover fieldset': {
        borderColor: 'purple',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'blue',
      },
    },
  },
})(TextField);

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  },
}))(Button);

const Main = () => {
  const classes = useStyles();

  return (
    <div className="login">
      <div className="left align-center">

        <img src={LoginScreen} width='60%' alt="Login Screen" />
      </div>

      <div className="right align-center">
        <div className="right-content">
          <h1>LOGIN</h1>

          <form className={`${classes.root} form `} autoComplete="off">
            <CssTextField
              className={classes.margin}
              label="E-mail"
              variant="outlined"
              InputLabelProps={{
                style: {
                  color: 'white'
                }
              }}
              InputProps={{
                className: classes.input
              }}
            />

            <CssTextField
              className={classes.margin}
              type="password"
              label="Password"
              variant="outlined"
              InputLabelProps={{
                style: {
                  color: 'white'
                }
              }}
              InputProps={{
                className: classes.input
              }}
            />
            <span>Forgot password?</span>
          </form>

          <ColorButton variant="contained" color="primary" className={classes.margin}>
            Sign-in
      </ColorButton>
        </div>


      </div>
    </div>

  )
}

export default Main;