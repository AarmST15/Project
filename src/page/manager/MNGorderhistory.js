import React from 'react';
import {
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBTypography,MDBRow, MDBCol, MDBTable, MDBTableHead, MDBTableBody
} from 'mdb-react-ui-kit';


function MNGorderhistory() {
  return (
    <div>MNGorderhistory
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/mnghome">Home</a></li>
          <li class="breadcrumb-item"><a href="/statement">Statement</a></li>
          <li class="breadcrumb-item active" aria-current="page">Order History</li>          
          </ol>
      </nav>
      <MDBCard>
      <MDBCardHeader>Quote</MDBCardHeader>
      <MDBCardBody>
        <MDBTypography blockquote className='mb-0'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
          <MDBTable>
                    <MDBTableHead>
                        <tr>
                        
                        <th scope='col'>List</th>
                        <th scope='col'>Quantity</th>
                        <th scope='col'>Total</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        <tr>
                        
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        </tr>
                        <tr>
                        
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        </tr>
                        <tr>
                            <td colSpan={2}>Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </MDBTableBody>
                </MDBTable>                

                        <MDBRow>
                            <MDBCol md='6'>
                            Subtotal
                            </MDBCol>
                            <MDBCol md='6'>
                                100 $
                            </MDBCol>
                        </MDBRow>      
          
          <footer className='blockquote-footer'>
            Someone famous in <cite title='Source Title'>Source Title</cite>
          </footer>
        </MDBTypography>
      </MDBCardBody>
    </MDBCard>
    <MDBCard>
      <MDBCardHeader>Quote</MDBCardHeader>
      <MDBCardBody>
        <MDBTypography blockquote className='mb-0'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
          <MDBTable>
                    <MDBTableHead>
                        <tr>
                        
                        <th scope='col'>List</th>
                        <th scope='col'>Quantity</th>
                        <th scope='col'>Total</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        <tr>
                        
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        </tr>
                        <tr>
                        
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        </tr>
                        <tr>
                            <td colSpan={2}>Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </MDBTableBody>
                </MDBTable>                

                        <MDBRow>
                            <MDBCol md='6'>
                            Subtotal
                            </MDBCol>
                            <MDBCol md='6'>
                                100 $
                            </MDBCol>
                        </MDBRow>      
          
          <footer className='blockquote-footer'>
            Someone famous in <cite title='Source Title'>Source Title</cite>
          </footer>
        </MDBTypography>
      </MDBCardBody>
    </MDBCard>
    





    </div>
  )
}

export default MNGorderhistory