import React, { useState } from "react";

import "./Post.css";
import userimg from "./icons8-user-50.png";

import ReactGiphySearchbox from "react-giphy-searchbox";



export const Post = () => {
  const [search, setSearch] = useState("");
  // const [Data ,setData] = useState("")
  const [Gifs,setGifs] = useState([])

  const Giphy_Api = `https://api.giphy.com/v1/gifs/search?api_key=81VVDpHQgebCEmrSghxiaywJf0r2chnY&q=${search}&limit=25&offset=0&rating=g&lang=en`;

  const postControl = () => {
    if(search.length > 0){
      fetch(Giphy_Api+search).then((res)=>{
        return res.json()
      }).then((result)=>{
        // console.log(result.data);
        setGifs(result.data.map((Gifs)=>{
          return Gifs.images.fixed_height.url
        }))
      }).catch(()=>{
        alert("somthing went wrong")
      })
    }
  };

  return (
    <div className="mainContainer">
      <div></div>
      <span>
        <img src={userimg} alt="" style={{ marginBottom: "80px" }} />
        <input
          className="post_div"
          type="text"
          placeholder="What's in your mind"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </span>

      <div className="searchboxwrapper">
        <button className="btn1">Tag friends</button>
        <button className="btn1">Tag friends</button>

        <button className="btn1">Check in</button>
        <button className="btn1">Tag events</button>
      </div>
      <button className="btn_post" onClick={postControl}>
        Post
      </button>
      <div className="postContent_div">
        {
          Gifs.map((gif)=>{
            return(
              <div className="items">
                   <img className="imgDiv" src={gif} alt="" />
              </div>
            )
          })
          }
      </div>
    </div>
  );
};
