import { useAtom } from "jotai";
import ContainerFooter from "./ContainerFooter";
import PersonalInfo from "./PersonalInfo";
import StepsContainer from "./StepsContainer";
import activeStepAtom from "../atoms/activeStepAtom";
import SelectPlan from "./SelectPlan";
import AddOns from "./AddOns";
import Summary from "./Summary";
import { useRef } from "react";
import completedAtom from "../atoms/completedAtom";
import ThankYou from "./ThankYou";

const Container = () => {
  const [activeStep] = useAtom(activeStepAtom);
  const [completed] = useAtom(completedAtom);
  const formRef = useRef<HTMLFormElement>(null);

  const handleNextStep = () => {
    if (formRef.current) {
      formRef.current.requestSubmit();
    }
  };

  return (
    <div className="relative flex h-screen w-full flex-col justify-between md:w-[770px] lg:h-[600px] lg:w-[940px] lg:flex-row lg:gap-10 lg:rounded-2xl lg:bg-white lg:p-3 lg:pl-0">
      <StepsContainer />
      <div className="lg:w-[65%]">
        {completed ? (
          <ThankYou />
        ) : (
          <>
            <>
              {activeStep === "your-info" && <PersonalInfo ref={formRef} />}
              {activeStep === "select-plan" && <SelectPlan ref={formRef} />}
              {activeStep === "add-ons" && <AddOns ref={formRef} />}
              {activeStep === "summary" && <Summary ref={formRef} />}
            </>
            <ContainerFooter handleNextStep={handleNextStep} />
          </>
        )}
      </div>
    </div>
  );
};

export default Container;
