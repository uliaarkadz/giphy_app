import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Gif from "./components/Giphy";
import SearchButton from "./components/SearchButton";
import { useState } from "react";

function App() {
  const [gif, setGif] = useState({});
  const apiKey = "b5sMlFfrG0NRtUXq8RvLcRzVohbdtPQO";
  const getGiphy = async () => {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=&rating=g`;
    //fetch giphy data

    const response = await fetch(url);
    if (response.status == 200) {
      //get json
      const data = await response.json();
      console.log("adding url", data);
      setGif(data);
    } else {
      throw `error with status ${response.status}`;
    }
  };
  return (
    <div className="App">
      <Header />
      <SearchButton gifSerach={getGiphy} />
      <Gif gifImage={gif} />
    </div>
  );
}

export default App;
