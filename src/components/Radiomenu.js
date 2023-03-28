import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { MDBRow, MDBCol} from 'mdb-react-ui-kit';
function Radiomenu() {

  const [price, setPrice] = useState(100); // ราคาเริ่มต้น
  const [extraPrice, setExtraPrice] = useState(0); // ราคาเพิ่มเติม

  const handleExtraPrice = (e) => {
    const value = parseInt(e.target.value);
    setExtraPrice(value);
  };

  const totalPrice = price + extraPrice; // ราคารวม

  return (
    <div>
        <MDBRow className='row-cols-1 row-cols-md-3'>                    
                                <Grid container spacing={3}>
                                    <Grid item xs={4} md={4}>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="extraPrice" id="Typemenu1" value="0" checked onChange={handleExtraPrice} />
                                            <label class="form-check-label" for="Typemenu1">
                                                Hot
                                            </label>
                                        </div>
                                    </Grid>
                                    <Grid item xs={4} md={4}>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="extraPrice" id="Typemenu2" value="50" checked onChange={handleExtraPrice} />
                                            <label class="form-check-label" for="Typemenu2">
                                                Cold
                                        </label>
                                        </div>
                                    </Grid>
                                    <Grid item xs={4} md={4}>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="extraPrice" id="Typemenu3" value="100" checked onChange={handleExtraPrice}/>
                                            <label class="form-check-label" for="Typemenu3">
                                                Frape
                                            </label>
                                        </div>
                                    </Grid>
                                </Grid>
                            
                        </MDBRow>
      
    </div>
  );
}
export default Radiomenu