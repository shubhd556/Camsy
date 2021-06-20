import React from 'react'
import { Typography, AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import VideoPlayer from './components/VideoPlayer';
import Notifications from './components/Notifications';
import Options from './components/Options'
import Background from './components/Background';
import Style from './components/Style';
const useStyles = makeStyles((theme) => ({
    appBar: {
      borderRadius: 15,
      margin: '30px 100px',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: '600px',
      // border: '2px solid black',
      background: 'rgba( 255, 255, 255, 0.35 )',
    WebkitBackdropFilter: 'blur(11.5px)',
    backdropFilter:'blur(10px)',
    boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
    // borderRadius: '10px',
    border:'1px solid rgba( 255, 255, 255, 0.18)',
  
      [theme.breakpoints.down('xs')]: {
        width: '90%',
      },
    },
    image: {
      marginLeft: '15px',
    },
    wrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
    },
    typography:{
      fontFamily:[
        '"Segoe UI"',
        'Tahoma', 
        'Geneva', 
        'Verdana', 
        'sans-serif',
      ].join(','),
    }
  }));




function App() {
    const classes = useStyles();
    return (
      <div>
      <Background/>
      <Style/>
        <div className={classes.wrapper}>
         
          <AppBar className={classes.appBar} position="static" color="inherit">
            <Typography variant="h2" align="center">Camsy</Typography>
          </AppBar>
          <VideoPlayer />
          <Options>
            <Notifications />
          </Options>
        </div>
        </div>
      );
    };

export default App;
