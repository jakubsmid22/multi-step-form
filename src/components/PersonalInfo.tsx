import { forwardRef, useState } from "react";
import activeStepAtom from "../atoms/activeStepAtom";
import { useAtom } from "jotai";
import personalInfoAtom from "../atoms/personalInfoAtom";

const PersonalInfo = forwardRef<HTMLFormElement>((_, ref) => {
  const [, setActiveStep] = useAtom(activeStepAtom);
  const [personalInfo, setPersonalInfo] = useAtom(personalInfoAtom);

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPersonalInfo((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({ name: "", email: "", phone: "" });

    const data = new FormData(e.target as HTMLFormElement);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const phone = data.get("phone") as string;

    let newErrors = { name: "", email: "", phone: "" };
    let isValid = true;

    if (!name) {
      newErrors.name = "This field is required";
      isValid = false;
    }
    if (!email) {
      newErrors.email = "This field is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please provide a valid email";
      isValid = false;
    }
    if (!phone) {
      newErrors.phone = "This field is required";
      isValid = false;
    } else if (!/^\+?[1-9][0-9\s]{6,14}$/.test(phone)) {
      newErrors.phone = "Please provide a valid phone number";
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      setActiveStep("select-plan");
      setPersonalInfo({ name, email, phone });
    }
  };

  return (
    <form onSubmit={submit} ref={ref} className="form">
      <div className="form-titles">
        <h1 className="form-title">Personal info</h1>

        <p className="form-subtitle">
          Please provide your name, email adress and phone number.
        </p>
      </div>

      <div className="space-y-5">
        <div className={`input ${errors.name && "error"}`}>
          <div className="input-top">
            <label htmlFor="name">Name</label>
            {errors.name && <span>{errors.name}</span>}
          </div>

          <input
            type="text"
            id="name"
            name="name"
            placeholder="e.g. Stephen King"
            value={personalInfo.name}
            onChange={handleInputChange}
          />
        </div>

        <div className={`input ${errors.email && "error"}`}>
          <div className="input-top">
            <label htmlFor="email">Email Address</label>
            {errors.email && <span>{errors.email}</span>}
          </div>

          <input
            type="text"
            id="email"
            name="email"
            placeholder="e.g. stephenking@lorem.com"
            value={personalInfo.email}
            onChange={handleInputChange}
          />
        </div>

        <div className={`input ${errors.phone && "error"}`}>
          <div className="input-top">
            <label htmlFor="phone">Phone Number</label>
            {errors.phone && <span>{errors.phone}</span>}
          </div>

          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="e.g. +1 234 567 890"
            value={personalInfo.phone}
            onChange={handleInputChange}
          />
        </div>
      </div>
    </form>
  );
});

export default PersonalInfo;
