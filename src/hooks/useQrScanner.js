import dynamic from "next/dynamic";

const QrReader = dynamic(() => import("react-qr-scanner"), {
  ssr: false,
});
import React, { useEffect } from "react";

const useQrScanner = () => {
  const videoElm = document.getElementById("qrVideo");
  useEffect(() => {
    if (!videoElm) return;

    const qrScanner = new QrReader(videoElm, (result) =>
      console.log("decoded qr code:", result)
    );
  }, [videoElm]);

  return <div>useQrScanner</div>;
};

export default useQrScanner;
