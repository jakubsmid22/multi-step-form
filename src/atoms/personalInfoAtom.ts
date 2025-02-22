import { atom } from "jotai";

const personalInfoAtom = atom({
  name: "",
  email: "",
  phone: "",
});

export default personalInfoAtom;