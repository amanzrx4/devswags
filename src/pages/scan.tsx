import dynamic from "next/dynamic";
import React from "react";

type Props = {};

const Scanner = dynamic(() => import("@/components/Scanner"), {
  ssr: false,
});
const scan = (props: Props) => {
  return (
    <>
      <h4>scan here</h4>
      {typeof document !== "undefined" && <Scanner />}
      
    </>
  );
};

export default scan;
