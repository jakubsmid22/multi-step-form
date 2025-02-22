import arcadeIcon from "../assets/images/icon-arcade.svg";
import advancedIcon from "../assets/images/icon-advanced.svg";
import proIcon from "../assets/images/icon-pro.svg";
import { forwardRef } from "react";
import { useAtom } from "jotai";
import planAtom from "../atoms/planAtom";
import activeStepAtom from "../atoms/activeStepAtom";

const SelectPlan = forwardRef<HTMLFormElement>((_, ref) => {
  const [plan, setPlan] = useAtom(planAtom);
  const [, setActiveStep] = useAtom(activeStepAtom);

  const { option, billing } = plan;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setActiveStep("add-ons");
  };

  return (
    <form onSubmit={submit} ref={ref} className="form">
      <div className="form-titles">
        <h1 className="form-title">Select your plan</h1>

        <p className="form-subtitle">
          You have the option of monthly or yearly billing.
        </p>
      </div>

      <div>
        <div className="space-y-3 lg:space-y-0 lg:flex lg:gap-5">
          <div
            onClick={() => setPlan({ ...plan, option: "arcade" })}
            className={`plan ${option === "arcade" && "active"}`}
          >
            <img src={arcadeIcon} alt="arcade-icon" />
            <div className="space-y-1">
              <h1>Arcade</h1>
              <p>{billing === "yearly" ? "$90/yr" : "$9/mo"}</p>
              {billing === "yearly" && (
                <div className="yearly-dicount">2 months free</div>
              )}
            </div>
          </div>

          <div
            onClick={() => setPlan({ ...plan, option: "advanced" })}
            className={`plan ${option === "advanced" && "active"}`}
          >
            <img src={advancedIcon} alt="advanced-icon" />
            <div className="space-y-1">
              <h1>Advanced</h1>
              <p>{billing === "yearly" ? "$120/yr" : "$12/mo"}</p>
              {billing === "yearly" && (
                <div className="yearly-dicount">2 months free</div>
              )}
            </div>
          </div>

          <div
            onClick={() => setPlan({ ...plan, option: "pro" })}
            className={`plan ${plan.option === "pro" && "active"}`}
          >
            <img src={proIcon} alt="pro-icon" />
            <div className="space-y-1">
              <h1>Pro</h1>
              <p>{billing === "yearly" ? "$150/yr" : "$15/mo"}</p>
              {billing === "yearly" && (
                <div className="yearly-dicount">2 months free</div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-alabaster rounded- flex items-center justify-center gap-10 py-4">
        <span
          className={`${plan.billing === "monthly" ? "text-marine-blue" : "text-cool-gray"} font-medium transition-all duration-300`}
        >
          Monthly
        </span>
        <div
          onClick={() =>
            setPlan((prev) => ({
              ...prev,
              billing: prev.billing === "monthly" ? "yearly" : "monthly",
            }))
          }
          className="bg-marine-blue relative h-7 w-13 cursor-pointer rounded-full"
        >
          <span
            className={`absolute top-1 h-5 w-5 rounded-full bg-white transition-transform duration-300 ${
              plan.billing === "monthly" ? "translate-x-1" : "translate-x-7"
            }`}
          ></span>
        </div>

        <span
          className={`${plan.billing === "yearly" ? "text-marine-blue" : "text-cool-gray"} font-medium transition-all duration-300`}
        >
          Yearly
        </span>
      </div>
    </form>
  );
});

export default SelectPlan;
