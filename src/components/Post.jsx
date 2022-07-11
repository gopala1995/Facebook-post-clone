import React from "react";
import "./Post.css"
import userimg from "./icons8-user-50.png"
import ReactGiphySearchbox from 'react-giphy-searchbox'


export const Post = () => {



    

  return (
    <div className= "mainContainer">
        <div>
       
        </div>
     <span> <img src={userimg} alt="" /><input className="post_div" type="text" /></span> 
      
      <div className="searchboxwrapper">
        <ReactGiphySearchbox
        apiKey = "81VVDpHQgebCEmrSghxiaywJf0r2chnY"
        onSelect={(item)=>console.log((item))}
        masonryConfig={[
            {columns:2,imageWidth:110,gutter:5},
            {mq:"700px", columns:3,imageWidth:120,gutter:5}
        ]}
        />
      </div>
    </div>
  );
};
