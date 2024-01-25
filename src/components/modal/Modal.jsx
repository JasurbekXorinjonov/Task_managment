import React, { useState } from "react";

function Modal({ onClose, onAdd }) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [text, setText] = useState("");
  const [status, setStatus] = useState("");

  const close = () => {
    onClose();
  };

  const add = () => {
    onAdd({ name, date, text, status });
  };

  return (
    <div className="card modal">
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder="Date" value={date} onChange={(e) => setDate(e.target.value)} />
      <input type="text" placeholder="Text" value={text} onChange={(e) => setText(e.target.value)} />
      <input type="text" placeholder="Status" value={status} onChange={(e) => setStatus(e.target.value)} />
      <button className="btn btn-primary" onClick={add}>
        Add
      </button>
      <button className="btn btn-primary" onClick={close}>
        Close
      </button>
    </div>
  );
}

export default Modal;
