import { useAtom } from "jotai";
import activeStepAtom from "../atoms/activeStepAtom";
import getPreviousStep from "../functions/getPreviousStep";
const ContainerFooter = ({
  handleNextStep,
}: {
  handleNextStep: () => void;
}) => {
  const [activeStep, setActiveStep] = useAtom(activeStepAtom);

  const goBack = () => {
    const previous = getPreviousStep(activeStep);
    setActiveStep(previous);
  };

  return (
    <div
      className={`flex bg-white p-5 lg:h-fit lg:pr-10 ${activeStep === "your-info" ? "justify-end" : "justify-between"}`}
    >
      <div
        onClick={goBack}
        className={`${activeStep === "your-info" ? "hidden" : "block"} text-cool-gray hover:text-marine-blue cursor-pointer font-medium transition-colors duration-300`}
      >
        Go Back
      </div>
      <button
        onClick={handleNextStep}
        className={`${activeStep === "summary" ? "bg-purplish-blue hover:bg-[#928CFF]" : "bg-marine-blue hover:bg-[#164A8A]"} cursor-pointer rounded-sm px-5 py-3 font-medium text-white transition-colors duration-300`}
      >
        {activeStep === "summary" ? "Confirm" : "Next Step"}
      </button>
    </div>
  );
};

export default ContainerFooter;
