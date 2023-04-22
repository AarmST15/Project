import React, { useState } from 'react';
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from "@mui/material";
import Form from 'react-bootstrap/Form';
import Axios from 'axios';
import {useNavigate} from 'react-router-dom';
import {ReactSession} from 'react-client-session';
import { render } from '@testing-library/react';



function Login() {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [psw, setPassword] = useState("");
    const [loginStatus, setLoginStatus] = useState("");
    const [registerStatus, setRegisterStatus] = useState("");
    const [forgetStatus, setForgetStatus] = useState("");
    const [newPsw, setNewPsw] = useState(0);
    const navigate = useNavigate();

    ReactSession.setStoreType("localStorage");
    const [customerList, setCustomerList] = useState([]);

    const register = (e) => {
        e.preventDefault();
        Axios.post("http://localhost:3111/register", {
          email: email,
          username: username,
          psw: psw,
        }).then((response) => {
          // setRegisterStatus(response);
          // console.log(response);
          if(response.data.message){
            setRegisterStatus(response.data.message);
            window.location.href = '/login';
          }else{
            setRegisterStatus("ACCOUNT CREATED SUCCESSFULLY");
            window.location.href = '/home';
          }
        })
      }
      const login = (e) => {
        e.preventDefault();
        Axios.post("http://localhost:3111/login", {
          username: username,
          psw: psw,
        }).then((response) => {
          if (response.data.message && response.data.message !== "Admin") {
            setLoginStatus(response.data.message);
            ReactSession.set("username", username);
            navigate('/onlineorders'); // navigate to onlineorder page
          } else {
            if (response.data.message === "Admin") {
              navigate('/mnghome');
            }
          }
        });
      };
      const forget = (e) => {
        e.preventDefault();
        Axios.post("http://localhost:3111/forget", {
          email: email
        }).then((response) => {
          if(response.data.message === "Please enter a new password.") {
            resetPassword(email, newPsw);
          } else {
            alert(response.data.message);
            window.location.href = '/login';
          }
        }).catch((error) => {
          console.log(error);
          alert("Error occurred while processing your request.");
        });
      };
      
      const resetPassword = (email, psw) => {
        Axios.post("http://localhost:3111/resetPassword", {
          email: email,
          psw: psw 
        }).then((response) => {
          alert(response.data.message);
          window.location.href = '/login';
        }).catch((error) => {
          console.log(error);
          alert("Error occurred while resetting password.");
        });
      };
      
    
      
    const [justifyActive, setJustifyActive] = useState('tab1');;

    const handleJustifyClick = (value) => {
        if (value === justifyActive) {
        return;
        }

        setJustifyActive(value);
    };

    
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);

    const handleOpen = () => {
        setOpen(true);
      };

      const handleOpen2 = () => {
        setOpen(false);
        setOpen2(true);
      };
    
      const handleClose = () => {
        setOpen(false);
        setOpen2(false);
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
                
                <MDBInput wrapperClass='mb-4' label='Username' id='form1' type='email' onChange={(e) => {setUsername(e.target.value)}}/>
                <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' onChange={(e) => {setPassword(e.target.value)}}/>

                <div className="d-flex justify-content-between mx-4 mb-4">
                    
                    <a  style={{ color: '#F8CBA6' }} onClick={handleOpen}>Forgot password?</a>
                </div>
                <h1 style={{color: 'red', fontSize: '15px', textAlign: 'center', marginTop: '20px'}}>{loginStatus}</h1>
                <MDBBtn className="mb-4 w-100" onClick={login} style={{ background: '#F8CBA6' }}>Sign in</MDBBtn>
                <p className="text-center">Not a member? <a onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'} style={{ color: '#F8CBA6' }}>Register</a></p>

            </MDBTabsPane>


            <MDBTabsPane show={justifyActive === 'tab2'}>
                <div className="text-center mb-3">
                    <p>Sign up with:</p>
                    
                </div>

            
                <MDBInput wrapperClass='mb-4' label='Username' id='form1' type='text' onChange={(e) => {setUsername(e.target.value)}}/>
                <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email' onChange={(e) => {setEmail(e.target.value)}}/>
                <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password'onChange={(e) => {setPassword(e.target.value)}}/>

                <div className='d-flex justify-content-center mb-4'>
                    <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I have read and agree to the terms' />
                </div>
                <h1 style={{fontSize: '15px', textAlign: 'center', marginTop: '20px'}}>{registerStatus}</h1>
                <MDBBtn className="mb-4 w-100" onClick={register} style={{ background: '#F8CBA6' }}>Sign up</MDBBtn>

            </MDBTabsPane>

        </MDBTabsContent>

    </MDBContainer>
                  
    <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Forgot Password</DialogTitle>
        <DialogContent> 
          <form class="row g-3">                       
            <div class="col-md-12">
              <label for="inputEmail4" class="form-label">Email</label>
              <input type="email" class="form-control" id="inputEmail4" onChange={(e) => {setEmail(e.target.value)}}/>
            </div> 
          </form> 
        </DialogContent>
        <DialogActions>
          <Button onClick={handleOpen2}>Next</Button>
        </DialogActions>
      </Dialog>

      <Dialog open={open2} onClose={handleClose}>
        <DialogTitle>Forgot Password</DialogTitle>
        <DialogContent> 
          <form class="row g-3">                       
            <div class="col-md-">
              <label for="inputPassword4" class="form-label">Password</label>
              <input type="password" class="form-control" id="inputPassword4" onChange={(e) => {setNewPsw(e.target.value)}}/>
            </div>
          </form> 
        </DialogContent>
        <DialogActions>
          <Button onClick={forget}>submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Login;