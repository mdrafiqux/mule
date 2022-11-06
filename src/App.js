import ReactHtmlParser from "react-html-parser";
import MULEDATA from "./questions.json";
import { useState } from "react";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="container">
        <div className="app">
          <h2 className="mainheading">Search for Mule Docs</h2>
          <input
            type="text"
            className="input"
            placeholder="Search for a Topic..."
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
          <div>
           <button className="button is-link " type="button" onClick={()=>setShow(!show)}>{show === true ? "Hide Index" : "Show Index"}</button>
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
      <div className="container pad-lr-20">
     
      
        {
         MULEDATA.map( (questions,key) => {
            return(
              <>
              <div className="" key={questions.id}>
                {
                  show &&  
                  <>
                  <div className="">
                  <ul><li><a href={"#"+questions.id}>{questions.id}. {questions.title}</a></li></ul>
                  </div>
                  </>
                                  }
              </div>
              
              </>
            )
          })
        }
        {
         MULEDATA.map( (questionblocks,key) => {
            return(
              <>
              <div className="" key={questionblocks.id}>
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
    </>
  );
};

export default App;
