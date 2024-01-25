import React, { useState } from "react";
import { newData } from "../constans";
import Modal from "../modal/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { faFileLines, faUser } from "@fortawesome/free-regular-svg-icons";

function New() {
  const [data, setData] = useState(newData);
  const [modal, setModal] = useState(false);

  const addData = (newData) => {
    setData((prevData) => [...prevData, { ...newData, id: Date.now() }]);
    setModal(false);
  };

  const additem = () => {
    setModal(true);
  };

  const deleteTask = (id) => {
    const newData = data.filter((item) => item.id !== id);
    setData(newData);
  };

  return (
    <div>
      <div className="title">
        <p>Новые</p>
      </div>
      <div className="card" onDragLeave={(e) => e.preventDefault()} onDragOver={(e) => e.preventDefault()} onDrop={(e) => console.log(e)}>
        {data.map((item) => (
          <div key={item.id} className="card-box" draggable="true" onDragStart={(e) => console.log(e)} onDragEnd={(e) => console.log(e)}>
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

        {modal && <Modal onClose={() => setModal(false)} onAdd={addData} />}
      </div>
    </div>
  );
}

export default New;
