//importing components/menthods form lab
import React from "react";
import HeadsetIcon from "@mui/icons-material/Headset";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";

//importing css file
import "./sidebar.css";

//importing components
import { Titles } from "./titles/Titles";


const Sidebar = () => {
  return (
    <div className="container">
      <div className="box1">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8MqnFyyg_FbDia6eJTOKIkIBu7J7OyAgIsfHVMarloWOpQL1dWObu8d09Hjf3E4mFJu0&usqp=CAU" width='100%' height='100%'/ >
        <p>Roshan Indane</p>
      </div>
      <div className="box2">
        <Titles Icon={HeadsetIcon} Tag={"Discover"} />
        <Titles Icon={SearchIcon} Tag={"Search"} />
        <Titles Icon={FavoriteIcon} Tag={"Favourites"} />
        <Titles Icon={PlayCircleFilledIcon} Tag={"Playlists"} />
        <Titles Icon={DensityMediumIcon} Tag={"Charts"} />
      </div>
    </div>
  );
};

export default Sidebar;
