import React, { Component , useState } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import './Numberinde.css'

class Numberinde extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      show: true
    };
  }

  incrementValue = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  }
  decreaseValue = () => {
    this.setState({ clicks: this.state.clicks - 1 });
  }

  render() {
    return (
      <div className='In-De-number'>
        
     <Box >  
        <Stack direction="row" spacing={2}>
        <Button variant="outlined" onClick={this.incrementValue}>+</Button>
        { this.state.show ? <h6 className='text-num'>{ this.state.clicks }</h6> : '' }
        <Button variant="outlined" onClick={this.decreaseValue} >-</Button>
        </Stack>
      </Box>   
      </div>
    );
  }
}

export default Numberinde;

