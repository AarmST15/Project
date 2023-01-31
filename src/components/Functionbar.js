import React from 'react';
import { useState } from 'react';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Menuselect from '../components/Menuselect'
import AppSearch from '../components/AppSearch';
import CustomizedBadges from '../components/Badge';

export default function Functionbar() {
    const [searchText, setSearchText] = useState ('');

  return (
    <MDBRow>
      <MDBCol md='3'>
        <Menuselect/>
      </MDBCol>

      <MDBCol md='6'>
        <AppSearch value={searchText} onValueChange = {setSearchText}/>
      </MDBCol>

      <MDBCol md='3'>
        <CustomizedBadges/>
      </MDBCol>
    </MDBRow>
  );
}