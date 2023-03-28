import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { visuallyHidden } from '@mui/utils';

function createData(trackingno, menuname, price, totalorder) { 
    const totalamount = price * totalorder;
  return { trackingno, menuname, price, totalorder, totalamount };
}

const rows = [
  
    createData('000001', 'aaaaaa', 60, 20),
    createData('000002', 'bbbbbb', 55, 2),
    createData('000003', 'cccccc', 40, 30),
    createData('000004', 'dddddd', 45, 10),
    createData('000005', 'eeeeee', 55, 8),
    createData('000006', 'ffffff', 70, 5),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
    { 
        id: 'trackingno', 
          label: 'Id-menumenuname', 
        minWidth: 150 
      },
      { 
        id: 'menuname', 
          label: 'Menu menuname', 
        minWidth: 150 
      },      
      {
        id: 'price',
        label: 'Price',
        minWidth: 100,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
      },
      {
        id: 'totalorder',
        label: 'totalorder',
        minWidth: 150,
        align: 'right',       
    
      },
      {
        id: 'totalamount',
        label: 'totalamount',
        minWidth: 150,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
      },
  
];

function EnhancedTableHead(props) {
  const {  order, orderBy, onRequestSort } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
        <TableRow>
            <TableCell padding="checkbox">
            
            </TableCell>
                {headCells.map((headCell) => (
                <TableCell
                    key={headCell.id}
                    align={headCell.numeric ? 'right' : 'left'}
                    padding={headCell.disablePadding ? 'none' : 'normal'}
                    sortDirection={orderBy === headCell.id ? order : false}
                    >
                    <TableSortLabel
                        active={orderBy === headCell.id}
                        direction={orderBy === headCell.id ? order : 'asc'}
                        onClick={createSortHandler(headCell.id)}
                        >
                        {headCell.label}
                        {orderBy === headCell.id ? (
                            <Box component="span" sx={visuallyHidden}>
                            {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                            </Box>
                        ) : null}
                    </TableSortLabel>
            </TableCell>
            ))}
            <TableCell >
            
            </TableCell>
        </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {  
  onRequestSort: PropTypes.func.isRequired,  
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

function EnhancedTableToolbar() { 

  return (
    <Toolbar sx={{ pl: { sm: 2 }, pr: { xs: 1, sm: 1 }, }} >      
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Members
        </Typography>  
    </Toolbar>
  );
}

export default function EnhancedTable() {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('menuname');  
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
 
  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <Box sx={{ width: '100%' }}>
        <Paper sx={{ width: '100%', mb: 2 }}>
            {/* Toolbar */}
            <EnhancedTableToolbar />  

            <TableContainer>
                <Table
                    sx={{ minWidth: 750 }}
                    aria-labelledby="tableTitle"
                    size={dense ? 'small' : 'medium'}
                    >
                    <EnhancedTableHead                
                    order={order}
                    orderBy={orderBy}                
                    onRequestSort={handleRequestSort}
                    rowCount={rows.length}
                    />
                    <TableBody>
                        {stableSort(rows, getComparator(order, orderBy))
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((row, index) => {                        
                        const labelId = `enhanced-table-checkbox-${index}`;

                        return (
                            <TableRow key={row.trackingno} sx={{ cursor: 'pointer' }} >
                                <TableCell >
                                    
                                </TableCell>
                                <TableCell
                                    component="th"
                                    id={labelId}
                                    scope="row"
                                    padding="none"
                                >
                                    {row.trackingno}
                                </TableCell>
                                <TableCell align="left">{row.menuname}</TableCell>                                
                                <TableCell align="right">{row.price}</TableCell>
                                <TableCell align="right">{row.totalorder}</TableCell>
                                <TableCell align="right">{row.totalamount}</TableCell>
                                <TableCell>
									<button type="submit" class="btn btn-danger">delete</button>
								</TableCell>
                            </TableRow>
                        );
                        })}
                        {emptyRows > 0 && (
                            <TableRow style={{ height: (dense ? 33 : 53) * emptyRows,}} >
                            <TableCell colSpan={6} />
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
            
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
      
    </Box>
  );
}