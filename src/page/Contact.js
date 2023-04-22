import React, { Component } from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { Button} from "@mui/material";

class Numberinde extends Component {
    
    constructor(props) {
      super(props);
      this.state = {
        clicks: 0,
        show: true,
        
      };
    }
  
    incrementValue = () => {
      this.setState({ clicks: this.state.clicks + 1 });
    }
  
    decreaseValue = () => {
      this.setState({ clicks: this.state.clicks - 1 });
    }
  
    render() {
      const { clicks } = this.state;
      return (
        <div className='In-De-number'>
          <Box >  
            <Stack direction="row" spacing={2}>
              <Button variant="outlined" onClick={this.incrementValue}>+</Button>
  
              { this.state.show ? <h6 className='text-num'>{ clicks }</h6> : '' }
  
              <Button variant="outlined" onClick={this.decreaseValue} >-</Button>
            </Stack>
            
          </Box>   
        </div>
      );
    }
  }
  
  function Menuitem(props) {
    const { clicks } = props;
  
    // ใช้ค่า clicks ที่ส่งเข้ามาใน function นี้ได้
  
    return (
    <div>
        <Numberinde clicks={clicks} />
      <div>{ props.clicks }</div>
      </div>
    );
  }
  export default Menuitem