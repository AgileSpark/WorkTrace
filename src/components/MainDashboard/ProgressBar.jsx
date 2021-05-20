import React, {useState} from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    flexGrow: 1
  }
});

export default function ProgressBar({props}) {
  const classes = useStyles();
  const theme = useTheme();

  const { progress_step, company} = props;
  // pass in the step number: 
  const [activeStep, setActiveStep] = useState(progress_step);
  const jobSteps = {
    0: "Not Started",
    1: "Sent Resume",
    2: "Contacted/Interview Scheduled",
    3: "Initial Interview",
    4: "2nd round Interview",
    5: "3rd round Interview",
    6: "Offer",
    7: "Negotiations",
    8: "Accepted"
  };
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const updateStepInDatabase = () => {
    // fetch request 
  }

  return (
    <div>
      <div> App Status: {jobSteps[activeStep]}</div>
      <MobileStepper
        variant="progress"
        steps={9}
        position="static"
        activeStep={activeStep}
        className={classes.root}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === 8}>
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </div>
  );
}
