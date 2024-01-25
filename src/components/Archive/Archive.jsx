import React, { useState } from "react";
// import { archiveData } from "../constans";

function Archive() {
  // const [data, setData] = useState(archiveData);
  return (
    <div>
      <div className="title">
        <p>Архив</p>
      </div>
      <div className="card">
        {/* <div className="card p-2 scroll">
        {data.map((item) => (
          <div className="card-body" key={item.id}>
            <h5 className="card-title">{item.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{item.date}</h6>
            <p className="card-text">{item.text}</p>
            <p className="card-text">{item.status}</p>
            <button className="btn btn-primary">...</button>
          </div>
          ))}
        </div> */}
      </div>
    </div>
  );
}

export default Archive;
