import React from 'react'
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import './MNGorder.css'

function MNGorder() {
    return (
        <div>
            MNGorder
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="/mnghome">Home</a></li>
                <li class="breadcrumb-item active" aria-current="page">Order</li>
                </ol>
            </nav>
            <div class="col-md-12 , histoy-button">
                <button type="submit" class="btn btn-primary" href="/">Order History</button>
            </div>  

            <MDBRow className='grid-stye'>
                <MDBCol md='4' className='card-stye'>
                    <h4>Order List</h4>
                    <div className='card-design'>
                        <div class="card , card-design">
                        <div class="card-body">
                            <h7>Username</h7>                        
                            <div>Table : 3</div>                        
                        </div>
                        </div>
                        <div class="card , card-design">
                        <div class="card-body">
                            <h7>Username</h7>                        
                            <div>Table : 1</div>                        
                        </div>
                        </div>
                        <div class="card , card-design">
                        <div class="card-body">
                            <h7>Username</h7>                        
                            <div>Table : 5</div>                        
                        </div>
                        </div>                    
                    </div>                   

                </MDBCol>
                <MDBCol md='8' className='table-stye'>
                    <h4>List</h4>
                    <h7>Table : 3</h7>
                    <table class="table">
                        <thead>
                            <tr>
                            <th scope="col">Menu Name</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Request</th>
                            
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            
                            </tr>
                            <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            
                            </tr>
                            
                        </tbody>
                    </table>
                    <div class="col-md-12">
                        <button type="submit" class="btn btn-primary">Done</button>
                    </div>               
                </MDBCol>
            </MDBRow>       
        </div>
    )
}

export default MNGorder