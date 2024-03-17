import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 50px",
            height: "80px",
            background: "white",
          }}
        >
          <h4 style={{ fontSize: "25px" }}>todo</h4>
          <div
            style={{
              width: "200px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Link to="/home">
              <h5 style={{ fontSize: "25px" }}>Home</h5>
            </Link>
            <Link to="/admin">
              <h5 style={{ fontSize: "25px" }}>Admin</h5>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
