import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Toolbar from '@mui/material/Toolbar';

const Point = 1000;

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

function priceRow(qty, unit) {
  return qty * unit;
}

function createRow(desc, qty, unit) {
  const price = priceRow(qty, unit);
  return { desc, qty, unit, price };
}

function subtotal(items) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}


const rows = [
  createRow('coffee', 1, 50),
  createRow('milk', 1, 60),
  createRow('soda', 2, 45),
];

const invoiceSubtotal = subtotal(rows);
const invoicePoint  = Point / 100  ;
const invoiceTotal = invoiceSubtotal - invoicePoint   ;

export default function SpanningTable() {
  return (
    <TableContainer component={Paper}>
      
      <Table sx={{ minWidth: 300 , align:'start' }} >
      <TableBody>
      <TableRow>
            <TableCell rowSpan={3} />
            <TableCell >Username</TableCell>
            <TableCell align="right">xxxx</TableCell>
          </TableRow>
          <TableRow>
            <TableCell >Date</TableCell>
            <TableCell align="right">00/00/000</TableCell>
            
          </TableRow>
          <TableRow>
            <TableCell >No. table</TableCell>
            <TableCell align="right">6</TableCell>
          </TableRow>

      </TableBody>
      </Table>
      <Table sx={{ minWidth: 300 }} aria-label="spanning table">
        
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={3}>
              Details
            </TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Menu name</TableCell>
            <TableCell align="right">Qty.</TableCell>
            <TableCell align="right">Unit</TableCell>
            <TableCell align="right">Sum</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.desc}>
              <TableCell>{row.desc}</TableCell>
              <TableCell align="right">{row.qty}</TableCell>
              <TableCell align="right">{row.unit}</TableCell>
              <TableCell align="right">{ccyFormat(row.price)}</TableCell>
            </TableRow>
          ))}

          <TableRow>
            <TableCell rowSpan={3} />
            <TableCell colSpan={2}>Subtotal</TableCell>
            <TableCell align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Point</TableCell>
            <TableCell align="right">{`${(Point / 100).toFixed(0)} `}</TableCell>
            <TableCell align="right">{ccyFormat(invoicePoint )}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2}>Total</TableCell>
            <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}