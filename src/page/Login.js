import React, { useState } from 'react';
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

function Login() {

    const [justifyActive, setJustifyActive] = useState('tab1');;

    const handleJustifyClick = (value) => {
        if (value === justifyActive) {
        return;
        }

        setJustifyActive(value);
    };

  return (
    <div style={{ background: '#FFFBEB' ,height:'100vh'}}>
        <MDBContainer className="p-3 d-flex flex-column" style={{ background: '#FFFBEB' }}>

        </MDBContainer>
    <MDBContainer className="p-3 d-flex flex-column" style={{ background: '#ECF9FF' }}>

        <MDBTabs pills justify className='mb-5 d-flex flex-row justify-content-between'>
            <MDBTabsItem>
                <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'} >
                    Login
                </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
                <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
                    Register
                </MDBTabsLink>
            </MDBTabsItem>
        </MDBTabs>

        <MDBTabsContent>

            <MDBTabsPane show={justifyActive === 'tab1'}>

                <div className="text-center mb-3">
                    <p>Sign in with:</p>
                    
                </div>

                <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email'/>
                <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password'/>

                <div className="d-flex justify-content-between mx-4 mb-4">
                    
                    <a  style={{ color: '#F8CBA6' }} href="!#">Forgot password?</a>
                </div>

                <MDBBtn className="mb-4 w-100" style={{ background: '#F8CBA6' }}>Sign in</MDBBtn>
                <p className="text-center">Not a member? <a onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'} style={{ color: '#F8CBA6' }}>Register</a></p>

            </MDBTabsPane>


            <MDBTabsPane show={justifyActive === 'tab2'}>
                <div className="text-center mb-3">
                    <p>Sign up with:</p>
                    
                </div>

            
                <MDBInput wrapperClass='mb-4' label='Username' id='form1' type='text'/>
                <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email'/>
                <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password'/>

                <div className='d-flex justify-content-center mb-4'>
                    <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I have read and agree to the terms' />
                </div>

                <MDBBtn className="mb-4 w-100" style={{ background: '#F8CBA6' }}>Sign up</MDBBtn>

            </MDBTabsPane>

        </MDBTabsContent>

    </MDBContainer>
    </div>
  );
}

export default Login;