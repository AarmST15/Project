import React from 'react'
import Form from 'react-bootstrap/Form';
import'./MNGsetting.css'
import Tablemenu from '../../components/Tablemenu';

function MNGsetting() {
   
    

    return (
        <div>
            MNGsetting
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="/mnghome">Home</a></li>
                <li class="breadcrumb-item active" aria-current="page">Setting</li>
                </ol>
            </nav>

            <form class="row g-3">
                <div class="col-md-6">
                    <label for="inputEmail4" class="form-label">Name</label>
                    <input type="email" class="form-control" id="inputEmail4"/>
                </div>
                <div class="col-md-6">
                    <label for="inputPassword4" class="form-label">Price</label>
                    <input type="password" class="form-control" id="inputPassword4"/>
                </div>
                <div class="col-12">
                    <label for="inputAddress" class="form-label">Details</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder="I’m a dish description."/>
                </div>
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Default file input example</Form.Label>
                    <Form.Control type="file" />
                </Form.Group>                
                <div class="col-md-4">
                    <label for="inputState" class="form-label">Type</label>
                    <select id="inputState" class="form-select">
                    <option selected>Choose...</option>
                    <option>Coffe</option>
                    <option>Tea</option>
                    <option>Milk</option>
                    <option>Soda</option>
                    <option>Bakery & Sweet</option>                    
                    </select>
                </div>
                               
                <div class="col-md-12">
                    <button type="submit" class="btn btn-primary">Add</button>
                </div>
            </form>
            <Tablemenu/>
            
            

            

        </div>

    )
    
}

export default MNGsetting