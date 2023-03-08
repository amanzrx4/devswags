import QrReader from "react-qr-scanner";

import React, { useState } from "react";

const Scanner = () => {
  const [barCode, setBarCode] = useState(null);
  const onScan = (obj) => {
    if (obj) {
      setBarCode(obj);
      console.log("obj", obj.text);
    }
  };
  const onError = (error) => {
    console.log("error here", error);
  };
  return (
    <div>
      {typeof window !== "undefined" && !barCode && (
        <>
          <QrReader onError={onError} onScan={onScan}></QrReader>
        </>
      )}
      <div>
        <label
          style={{
            cursor: "pointer",
          }}
          htmlFor="file"
        >
          Select file
        </label>
        <input type="file" accept="image/*" />
      </div>
    </div>
  );
};

export default Scanner;
