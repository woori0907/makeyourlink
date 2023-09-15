import React from "react";
import { Button } from "./UI/Button";

export const Navbar = () => {
  return (
    <nav>
      <a href="#">DevLinks</a>
      <section>
        <button>Links</button>
        <button>Profile Details</button>
      </section>
      <section>
        <button>Preview</button>
      </section>
    </nav>
  );
};
