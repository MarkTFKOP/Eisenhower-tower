import React from "react";
import Login from "./Login";
import Homepage from "./Homepage";
import ToDoListComponent from "./ToDoListComponent";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
export default function Main() {
  //   const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div
      style={{
        "background-color": "#a6a7ab",
        "text-align": "center",
        height: "200%",
      }}
      className="App AppBody"
    >
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/todo" element={<ToDoListComponent />} />
        <Route path="/login" component={<Login />} />
        <Route path="/home" component={<Homepage />} />
      </Routes>
    </div>
  );
}
