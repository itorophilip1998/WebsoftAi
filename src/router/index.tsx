import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";
import OTP from "../pages/auth/OTP";
import ForgotPassword from "../pages/auth/ForgotPassword";
import ResetPassword from "../pages/auth/ResetPassword";
import Verified from "../pages/auth/Verified";
import AuthLayout from "../layouts/AuthLayout";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>

      {/* Authentication */}
      <Routes>
        <Route
          path="/auth/signin"
          element={
            <AuthLayout>
              <SignIn />
            </AuthLayout>
          }
        />
        <Route
          path="/auth/signup"
          element={
            <AuthLayout>
              <SignUp />
            </AuthLayout>
          }
        />
        <Route
          path="/auth/otp"
          element={
            <AuthLayout>
              <OTP />
            </AuthLayout>
          }
        />
        <Route
          path="/auth/forgot-password"
          element={
            <AuthLayout>
              <ForgotPassword />
            </AuthLayout>
          }
        />
        <Route
          path="/auth/reset-password"
          element={
            <AuthLayout>
              <ResetPassword />
            </AuthLayout>
          }
        />
        <Route
          path="/auth/verified"
          element={
            <AuthLayout>
              <Verified />
            </AuthLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
