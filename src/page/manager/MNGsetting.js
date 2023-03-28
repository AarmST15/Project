import React from 'react'
import'./MNGsetting.css'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Tablemenu from '../../components/MNGcomp/Tablemenu';
import Test from '../../components/MNGcomp/Test';
import Sidenavbar from '../../components/MNGcomp/Sidenavbar';

function MNGsetting() {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#000000' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(2),
        textAlign: 'center',
        display: '',
        color: theme.palette.text.secondary,
    }));

  return (
    <div className='mng-setting-bg'>
        <Sidenavbar/>
        <h3 style={{color:'#000',marginBottom:'40px'}}>Menu Table</h3>
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={12} md={12}>
                <Item>
                    {/* <Test/> */}
                    <Tablemenu/>
                </Item>
                </Grid>
            </Grid>
        </Box>        
        
    </div>
  )
}

export default MNGsetting


// import React from 'react'
// import Form from 'react-bootstrap/Form';
// import'./MNGsetting.css'
// import Tablemenu from '../../components/Tablemenu';

// function MNGsetting() {
   
    

//     return (
//         <div>
//             MNGsetting
//             <nav aria-label="breadcrumb">
//                 <ol class="breadcrumb">
//                 <li class="breadcrumb-item"><a href="/mnghome">Home</a></li>
//                 <li class="breadcrumb-item active" aria-current="page">Setting</li>
//                 </ol>
//             </nav>

//             <form class="row g-3">
//                 <div class="col-md-6">
//                     <label for="inputEmail4" class="form-label">Name</label>
//                     <input type="email" class="form-control" id="inputEmail4"/>
//                 </div>
//                 <div class="col-md-6">
//                     <label for="inputPassword4" class="form-label">Price</label>
//                     <input type="password" class="form-control" id="inputPassword4"/>
//                 </div>
//                 <div class="col-12">
//                     <label for="inputAddress" class="form-label">Details</label>
//                     <input type="text" class="form-control" id="inputAddress" placeholder="I’m a dish description."/>
//                 </div>
//                 <Form.Group controlId="formFile" className="mb-3">
//                     <Form.Label>Default file input example</Form.Label>
//                     <Form.Control type="file" />
//                 </Form.Group>                
//                 <div class="col-md-4">
//                     <label for="inputState" class="form-label">Type</label>
//                     <select id="inputState" class="form-select">
//                     <option selected>Choose...</option>
//                     <option>Coffe</option>
//                     <option>Tea</option>
//                     <option>Milk</option>
//                     <option>Soda</option>
//                     <option>Bakery & Sweet</option>                    
//                     </select>
//                 </div>
                               
//                 <div class="col-md-12">
//                     <button type="submit" class="btn btn-primary">Add</button>
//                 </div>
//             </form>
//             <Tablemenu/>
            
            

            

//         </div>

//     )
    
// }

// export default MNGsetting