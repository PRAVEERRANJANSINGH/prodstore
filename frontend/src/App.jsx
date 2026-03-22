
import { Box, Button } from "@chakra-ui/react";
import CreatePage from "./pages/CreatePage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import {Routes, Route} from "react-router"
function App() {
  return (
    <Box minH={"100vh"} >
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </Box>
  );
}
  

export default App
