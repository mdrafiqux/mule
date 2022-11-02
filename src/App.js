import ReactHtmlParser from "react-html-parser";
import MULEDATA from "./questions.json";
import { useState } from "react";
const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
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
                <p className="paragraph">{val.content}</p>
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
    </>
  );
};

export default App;
