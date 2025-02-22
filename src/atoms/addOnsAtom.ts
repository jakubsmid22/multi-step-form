import { atom } from "jotai";

const addOnsAtom = atom({
  onlineService: false,
  largerStorage: false,
  customizableProfile: false,
});

export default addOnsAtom;
