import React from 'react';

function DownloadCV() {
  //download cv
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/PDF/CV.pdf";
    link.download = "CV.pdf";
    link.click();
  };

  return (
    <>
      <button
        onClick={(e) => {
          e.preventDefault()
          downloadCV()
        }}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-400 text-white hover:bg-emerald-600 transition-colors"
      >
        Download CV
      </button>
    </>
  )
}

export default DownloadCV;
