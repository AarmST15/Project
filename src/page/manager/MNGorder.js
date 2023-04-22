import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { MDBRow, MDBCol} from 'mdb-react-ui-kit';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import'./MNGorder.css'
import Tableorder from '../../components/MNGcomp/Tabaleorder';
import Sidenavbar from '../../components/MNGcomp/Sidenavbar';

function MNGorder() {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#000000' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(2),
        textAlign: 'center',
        display: '',
        color: theme.palette.text.secondary,
    }));

    return (
        <div>
            <Sidenavbar/> 
        <div className='mngorder-bg'>

                      
              <h3 style={{color:'#000',marginBottom:'40px'}}>Manage Order</h3>

            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={4} md={4}>

                        
                        <h4>Order List</h4>
                        <MDBRow className='row-cols-1 row-cols-md-1 g-2'>
                            <Card sx={{ maxWidth: 500, borderRadius: '5rem', background:"#FFFBEB" ,display:"center"  }}>
                                <CardActionArea data-toggle="modal" data-target="#exampleModal" >
                                    <CardContent>
                                        
                                        <Typography gutterBottom variant="h6" component="div" style={{align:"center" }}>
                                            NO.Order x
                                        </Typography>
                                        <Typography gutterBottom variant="h7" component="div" style={{align:"center" }}>
                                            Username
                                        </Typography>
                                        <Typography variant="body1" color="text.secondary" align='center' >
                                            Table : 3
                                        </Typography>

                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        
                        </MDBRow>
                        
                        
                    </Grid>

                    <Grid item xs={12} sm={8} md={8}>
                        <Item>
                        <h4>Order Detail</h4>
                            <Tableorder/>

                            
                        </Item>
                    </Grid>

                    

                     
                </Grid>
            </Box>          
        </div>
        </div>
    )
}

export default MNGorder