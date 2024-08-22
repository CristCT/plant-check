import React from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import PropTypes from 'prop-types';

const StepperNavigation = ({ steps, currentStep, setCurrentStep }) => (
  <Stepper activeStep={currentStep} alternativeLabel>
    {steps.map((label, index) => (
      <Step key={label} onClick={() => setCurrentStep(index)}>
        <StepLabel>{label}</StepLabel>
      </Step>
    ))}
  </Stepper>
);

StepperNavigation.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentStep: PropTypes.number.isRequired,
  setCurrentStep: PropTypes.func.isRequired,
};

export default StepperNavigation;
