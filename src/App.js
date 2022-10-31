import ReactHtmlParser from "react-html-parser";
import MULEDATA from "./MULE_DATA.json";
import { useState } from "react";
const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      {/* <Stories /> */}
      <div className="container">
        <div className="app">
          <h2 className="mainheading">Search for Mule Docs</h2>
          <input
            type="text"
            className="input"
            placeholder="Search.."
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
          {MULEDATA &&
            MULEDATA.filter((val) => {
              if (searchTerm === "") {
                // return val;
              } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase()) || val.content.toLowerCase().includes(searchTerm.toLowerCase()) || val.points.toLowerCase().includes(searchTerm.toLowerCase())) {
                return val;
              }
            }).map((val, key) => {
              return (
                <div className="box" key={val.id}>
                  <h4 className="heading">{val.title}</h4>
                  <p className="paragraph">{val.content}</p>
                  <p className="paragraph">{ReactHtmlParser(val.points)}</p>
                  <p className="paragraph">{ReactHtmlParser(val.points1)}</p>
                  <p className="paragraph">{ReactHtmlParser(val.points2)}</p>
                  <p className="paragraph">{ReactHtmlParser(val.points3)}</p>
                  <p className="paragraph">{ReactHtmlParser(val.points4)}</p>
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
