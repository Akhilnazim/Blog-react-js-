import React, { useState, useEffect } from "react";
import "./style.css";
import Card from "../UI/Card";
import blogPost from "../../data/blog.json";
import { NavLink } from "react-router-dom";

const Sidebar = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const posts = blogPost.data;
    setPosts(posts);
  }, [posts]);
  return (
    <div className="sidecontainer">
      <Card
        style={{
          marginBottom: "20px",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <div className="header">
          <span>About Us</span>
        </div>
      </Card>
      <Card
        style={{
          marginBottom: "20px",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <div className="profile">
          <img src={require("../../blogpostimages/a.jpg")} alt="hello"></img>
        </div>
        <div className="cardbody">
          <p className="personal">Live the best</p>
        </div>
      </Card>
      <Card
        style={{
          marginBottom: "20px",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <div className="header">
          <span>Social Networks</span>
        </div>
      </Card>
      <Card
        style={{
          marginBottom: "20px",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <div className="header">
          <span>Recent Posts</span>
        </div>
        <div className="recentposts">
          {posts.map((post) => {
            return (
              <NavLink key={post.id} to={`/post/${post.id}`}>
                <div className="recent">
                  <h3>{post.blogTitle}</h3>
                  <span>{post.postedOn}</span>
                </div>
              </NavLink>
            );
          })}
        </div>
      </Card>
    </div>
  );
};

export default Sidebar;
