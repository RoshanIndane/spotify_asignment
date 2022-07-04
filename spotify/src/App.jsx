import "./App.css";
import Banner from "./components/Banner/Banner";
import Sidebar from "./components/Sidebar";
import Container from "./components/continer/Container";
import { useEffect, useState } from "react";

const CLIENT_ID = "623b2bb0bc9c466689a3d9f53ac8eba3";
const CLIENT_SECRET = "45d5671ec7f84643bc432cac1d337dd9";

function App() {
  const [accessToken, setAccessToken] = useState("");
  const [featurePlaylist, setfeaturePlaylist] = useState([]);
  const [genre, setgenre] = useState([]);
  const [thisWeek, setthisWeek] = useState([]);
  useEffect(() => {
    var authParameters = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body:
        "grant_type=client_credentials&client_id=" +
        CLIENT_ID +
        "&client_secret=" +
        CLIENT_SECRET,
    };

    fetch("https://accounts.spotify.com/api/token", authParameters)
      .then((results) => results.json())
      .then((data) => setAccessToken(data.access_token));
  }, []);
  useEffect(() => {
    if (accessToken != "") {
      featuredPaylist("browse/featured-playlists", "featurePlaylist");
      featuredPaylist("recommendations/available-genre-seeds", "genre");
      featuredPaylist("browse/new-releases", "thisWeek");
    }
  }, [accessToken]);

  async function featuredPaylist(route, key) {
    var featured = {
      method: "GET",
      headers: {
        "Content-Type": "appliction/json",
        Authorization: "Bearer " + accessToken,
      },
    };

    await fetch(`https://api.spotify.com/v1/${route}`, featured)
      .then((response) => response.json())
      .then((data) => {
        if (key === "featurePlaylist") {
          setfeaturePlaylist([...data.playlists.items]);
        } else if (key === "genre") {
          setgenre([...data.genres]);
        } else if (key === "thisWeek") {
          setthisWeek([...data.albums.items]);
        }
      });
  }

  return (
    <div className="App">
      <div className="colum1">
        <Sidebar />
      </div>

      <div className="colum2">
        <div className="row1">
          <Banner />
        </div>
        <div className="row2">
          <Container data={featurePlaylist} title={"FEATURED PLAYLIST"} />
          <Container data={thisWeek} title={"RELEASED THIS WEEK"}/>
          <Container data={genre} title={"BROWSE"}/>
        </div>
        <div className="row3"></div>
      </div>
    </div>
  );
}

export default App;
