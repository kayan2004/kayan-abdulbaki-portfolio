import React from "react";

type Props = {
  styles?: string;
};
const GlowingBar = ({ styles }: Props) => {
  return <div id="glowing-bar" className={`w-4 md:w-8 h-full ${styles}`}></div>;
};

export default GlowingBar;
