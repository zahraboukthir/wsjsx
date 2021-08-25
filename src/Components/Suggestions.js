import React from "react";

export const Suggestions = () => {
  const suggest = [
    {
      src: "https://www.youtube.com/embed/Law7wfdg_ls?list=PLDyQo7g0_nsVHmyZZpVJyFn5ojlboVEhE",
      title: `React router dom - Dev Ed`,
    },
    {
      src: "https://www.youtube.com/embed/vjf774RKrLc",
      title: `Rest Api — Dev Ed`,
    },
    {
      src: `https://www.youtube.com/embed/zQRrXTSkvfw?list=RDCMUClb90NQQcskPUGDIXsQEz5Q`,
      title: `Learn Node JS — Dev Ed`,
    },
    {
      src: "https://www.youtube.com/embed/CVpUuw9XSjY?list=RDCMUClb90NQQcskPUGDIXsQEz5Q",
      title: `Learn Redux — Dev ED`,
    },
  ];
  return (
    <div>
      {suggest.map((video) => (
        <div>
          <iframe
            width="100%"
            height="200"
            src={video.src}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <p>{video.title}</p>
        </div>
      ))}
    </div>
  );
};

export const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "grey",
        height: "50px",
        textAlign: "center",
        fontSize: "24px",
        paddingTop: "6px",
      }}
    >
      CopyRight F2
    </div>
  );
};
