import { faEllipsisVertical, faFileLines, faUser, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { newData } from "../constans";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Current() {
  const [data, setData] = useState(newData);

  return (
    <div>
      <div className="title">
        <p>Текущие</p>
      </div>
      <div className="card">
        {data.map((item) => (
          <div key={item.id} className="card-box">
            <div>
              <div className="card-item__profession">{item.profession}</div>
              <div className="card-item__department">{item.department}</div>
              <div className="card_btns">
                <button className="card-item__btn">
                  <p className="btn_text">В приоритете</p>
                </button>
                <button className="icon_btn">
                  <FontAwesomeIcon icon={faUserGroup} />
                  <p>3</p>
                </button>
                <button className="icon_btn">
                  <FontAwesomeIcon icon={faFileLines} />
                  <p>255</p>
                </button>
              </div>
              <div className="card_user">
                <div className="card-item__photo">
                  <FontAwesomeIcon icon={faUser} />
                </div>
                <div>
                  <p className="card-user__title">Рекруитер</p>
                  <div className="card-item__name">{item.name}</div>
                </div>
              </div>
            </div>

            <div className="card-left__btn">
              <button>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Current;
