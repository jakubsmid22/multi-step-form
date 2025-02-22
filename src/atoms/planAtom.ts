import { atom } from "jotai";

export interface Plan {
  option: "arcade" | "advanced" | "pro";
  billing: "monthly" | "yearly";
}

const planAtom = atom<Plan>({
  option: "arcade",
  billing: "monthly",
});

export default planAtom;
