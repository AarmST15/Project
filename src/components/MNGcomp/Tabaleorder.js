import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(menuname,  request, unit) {
  return { menuname,  request, unit };
}

const rows = [
  createData('Frozen yoghurt', '',1),
  createData('Frozen yoghurt', '',1),
  createData('Frozen yoghurt', '',1),
];

export default function Tableorder() {
    return (
        <div> 
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 ,background:'19A7CE'}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Menu Name</TableCell>                            
                            <TableCell >Request</TableCell>
                            <TableCell align="right">Unit</TableCell>
                            
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.menuname} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>                        
                            
                            <TableCell component="th" scope="row">{row.menuname}</TableCell>                        
                            <TableCell >{row.request}</TableCell>
                            <TableCell align="right">{row.unit}</TableCell>
                        
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
                                <div style={{marginTop:'15px'}}>
                                    <button type="submit" class="btn btn-primary">Done</button>
                                </div>
        </div>
    );
}