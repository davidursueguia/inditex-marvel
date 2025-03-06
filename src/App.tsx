import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Detail from "./pages/Detail.tsx";
import TopBar from "./components/TopBar.tsx";

const App = () => {

  return (
    <>
      <TopBar />
      <div className={"pl-[48px] pr-[48px] pt-[48px]"}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
