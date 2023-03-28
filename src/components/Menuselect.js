import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Menuselect() {
  const [type, setType] = React.useState('');

  const handleChange = (event) => {
    setType(event.target.value);
  };

  return (
    <Box sx={{ maxWidth: 200 , maxHeight: 90}}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={type}
          label="Type"
          onChange={handleChange}
        >
          <MenuItem value={10}>All</MenuItem>
          <MenuItem value={20}>Coffee</MenuItem>
          <MenuItem value={21}>Tea</MenuItem>
          <MenuItem value={22}>Milk</MenuItem>
          <MenuItem value={30}>Bakery & Sweet</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}