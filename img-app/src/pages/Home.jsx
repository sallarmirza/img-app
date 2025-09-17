import React, { useReducer } from "react";
import {ResponsiveAppBar} from '../components/Nav'
import UserProfile from "./Profile";
import { Gallery } from "./Gallery";
import { PromptBox } from "../components/PromptBox";
import { ResponseBox } from "../components/ResponseBox";
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
        <ResponseBox/>
        <PromptBox/>
              <UserProfile user={user}/>
              <Gallery/>
      </main>
    </div>
  );
};
