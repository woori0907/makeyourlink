import React from "react";
import { Preview } from "./Preview";

export const ProfileResult = () => {
  return (
    <section>
      <nav>
        <button>Back to Editor</button>
        <button>ShareLink</button>
      </nav>
      <Preview></Preview>
    </section>
  );
};
