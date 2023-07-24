import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { SearchBar } from "./components/SearchBar/SearhBar";
import { Weather } from "./components/Weather/Weather";

function App() {
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="container mx-auto rounded-lg p-5 bg-gradient-to-r from-cyan-500 to-blue-500">
          <SearchBar />
          <Weather />
        </div>
      </div>
    </>
  );
}

export default App;
