"use client";

import { useState } from "react";
import QRCode from "qrcode";

export default function QRCodePage() {
  const [inputValue, setInputValue] = useState("");
  const [qrCodeUrl, setQrCodeUrl] = useState("");

  const generateQrCode = async () => {
    try {
      const url = await QRCode.toDataURL(inputValue);
      setQrCodeUrl(url);
    } catch (err) {
      console.error("Error generating QR Code", err);
    }
  };

  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold mb-4">Generate QR Code</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter text or URL"
        className="border p-2 rounded mb-4 w-full max-w-md"
      />
      <button
        onClick={generateQrCode}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Generate QR Code
      </button>
      {qrCodeUrl && (
        <div className="mt-4">
          <img src={qrCodeUrl} alt="Generated QR Code" className="border" />
        </div>
      )}
    </div>
  );
}
