import { forwardRef } from "react";
import planAtom from "../atoms/planAtom";
import { useAtom } from "jotai";
import getPrice from "../functions/getPrice";
import addOnsAtom from "../atoms/addOnsAtom";
import activeStepAtom from "../atoms/activeStepAtom";
import completedAtom from "../atoms/completedAtom";

const Summary = forwardRef<HTMLFormElement>((_, ref) => {
  const [plan] = useAtom(planAtom);
  const [, setCompleted] = useAtom(completedAtom);
  const [addOns] = useAtom(addOnsAtom);
  const [, setActiveStep] = useAtom(activeStepAtom);
  const price = getPrice(plan, addOns);

  const { onlineService, customizableProfile, largerStorage } = addOns;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setCompleted(true);
  };

  return (
    <form ref={ref} onSubmit={submit} className="form">
      <div className="form-titles">
        <h1 className="form-title">Finishing up</h1>

        <p className="form-subtitle">
          Double-check everything looks OK before confirming.
        </p>
      </div>

      <div className="bg-alabaster space-y-5 rounded-lg p-5">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h1 className="text-marine-blue font-medium capitalize">
              {plan.option} ({plan.billing})
            </h1>
            <p
              className="text-cool-gray cursor-pointer underline hover:text-purplish-blue duration-300 transition-colors"
              onClick={() => setActiveStep("select-plan")}
            >
              Change
            </p>
          </div>
          <div className="text-marine-blue font-bold">
            ${price.base}/{plan.billing === "monthly" ? "mo" : "yr"}
          </div>
        </div>

        <hr className="text-cool-gray/50" />

        <div className="space-y-3">
          <div className="add-on-bill">
            {onlineService && (
              <div className="flex justify-between">
                <p>Online service</p>
                <p>{plan.billing === "monthly" ? "+$1/yr" : "+$10/yr"}</p>
              </div>
            )}
          </div>

          <div className="add-on-bill">
            {largerStorage && (
              <div className="flex justify-between">
                <p>Larger storage</p>
                <p>{plan.billing === "monthly" ? "+$2/yr" : "+$20/yr"}</p>
              </div>
            )}
          </div>

          <div className="add-on-bill">
            {customizableProfile && (
              <div className="flex justify-between">
                <p>Customizable profile</p>
                <p>{plan.billing === "monthly" ? "+$2/yr" : "+$20/yr"}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex justify-between px-5">
        <p className="text-cool-gray" >Total ({plan.billing === "monthly" ? "per month" : "per year"})</p>
        <p className="font-bold text-purplish-blue text-lg" >${price.total}/{plan.billing === "monthly" ? "mo" : "yr"}</p>
      </div>

    </form>
  );
});

export default Summary;
