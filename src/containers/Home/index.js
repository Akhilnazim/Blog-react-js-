import React from "react";
import "./style.css";
import Card from "../../components/UI/Card";
import Sidebar from "../../components/Sidebar";

const Home = (props) => {
  const galleryHeight = 700;
  const galleryStyle = {
    height: galleryHeight + "px",
    overflow: "hidden",
  };
  const imageHeight = galleryHeight / 3;
  return (
    <div>
      <Card>
        <div className="gallery" style={galleryStyle}>
          <section style={{ width: "70%" }}>
            <div>
              <img
                className="imah"
                src={require("../../blogpostimages/ff.jpg")}
                alt="hello"
              ></img>
            </div>
          </section>
          <section className={"imageWrapper"} style={{ width: "30%" }}>
            <div style={{ height: `${imageHeight}px` }}>
              <img
                src={require("../../blogpostimages/a.jpg")}
                alt="hello"
              ></img>
            </div>
            <div style={{ height: `${imageHeight}px` }}>
              <img
                src={require("../../blogpostimages/bb.jpg")}
                alt="hello"
              ></img>
            </div>
            <div style={{ height: `${imageHeight}px` }}>
              <img
                src={require("../../blogpostimages/c.jpg")}
                alt="hello"
              ></img>
            </div>
          </section>
        </div>
      </Card>
      <section className="home">
        <div style={{width:'70%'}}>
          <Card style={{ marginBottom: "20px" }}>
              <div className="piw">
                  <img src={require("../../blogpostimages/c.jpg")} alt="naz"></img>
              </div>
              <div className="add" style={{textAlign: "center"}}>
                  <span>Featured</span>
                  <h2>Be the Best Version of yourself</h2>
                  <span>posted on 21st june</span>
                  <p>Love yourself to be the better version of yourself</p>
                  <button>Read more</button>
              </div>
              </Card>
          {/* <Card style={{ marginBottom: "20px" }}>Post2</Card> */}
        </div>
      
      <Sidebar />
      </section>
    </div>
  );
};

export default Home;
