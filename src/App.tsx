import InfoSnackBar from './components/InfoSnackBar';
import { useState } from 'react';
import './style.css';
import Button from '@material-ui/core/Button';
import { green, red, orange, blue } from '@material-ui/core/colors';
import { withStyles, Theme } from '@material-ui/core/styles';

function App() {
  const [infoSnackBar, setInfoSnackBar] = useState({mode: '', type: '', code: ''});

  const handleClickInfoSnackBar = (mode: string, type: string) => {
    if (mode === "delete") {
      if (type === "success") {
        setInfoSnackBar({mode: 'delete', type: 'success', code: 'DELETE001'});
      } else if (type === "error") {
        setInfoSnackBar({mode: 'delete', type: 'error', code: 'DELETE002'});
      } else if (type === "warning") {
        setInfoSnackBar({mode: 'delete', type: 'warning', code: 'DELETE003'});
      } else {
        setInfoSnackBar({mode: 'delete', type: 'info', code: 'DELETE004'});
      }
    }
  }

  const GreenButton = withStyles((theme: Theme) => ({
    root: {
      color: theme.palette.getContrastText(green[500]),
      backgroundColor: green[500],
      '&:hover': {
        backgroundColor: green[700],
      },
    },
  }))(Button);

  const RedButton = withStyles((theme: Theme) => ({
    root: {
      color: theme.palette.getContrastText(red[500]),
      backgroundColor: red[500],
      '&:hover': {
        backgroundColor: red[700],
      },
    },
  }))(Button);

  const OrangeButton = withStyles((theme: Theme) => ({
    root: {
      color: theme.palette.getContrastText(orange[500]),
      backgroundColor: orange[500],
      '&:hover': {
        backgroundColor: orange[700],
      },
    },
  }))(Button);

  const BlueButton = withStyles((theme: Theme) => ({
    root: {
      color: theme.palette.getContrastText(blue[500]),
      backgroundColor: blue[500],
      '&:hover': {
        backgroundColor: blue[700],
      },
    },
  }))(Button);

  return (
    <div className='container'>
      <GreenButton variant="contained" onClick={() => handleClickInfoSnackBar('delete', 'success')}>Delete Success</GreenButton>
      <RedButton variant="contained" onClick={() => handleClickInfoSnackBar('delete', 'error')}>Delete Error</RedButton>
      <OrangeButton variant="contained" onClick={() => handleClickInfoSnackBar('delete', 'warning')}>Delete Warning</OrangeButton>
      <BlueButton variant="contained" onClick={() => handleClickInfoSnackBar('delete', 'info')}>Delete Info</BlueButton>

      <InfoSnackBar
			  infoSnackBar={infoSnackBar}
			  setInfoSnackBar={setInfoSnackBar}
		/>
    </div>
  );
}

export default App;
