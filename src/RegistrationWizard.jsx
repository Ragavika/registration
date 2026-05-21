import React, { useState } from "react";

const RegistrationWizard = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [success, setSuccess] = useState(false);

  // Validation rules
  const validate = (name, value) => {
    let error = "";
    if (name === "email" && !value.includes("@")) {
      error = "Invalid email format";
    }
    if (name === "password" && value.length < 8) {
      error = "Password must be at least 8 characters";
    }
    if (name === "confirmPassword" && value !== formData.password) {
      error = "Passwords do not match";
    }
    setErrors({ ...errors, [name]: error });
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validate(name, value);
  };

  // Navigation
  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  // Final submission
  const handleSubmit = () => {
    console.log("Final Payload:", formData);
    setSuccess(true);
  };

  // Step validation logic
  const isStepValid = () => {
    if (step === 1) {
      return formData.firstName && formData.lastName && formData.dob;
    }
    if (step === 2) {
      return (
        formData.email &&
        !errors.email &&
        formData.password &&
        !errors.password &&
        formData.confirmPassword &&
        !errors.confirmPassword
      );
    }
    return true;
  };

  return (
    <div className="wizard-card">
      <h2>The Registration Wizard</h2>

      {/* Progress Bar */}
      <div className="progress-container">
        <div
          className="progress-bar"
          style={{
            width: `${(step / 3) * 100}%`,
          }}
        />
      </div>
      <p className="step-text">Step {step} of 3</p>

      {!success ? (
        <>
          {/* Step 1: Personal Info */}
          {step === 1 && (
            <div>
              <h3>Personal Info</h3>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
              />
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
              />
              <div>
                <button disabled={!isStepValid()} onClick={nextStep}>
                  Next ➡️
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Account Details */}
          {step === 2 && (
            <div>
              <h3>Account Details</h3>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="error-text">{errors.email}</p>}

              <div className="password-input-container">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password (min 8 chars)"
                  value={formData.password}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  className="password-toggle-btn"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
              {errors.password && (
                <p className="error-text">{errors.password}</p>
              )}

              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              {errors.confirmPassword && (
                <p className="error-text">{errors.confirmPassword}</p>
              )}

              <div>
                <button onClick={prevStep}>⬅️ Back</button>
                <button disabled={!isStepValid()} onClick={nextStep}>
                  Next ➡️
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Review & Submit */}
          {step === 3 && (
            <div>
              <h3>Review & Submit</h3>
              <pre>{JSON.stringify(formData, null, 2)}</pre>
              <div>
                <button onClick={prevStep}>⬅️ Back</button>
                <button onClick={handleSubmit}>✅ Submit</button>
              </div>
            </div>
          )}
        </>
      ) : (
        <h3 className="success-message">🎉 Success! Registration Complete.</h3>
      )}
    </div>
  );
};

export default RegistrationWizard;
