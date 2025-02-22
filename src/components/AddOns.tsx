import { useAtom } from "jotai";
import { forwardRef } from "react";
import planAtom from "../atoms/planAtom";
import checkmarkImg from "../assets/images/icon-checkmark.svg";
import addOnsAtom from "../atoms/addOnsAtom";
import activeStepAtom from "../atoms/activeStepAtom";

const AddOns = forwardRef<HTMLFormElement>((_, ref) => {
  const [plan] = useAtom(planAtom);
  const [, setActiveStep] = useAtom(activeStepAtom);
  const [addOns, setAddOns] = useAtom(addOnsAtom);

  const { billing } = plan;
  const { onlineService, customizableProfile, largerStorage } = addOns;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setActiveStep("summary");
  };

  return (
    <form onSubmit={submit} ref={ref} className="form">
      <div className="form-titles">
        <h1 className="form-title">Pick add-ons</h1>

        <p className="form-subtitle">
          Add-ons help enhance your gaming experience.
        </p>
      </div>

      <div className="space-y-5">
        <div
          onClick={() =>
            setAddOns({ ...addOns, onlineService: !onlineService })
          }
          className={`add-on ${onlineService && "active"}`}
        >
          <div className="add-on-left">
            <div className="checkbox">
              <img
                src={checkmarkImg}
                alt="checkmark-img"
                className={onlineService ? "block" : "hidden"}
              />
            </div>
            <div className="add-on-info">
              <h1>Online service</h1>
              <p>Access to multiplayer games</p>
            </div>
          </div>

          <div className="add-on-right">
            {billing === "monthly" ? <p>+$1/mo</p> : <p>+$10/yr</p>}
          </div>
        </div>

        <div
          onClick={() =>
            setAddOns({ ...addOns, largerStorage: !largerStorage })
          }
          className={`add-on ${largerStorage && "active"}`}
        >
          <div className="add-on-left">
            <div className="checkbox">
              <img
                src={checkmarkImg}
                alt="checkmark-img"
                className={largerStorage ? "block" : "hidden"}
              />
            </div>
            <div className="add-on-info">
              <h1>Larger storage</h1>
              <p>Extra 1TB of cloud save</p>
            </div>
          </div>

          <div className="add-on-right">
            {billing === "monthly" ? <p>+$2/mo</p> : <p>+$20/yr</p>}
          </div>
        </div>

        <div
          onClick={() =>
            setAddOns({ ...addOns, customizableProfile: !customizableProfile })
          }
          className={`add-on ${customizableProfile && "active"}`}
        >
          <div className="add-on-left">
            <div className="checkbox">
              <img
                src={checkmarkImg}
                alt="checkmark-img"
                className={customizableProfile ? "block" : "hidden"}
              />
            </div>
            <div className="add-on-info">
              <h1>Customizable profile</h1>
              <p>Custom theme on your profile</p>
            </div>
          </div>

          <div className="add-on-right">
            {billing === "monthly" ? <p>+$2/mo</p> : <p>+$20/yr</p>}
          </div>
        </div>
      </div>
    </form>
  );
});

export default AddOns;
