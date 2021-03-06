import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Create } from "./pages/CREATE";
import { Read } from "./pages/READ";
import { ReadDetails } from "./pages/READDETAILS";
import { Edit } from "./pages/EDIT";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Read />} />
        <Route path="/create" element={<Create />} />
        <Route path="/detail/:userId" element={<ReadDetails />} />
        <Route path="/edit/:userId" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// Verbos!
// GET - puxar infos
// POST - criar/postar infos
// PUT e PATCH - editar
// DELETE - remover

// APENAS INFORMATIVOS!

// CRUD - Create Read Update Delete
