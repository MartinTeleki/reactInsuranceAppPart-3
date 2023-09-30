import React from "react";
import "./index.css";

export function Footer() {
  return (
    <div className="footer">
      <p>
        &copy; Created by{" "}
        <a
          href="https://github.com/MartinTeleki?tab=repositories"
          className="footer-link"
        >
          Mgr. Martin Teleki
        </a>
      </p>
    </div>
  );
}
