import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Tabelpayment from './Tabelpayment';
import Form from 'react-bootstrap/Form';
const steps = ['Total payment', 'Scan Qrcode ', 'Evidence of money transfer'];

export default function Steppayment() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const Step1 = () => (
    <Box sx={{ mb: 2 }}>
      <Typography variant="h6">Step 1: Total payment</Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <label htmlFor="amount">Amount</label>
        <input type="number" id="amount" name="amount" required />
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <label htmlFor="cardNumber">Card Number</label>
        <input type="text" id="cardNumber" name="cardNumber" required />
      </Box>
    </Box>
  );

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length   ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          
          
          
        </React.Fragment>
      )}
      {/* Step1 */}
      {activeStep === steps.length - 3  ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            <Tabelpayment/>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            

            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>


          </Typography>
          
        </React.Fragment>
      ) : (
        <React.Fragment>
          
        </React.Fragment>
      )}
        {/* Step2 */}
        {activeStep === steps.length - 2  ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
             Gen Qr
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            

            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>


          </Typography>
          
        </React.Fragment>
      ) : (
        <React.Fragment>
          
        </React.Fragment>
      )}
      {/* Step3 */}
      {activeStep === steps.length - 1  ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            
          <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Default file input example</Form.Label>
                    <Form.Control type="file" />
                </Form.Group> 

            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            

            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>


          </Typography>
          
        </React.Fragment>
      ) : (
        <React.Fragment>
          
        </React.Fragment>
      )}



    </Box>
  );
}