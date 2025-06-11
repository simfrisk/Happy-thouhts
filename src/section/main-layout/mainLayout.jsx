// components/MainLayout.tsx
import { Outlet } from "react-router";
import { Titlte } from "../../styling/Typography"
import { Sorting } from "../header/Sorting";
import { Footer } from "../Footer"

export const MainLayout = () => {
  return (
    <>
    <div style={{ textAlign: "center" }}>
      <Titlte to="/">
        <h1>Happy Thoughts</h1>
      </Titlte>
      </div>
      <Sorting />
      <Outlet /> {/* This renders nested routes */}
      <Footer />
    </>
  );
};  