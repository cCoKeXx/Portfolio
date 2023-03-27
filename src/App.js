import React, { Suspense } from "react";
import Navbar from "./components/Navbar";
import Homepage from "pages/Home";
const Footer = React.lazy(() => import("./components/Footer"));
function App() {
  return (
    <div className="relative">
      <Navbar />
      <Homepage />
      <Suspense fallback={<div>Loading...</div>}>
        <Footer/>
      </Suspense>

    </div>
  );
}

export default App;
