import React, { Component } from 'react';
// import MyHeader from './Header.js'
import { Box, Grid, Typography, Link } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import SvgIcon from '@material-ui/core/SvgIcon';
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
                }}>
              PATRICK O'SHEA
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} style={styles.GridItem} alignItems='flex-start'>
          <Box boxShadow={2}>
            <Typography variant='h5'>
              Software Developer // Physical Therapist
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} style={styles.GridItem}  alignItems='center'>
          <Typography>
            <Link
              href="https://www.linkedin.com/in/patrickodpt/"
              target="_blank"
              >
              <LinkedInIcon
                style={styles.EmbiggenedIcon}
                color="action" />
            </Link>
            <Link
              href="mailto:patrickodpt@gmail.com"
              target="_blank"
              >
              <EmailIcon
                style={styles.EmbiggenedIcon}
                color="action" />
            </Link>
            <Link
              href="https://github.com/patrickodpt"
              target="_blank">
              <GithubIcon
                color="action"
                style={styles.EmbiggenedIcon}
              />
            </Link>
          </Typography>
        </Grid>
      </Grid>
    )
  }
}

export default Home;
