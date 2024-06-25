import React from 'react';
import ReactHtmlParser from "react-html-parser";
import MULEDATA from "../questions.json";
import { useState } from "react";
import GoToTop from "../GoToTop";
import { Link } from "react-router-dom";


export function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [show, setShow] = useState(false);
  const handleClick = () => {
    // 👇️ clear input value
    setSearchTerm('');
    document.getElementById('searchcontrol').value='';
    document.getElementById("searchcontrol").focus();
  };
  return (
    <>
      <div className="container">
        <div className="app">
          {/* <h2 className="mainheading">Search for All Mule Docs</h2> */}
          <div className="height-135">
         <div className="fixed-container">
          <input
          id="searchcontrol"
            type="text"
            className="form-control"
            placeholder="Search for a Topic..."
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
          <div className="">
           <button className="btn btn-primary me-3" type="button" onClick={()=>setShow(!show)}>{show === true ? "Hide Index" : "Show Index"}</button>
           <button className="btn btn-dark" type="button" onClick={handleClick}>Clear Search</button>
           </div>
          </div>
          </div>
          {MULEDATA.filter((val) => {
            if (searchTerm === "") {
              // return val;
              //  } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase()) || val.content.toLowerCase().includes(searchTerm.toLowerCase()) || val.point1.toLowerCase().includes(searchTerm.toLowerCase()) || val.point2.toLowerCase().includes(searchTerm.toLowerCase()) || val.point3.toLowerCase().includes(searchTerm.toLowerCase()) || val.point4.toLowerCase().includes(searchTerm.toLowerCase()) || val.point5.toLowerCase().includes(searchTerm.toLowerCase()) || val.point6.toLowerCase().includes(searchTerm.toLowerCase())) {
            } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
              return val;
            }
          }).map((val, key) => {
            return (
              <div className="box" key={val.id}>
                <h4 className="heading">{val.title}</h4>
                <p className="paragraph">{ReactHtmlParser(val.content)}</p>
                <p className="paragraph">{ReactHtmlParser(val.point1)}</p>
                <p className="paragraph">{ReactHtmlParser(val.point2)}</p>
                <p className="paragraph">{ReactHtmlParser(val.point3)}</p>
                <p className="paragraph">{ReactHtmlParser(val.point4)}</p>
                <p className="paragraph">{ReactHtmlParser(val.point5)}</p>
                <p className="paragraph">{ReactHtmlParser(val.point6)}</p>
                <p className="paragraph">{ReactHtmlParser(val.image)}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="container pad-lr-20 m-top-135">
        {
         MULEDATA.map((questions, key) => {
            return(
              <>
              <div className="search-list" key={questions.id}>
                {
                  show &&  
                  <>
                  <div className="">
                  <ul><li><a href={"#"+questions.id} className="anchor">{questions.id}. {questions.title}</a></li></ul>
                
                  </div>
                  </>
                }
              </div>
              
              </>
            )
          })
        }
        {
         MULEDATA.map( (questionblocks, key) => {
            return(
              <>
              <div className="index-list" key={questionblocks.id}>
                {
                  show &&  
                  <>
                  <div className="questions-list" id={questionblocks.id}>
                  <h4 className="heading">{questionblocks.title}</h4>
                <p className="paragraph">{ReactHtmlParser(questionblocks.content)}</p>
                <p className="paragraph">{ReactHtmlParser(questionblocks.point1)}</p>
                <p className="paragraph">{ReactHtmlParser(questionblocks.point2)}</p>
                <p className="paragraph">{ReactHtmlParser(questionblocks.point3)}</p>
                <p className="paragraph">{ReactHtmlParser(questionblocks.point4)}</p>
                <p className="paragraph">{ReactHtmlParser(questionblocks.point5)}</p>
                <p className="paragraph">{ReactHtmlParser(questionblocks.point6)}</p>
                <p className="paragraph">{ReactHtmlParser(questionblocks.image)}</p>
                  </div>
                  </>
                                  }
              </div>
              
              </>
            )
          })
        }
      
      </div>
      <div className="wrapper-div">
      <GoToTop />
      </div>
    </>
  );
};

export default Home;