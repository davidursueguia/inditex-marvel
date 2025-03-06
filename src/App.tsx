import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Detail from "./pages/Detail.tsx";
import TopBar from "./components/TopBar.tsx";
import SearchBar from "./components/SearchBar.tsx";

const App = () => {

  return (
    <>
      <TopBar />
      <div className={"pl-[48px] pr-[48px] pt-[48px]"}>
        <SearchBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
