import React, { useEffect, useState } from "react";
import axios from "axios";

import "app/App.css";
import logo from "app/logo.svg";
// components
import Header from "components/Header";
import CommentModal from "components/CommentModal";
import Comments from "components/Comments";
import TopComments from "components/TopComments";
import { mockComments } from "../store/api";

function App() {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://jsonplaceholder.typicode.com/comments"
      );

      setComments(result.data);
    };

    fetchData();
  }, []);

  return (
    <>
      <Header />
      <CommentModal comments={comments} setComments={setComments} />

      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <TopComments comments={comments} />
      <Comments comments={comments} setComments={setComments} />
    </>
  );
}

export default App;
