import React, { useState } from 'react';
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';
import NavbarC from '../components/NavbarC'
import Footer from './Footer'

export default function Contact (props) {
  const [toggleOneModal, setToggleOneModal] = useState(false);
  
  const [toggleTwoModal, setToggleTwoModal] = useState(false);

  const {coffee} = props;

  return (
    <>
    <NavbarC/>
      <MDBBtn onClick={() => setToggleOneModal(!toggleOneModal)}>OPEN FIRST MODAL</MDBBtn>

        <MDBModal show={toggleOneModal} setShow={setToggleOneModal} tabIndex='-1'>
            <MDBModalDialog centered>
                <MDBModalContent>
                    <MDBModalHeader>
                        <MDBModalTitle>Modal 1</MDBModalTitle>
                        <MDBBtn
                            className='btn-close'
                            color='none'
                            onClick={() => setToggleOneModal(!toggleOneModal)}
                        ></MDBBtn>
                    </MDBModalHeader>
                    <MDBModalBody>
                        Show a second modal and hide this one with the button below.
                    </MDBModalBody>
                    <MDBModalFooter>
                        <MDBBtn onClick={() => { setToggleOneModal(!toggleOneModal);
                                                setTimeout(() => {
                                                setToggleTwoModal(!toggleTwoModal); }, 
                                                400);
                                                }}  >
                            Open second modal
                        </MDBBtn>
                    </MDBModalFooter>
            </MDBModalContent>
            </MDBModalDialog>
        </MDBModal>

      <MDBModal show={toggleTwoModal} setShow={setToggleTwoModal} tabIndex='-1'>
        <MDBModalDialog centered>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Modal 2</MDBModalTitle>
              <MDBBtn
                className='btn-close'
                color='none'
                onClick={() => setToggleTwoModal(!toggleTwoModal)}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>Hide this modal and show the first with the button below.</MDBModalBody>
            <MDBModalFooter>
              <MDBBtn
                onClick={() => {
                  setToggleTwoModal(!toggleTwoModal);
                  setTimeout(() => {
                    setToggleOneModal(!toggleOneModal);
                  }, 400);
                }}
              >
                Back to first
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
      <Footer/>
    </>
  );
}