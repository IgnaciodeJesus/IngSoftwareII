import React from "react";

const SocialIcon = ({ link, svg }) => {
   return (
      <a href={link} target="_blank" rel="noopener noreferrer" className="mx-4">
         <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className={svg.class}
            viewBox="0 0 16 16">
            <path d={svg.path} />
         </svg>
      </a>
   );
};

export default SocialIcon;
