import React, { useReducer } from "react";
import {ResponsiveAppBar} from '../components/Nav'
import UserProfile from "../components/Profile";
import { Gallery } from "./Gallery";
const user = {
  name: "Sallar Mirza",
  email: "sallar@example.com",
  bio: "Software Engineer, loves React + FastAPI",
  profilePicture: "https://via.placeholder.com/150"
};



export const Home = () => {
      return (
    <div>
      <ResponsiveAppBar/>

      <main>
        <h2>Image Generator</h2>
              <UserProfile user={user}/>
      </main>
    </div>
  );
};
