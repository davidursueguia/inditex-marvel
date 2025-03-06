import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.tsx";
import CharacterDetail from "./pages/CharacterDetail.tsx";
import TopBar from "./components/TopBar.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

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
        </Routes>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
};

export default App;
