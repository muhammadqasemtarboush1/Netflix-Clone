import { Route, Routes } from "react-router-dom";
import "./App.css";
import FavList from "./Components/FavList/FavList";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favMovies" element={<FavList />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
