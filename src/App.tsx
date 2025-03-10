import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.tsx";
import CharacterDetail from "./pages/CharacterDetail.tsx";
import TopBar from "./components/TopBar.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Favorites from "./pages/Favorites.tsx";

const App = () => {

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 60 * 24,
      },
    },
  });


  return (
    <>
      <QueryClientProvider client={queryClient}>
        <TopBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<CharacterDetail />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<p>Not found</p>} />
        </Routes>
      </QueryClientProvider>
    </>
  );
};

export default App;
