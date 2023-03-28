import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
  { 
	id: 'idname', 
  	label: 'Id-menuname', 
	minWidth: 170 
  },
  { 
	id: 'name', 
  	label: 'Menu name', 
	minWidth: 150 
  },
  {
    id: 'detail',
    label: 'detail',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'price',
    label: 'Price',
    minWidth: 100,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'img',
    label: 'Img',
    minWidth: 150,
    align: 'right',
	

  },
  {
    id: 'category',
    label: 'Category',
    minWidth: 150,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];

function createData(idname, name, detail, price, img, category) {  
  return { idname, name, detail, price, img, category };
}

const rows = [
  createData('000111', 'coffee', 'xxxxxxxxx', 50, '/images/coffee-01.jpg', 'coffee'),
  createData('000112', 'thaitea', 'xxxxxxxxx', 55, '/images/coffee-03.jpg', 'tea'),
  
];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);

  };

  

  return (
	<div>
		<Paper sx={{ width: '100%', overflow: 'hidden' }}>
			<TableContainer sx={{ maxHeight: 440 }}>
				<Table stickyHeader aria-label="sticky table">
					<TableHead>
						<TableRow>
							{columns.map((column) => (
								<TableCell
									key={column.id}
									align={column.align}
									style={{ minWidth: column.minWidth }}
									>
									{column.label}
								</TableCell>
							))}	
							<TableCell>
								
							</TableCell>
						</TableRow>
					</TableHead>

					<TableBody>
						{rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
						.map((row) => {
							return (
							<TableRow hover role="checkbox" tabIndex={-1} key={row.name}>
								{columns.map((column) => {
								const value = row[column.id];
								return (
									<TableCell key={column.id} align={column.align}>
									{column.format && typeof value === 'number'
										? column.format(value)
										: value}
									</TableCell>
								);
								})}
								
								<TableCell>
									<button type="submit" class="btn btn-danger">delete</button>
								</TableCell>

							</TableRow>
							);
						})}
					</TableBody>
				</Table>
			</TableContainer>
		<TablePagination
			rowsPerPageOptions={[10, 25, 100]}
			component="div"
			count={rows.length}
			rowsPerPage={rowsPerPage}
			page={page}
			onPageChange={handleChangePage}
			onRowsPerPageChange={handleChangeRowsPerPage}
		/>
		</Paper>
		
	</div>
  );
}