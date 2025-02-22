import { Plan } from "../atoms/planAtom";

interface AddOns {
  onlineService: boolean;
  largerStorage: boolean;
  customizableProfile: boolean;
}

const getPrice = (plan: Plan, addOns: AddOns) => {
  const { option, billing } = plan;
  const { onlineService, largerStorage, customizableProfile } = addOns;

  let base = 0;
  let addOnsTotal = 0;

  if (option === "arcade") {
    billing === "monthly" ? (base = 9) : (base = 90);
  } else if (option === "advanced") {
    billing === "monthly" ? (base = 12) : (base = 120);
  } else if (option === "pro") {
    billing === "monthly" ? (base = 15) : (base = 150);
  }

  if (onlineService) {
    billing === "monthly" ? (addOnsTotal += 1) : (addOnsTotal += 10);
  }

  if (largerStorage) {
    billing === "monthly" ? (addOnsTotal += 2) : (addOnsTotal += 20);
  }

  if (customizableProfile) {
    billing === "monthly" ? (addOnsTotal += 2) : (addOnsTotal += 20);
  }

  return {
    base,
    total: base + addOnsTotal,
  };
};

export default getPrice;