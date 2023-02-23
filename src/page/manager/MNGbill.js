import React from 'react'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

function MNGbill() {
  return (
    <div>MNGbill
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/mnghome">Home</a></li>
          <li class="breadcrumb-item"><a href="/statement">Statement</a></li>
          <li class="breadcrumb-item active" aria-current="page">Bill</li>
          
          </ol>
      </nav>
      <MDBTable>
      <MDBTableHead>
        <tr>
          <th scope='col'>id payment</th>
          <th scope='col'>menuname</th>
          <th scope='col'>nubertable</th>
          <th scope='col'>total</th>
          <th scope='col'>date</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <th scope='row'>1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope='row'>2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope='row'>3</th>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </MDBTableBody>
    </MDBTable>
      </div>

  )
}

export default MNGbill