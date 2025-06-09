// components/MainLayout.tsx
import { Outlet } from "react-router";
import { Titlte } from "../../styling/Typography"
import { Sorting } from "../Sorting"
import { Footer } from "../Footer"

export const MainLayout = () => {
  return (
    <>
      <Titlte to="/">
        <h1>Happy Thoughts</h1>
      </Titlte>
      <Sorting />
      <Outlet /> {/* This renders nested routes */}
      <Footer />
    </>
  );
};  