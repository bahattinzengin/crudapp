import React, { useState } from "react";

const Input = ({ placeholder, icon, name }) => {
  const [open, setOpened] = useState(false);

  return (
    <div className="inputcontainer">
      <img
        style={{ width: 20 }}
        src={icon === "user" ? "/user.png" : "/lock.png"}
        alt=""
      />
      <input
        name={name}
        placeholder={placeholder}
        type={icon === "password" ? (open ? "text" : "password") : "text"}

      />
      {icon === "password" &&
        (open ? (
          <img
            onClick={() => setOpened(!open)}
            style={{ width: 20 }}
            src="/eyeopened.png"
            alt=""
          />
        ) : (
          <img
            onClick={() => setOpened(!open)}
            style={{ width: 20 }}
            src="/eyeclosed.png"
            alt=""
          />
        ))}
    </div>
  );
};

export default Input;
