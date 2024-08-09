"use client";
import { useState } from "react";

export default function Home() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [transcript, setTranscript] = useState<string>(
    "It will update after processing!!"
  );
  const [loading, setLoading] = useState<boolean>(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setSelectedFile(file);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please select a file first.");
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("audio", selectedFile);

    try {
      const response = await fetch("http://localhost:8000/process-audio", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        setTranscript(data.transcript);
      } else {
        alert("Failed to process audio");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="px-8 md:px-20 py-4 text-2xl">
        NLP powered by AssemblyAI
      </div>
      <main className="flex min-h-screen flex-col items-center justify-between p-8 lg:p-24">
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm flex">
          <p className="flex w-full justify-center items-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit static rounded-xl border lg:bg-gray-200 p-4 lg:dark:bg-zinc-800/30">
            Upload your mp3 audio and our Natural Language Processing model
            converts it into text
          </p>
        </div>

        <div className="flex items-center justify-center w-full">
          <label
            htmlFor="dropzone-file"
            className="px-2 flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                mp3 file
              </p>
            </div>
            <input
              type="file"
              accept="audio/mp3"
              onChange={handleFileChange}
              className="block w-full max-w-[400px] text-lg text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              id="large_size"
            ></input>
          </label>
        </div>
        <button
          onClick={handleUpload}
          className="bg-gray-500 text-white px-4 py-2 rounded-md"
          disabled={!selectedFile || loading}
        >
          {loading ? "Processing..." : "Upload & Transcribe"}
        </button>

        <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
          <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            <h2 className="mb-3 text-2xl font-semibold">
              Text Output
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">{transcript}</p>
          </div>
        </div>
      </main>
    </div>
  );
}
