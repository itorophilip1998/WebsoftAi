import { useState } from "react";
import Input from "../../components/ui/Input";
import { signUpValue, type SignUpType } from "../../types/auth";
import Button from "../../components/ui/Button";

export default function SignUp() {
  const [formValues, setFormValues] = useState<SignUpType>(signUpValue);
  const [errors, setErrors] = useState<Partial<SignUpType>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name as keyof SignUpType]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const validateForm = () => {
    const newErrors: Partial<SignUpType> = {};

    if (!formValues.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formValues.username) {
      newErrors.username = "Username is required";
    } else if (formValues.username.length < 3) {
      newErrors.username = "Username must be at least 3 characters";
    }

    if (!formValues.password) {
      newErrors.password = "Password is required";
    } else if (formValues.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission here
      console.log("Form submitted:", formValues);
    }
  };

  return (
    <div className="authPage">
      <div className="authPage__header">
        <h1 className="authPage__title">Create Account</h1>
        <p className="authPage__subtitle">
          Welcome to <span className="brand-name">Websoft AI</span>, please
          create an account to get started.
        </p>
      </div>

      <form className="authForm" onSubmit={handleSubmit}>
        <div className="authForm__field">
          <Input
            label="Email Address"
            type="email"
            name="email"
            placeholder="Enter your email address"
            onChange={handleChange}
            value={formValues.email}
            required
            autoFocus
            className={`authInput ${errors.email ? "error" : ""}`}
          />
          {errors.email && (
            <span className="error-message">{errors.email}</span>
          )}
        </div>

        <div className="authForm__field">
          <Input
            label="Username"
            type="text"
            name="username"
            placeholder="Choose a username"
            onChange={handleChange}
            value={formValues.username}
            required
            className={`authInput ${errors.username ? "error" : ""}`}
          />
          {errors.username && (
            <span className="error-message">{errors.username}</span>
          )}
        </div>

        <div className="authForm__field">
          <Input
            label="Password"
            type="password"
            name="password"
            placeholder="Create a strong password"
            onChange={handleChange}
            value={formValues.password}
            required
            className={`authInput ${errors.password ? "error" : ""}`}
          />
          {errors.password && (
            <span className="error-message">{errors.password}</span>
          )}
        </div>

        <div className="authForm__actions">
          <Button
            value="Create Account"
            className="authBtn authBtn--primary"
            onClick={handleSubmit}
          />
        </div>

        <div className="authForm__footer">
          <p className="authForm__footer-text">
            Already have an account?
            <a href="/signin" className="authForm__link">
              Sign in here
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}
