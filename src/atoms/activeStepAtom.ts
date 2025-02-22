import { atom } from "jotai";

export type Steps = "your-info" | "select-plan" | "add-ons" | "summary";

const activeStepAtom = atom<Steps>("your-info");

export default activeStepAtom;
