import "./App.css";
import { SearchBar } from "./components/SearchBar/SearhBar";
import { Weather } from "./components/Weather/Weather";

function App() {
  return (
    <>
      <div className="flex items-center justify-center md:h-screen">
        <div className="container mx-auto rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 p-5">
          <SearchBar />
          <Weather />
        </div>
      </div>
    </>
  );
}

export default App;
