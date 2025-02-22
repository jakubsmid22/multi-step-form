import { Steps } from "../atoms/activeStepAtom";

const getPreviousStep = (activeStep: Steps) => {
  const steps: Steps[] = ["your-info", "select-plan", "add-ons", "summary"];
  const currentStepIndex = steps.indexOf(activeStep);

  if (currentStepIndex === 0) {
    return activeStep;
  }

  return steps[currentStepIndex - 1];
};

export default getPreviousStep;
