import { useEffect, useState } from "react";
import bgDesktop from "../assets/images/bg-sidebar-desktop.svg";
import bgMobile from "../assets/images/bg-sidebar-mobile.svg";
import { useAtom } from "jotai";
import activeStepAtom from "../atoms/activeStepAtom";
const StepsContainer = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [activeStep] = useAtom(activeStepAtom);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative flex justify-center lg:w-[35%]">
      <img
        src={screenWidth < 1024 ? bgMobile : bgDesktop}
        alt="bg"
        className="w-full"
      />
      <div className="absolute top-10 left-1/2 flex gap-5 max-lg:-translate-x-1/2 lg:left-10 lg:flex-col lg:gap-7">
        <div className="step">
          <div
            className={`step-number ${activeStep === "your-info" && "active"}`}
          >
            1
          </div>
          <div className="step-text">
            <p>STEP 1</p>
            <h1>YOUR INFO</h1>
          </div>
        </div>

        <div className="step">
          <div
            className={`step-number ${activeStep === "select-plan" && "active"}`}
          >
            2
          </div>
          <div className="step-text">
            <p>STEP 2</p>
            <h1>SELECT PLAN</h1>
          </div>
        </div>

        <div className="step">
          <div
            className={`step-number ${activeStep === "add-ons" && "active"}`}
          >
            3
          </div>
          <div className="step-text">
            <p>STEP 3</p>
            <h1>ADD-ONS</h1>
          </div>
        </div>

        <div className="step">
          <div
            className={`step-number ${activeStep === "summary" && "active"}`}
          >
            4
          </div>
          <div className="step-text">
            <p>STEP 4</p>
            <h1>SUMMARY</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepsContainer;
