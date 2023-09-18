import React from "react";
import Dashboard from "./pages/Dashboard/Dashboard";
import SignIn from "./pages/Signin/SignIn";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <>
      <div>
        <Toaster position="top-right" toastOptions={
          {
            duration: 5000,
            style: {
              fontFamily: 'monospace'
            }
          }
        }></Toaster>
        <BrowserRouter>
          <div>
            <Routes>
              <Route path="/" element={<SignIn />} />
              <Route path="/dash" element={<Dashboard />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}
