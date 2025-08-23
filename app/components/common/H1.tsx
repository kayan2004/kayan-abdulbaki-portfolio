import React from "react";

type Props = {
  children: string;
};

const H1 = ({children}: Props) => {
  return <h1 className=" text-xl md:text-4xl text-white">{children}</h1>;
};

export default H1;
