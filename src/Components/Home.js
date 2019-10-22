import React, { Component } from 'react';
// import MyHeader from './Header.js'
import MyResume from './Resume.js'
import { Box, Grid, Typography, Link, Button } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import SvgIcon from '@material-ui/core/SvgIcon';
import DescriptionIcon from '@material-ui/icons/Description';
const github = require('simple-icons/icons/github');

const styles = {
  GridItem: {
    height: '33vh',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
  },
  EmbiggenedIcon: {
    width: '100px',
    height: '100px',
    padding: '5px',
    margin: '10px',
  },
  TypoBox: {
    alignItems: 'center',
    display: 'flex',
    alignSelf: 'start',
  }
}

function GithubIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d={github.path}/>
    </SvgIcon>
  )
}

class Home extends Component {
  state = {
    resumeIsOpen: false,
  }

  render() {
    return (
      <Grid container justify="space-around">
        {/* <MyHeader/> */}
        <Grid item xs={12} style={styles.GridItem} alignItems='flex-end'>
          <Box boxShadow={3}>
            <Typography variant='h1'
              style={{
                fontWeight: 500,
                textAlign: 'center',
                textShadow: '2px 4px black',
                backgroundColor: '#00000073',
                }}>
              PATRICK O'SHEA
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} style={styles.GridItem} alignItems='flex-start'>
          <Box boxShadow={2}>
            <Typography variant='h5'
              style={{
                fontWeight: 300,
                textAlign: 'center',
                textShadow: '2px 4px black',
                backgroundColor: '#00000073',
                }}>
              Software Developer // Physical Therapist
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} style={styles.GridItem}  alignItems='center'>
          <Typography style={styles.TypoBox}>
            <Button
              href="https://www.linkedin.com/in/patrickodpt/"
              target="_blank"
              >
              <LinkedInIcon
                style={styles.EmbiggenedIcon}
                color="action" />
            </Button>
            <Button
              href="https://github.com/patrickodpt"
              target="_blank">
              <GithubIcon
                color="action"
                style={styles.EmbiggenedIcon}
              />
            </Button>
            <MyResume stylesProp={styles.EmbiggenedIcon}/>
            <Button
              href="mailto:patrickodpt@gmail.com"
              >
              <EmailIcon
                style={styles.EmbiggenedIcon}
                color="action" />
            </Button>
          </Typography>
        </Grid>
      </Grid>
    )
  }
}

export default Home;
