import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LogIn } from "./section/log-in/logIn";
import { SignUp } from "./section/sign-up/signUp";
import { Cards } from "./section/cards/Cards";
import { MainLayout } from "./section/main-layout/mainLayout";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route element={<MainLayout />}>
          <Route path="/thoughts" element={<Cards />} />
          <Route path="/thoughts/:sort" element={<Cards />} />
          <Route path="/thoughts/:sort/:value" element={<Cards />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};