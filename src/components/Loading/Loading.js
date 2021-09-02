import React from "react";

const Loading = ({ darkMode }) => (
  <img
    className="loadingGif"
    src={`https://drive.google.com/uc?export=view&id=${
      darkMode ? `1w4VWO9G3Qm3QR8EbJnv-rZeG2JwYYhau` : `14Wxewn_Bl32GHOYMlO71MUoxD696D0_s`
    }`}
    alt="loading"
  />
);
export default Loading;
