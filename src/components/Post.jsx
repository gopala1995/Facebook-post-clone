import React, { useState } from "react";

import "./Post.css";
import userimg from "./Icon/icons8-user-50.png";
import friends from "./Icon/icons8-friends-64.png";
import calender from "./Icon/icons8-calendar-48.png";
import location from "./Icon/icons8-location-16.png";
import giff from "./Icon/icons8-gif-30.png";
import live from "./Icon/icons8-video-call-50.png";
import photo from "./Icon/icons8-photo-gallery-30.png";
import pen from "./Icon/icons8-fountain-pen-48.png";

// import ReactGiphySearchbox from "react-giphy-searchbox";

export const Post = () => {
  const [search, setSearch] = useState("");
  const [text, setText] = useState("");
  const [Display, setDisplay] = useState([]);
  const [Gifs, setGifs] = useState([]);
  const [Print, setPrint] = useState(false);

  const Giphy_Api = `https://api.giphy.com/v1/gifs/search?api_key=81VVDpHQgebCEmrSghxiaywJf0r2chnY&q=${search}&limit=25&offset=0&rating=g&lang=en`;

  const postControl = () => {
    setPrint(true);

    if (search.length > 0) {
      fetch(Giphy_Api + search)
        .then((res) => {
          return res.json();
        })
        .then((result) => {
          console.log(result);
          setGifs(
            result.data.map((Gifs) => {
              return Gifs.images.fixed_height.url;
            })
          );
        })
        .catch(() => {
          alert("somthing went wrong");
        });
    }
  };

  const displayText = () => {
    const Data = {
      gifs: setDisplay,
      input: text,
    };

    setText([...text, Data]);
    console.log(Data);
  };
  // const handelchange = ()=>{

  //   // setPrint(true)
  // }

  return (
    <>
      <div className="mainContainer">
        <div className="topDiv">
          <button className="topBtn">
            {" "}
            <span>
              <img className="icon1" src={pen} alt="" />
            </span>
            Compose post
          </button>
          <button className="topBtn">
            {" "}
            <span>
              <img className="icon1" src={photo} alt="" />
            </span>
            Photo/Video Album
          </button>
          <button className="topBtn">
            {" "}
            <span>
              <img className="icon1" src={live} alt="" />
            </span>
            Live Video
          </button>
        </div>
        <span>
          <img src={userimg} alt="" style={{ marginBottom: "20px" }} />
          <input
            className="post_div"
            type="text"
            placeholder="What's in your mind"
            // value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </span>

        <div className="searchboxwrapper">
          <button className="btn1">
            <span>
              <img className="icon1" src={friends} alt="" />
            </span>
            Tag friends
          </button>
          <button className="btn1">
            <span>
              <img className="icon1" src={location} alt="" />
            </span>
            Check in
          </button>

          <input
            style={{ width: "100px" }}
            className="btn1"
            placeholder="Search GIFs"
            // value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="btn1">
            <span>
              <img className="icon1" src={calender} alt="" />
            </span>
            Tag events
          </button>
        </div>
        <button className="btn_post" onClick={postControl}>
          Post
        </button>
        <div className="postContent_div">
          {Gifs.map((gif) => {
            return (
              <div className="items">
                <img className="imgDiv" src={gif} alt="" />
              </div>
            );
          })}
        </div>
      </div>
      <div className="displayText">
        {/* <img src={} alt="" /> */}

        <h3>{Print ? text : null}</h3>
      </div>
    </>
  );
};
