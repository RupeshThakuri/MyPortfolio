import React from 'react'

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
      <button className="bg-[#24CDD5] text-white py-2 rounded-md hover:bg-[#3BB78F] transition-colors w-28 md:w-36 lg:w-40" onClick={() => downloadCV()}>
        Download CV
      </button>
    </>
  )
}

export default DownloadCV;
