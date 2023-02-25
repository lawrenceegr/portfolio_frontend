import React, { useState } from "react";

const WorkCard = ({ title, completionStatus, image, description }) => {
  const [isExpanded, setExpanded] = useState(false);

  return (
    <div className="flex flex-col w-56 h-60 m-4 p-4 bg-white rounded-lg shadow-lg">
      <img src={image} alt={title} className="w-full h-20 object-cover" />
      <h3 className="text-xl font-bold mt-4">{title}</h3>
      <p className="text-gray-600 mt-2">{completionStatus}</p>
      {isExpanded ? (
        <p className="mt-2 text-gray-700 text-xs">{description}</p>
      ) : (
        <p className="mt-2 text-gray-700 text-xs overflow-hidden">
          {description.length > 100
            ? `${description.substring(0, 100)}...`
            : description}
        </p>
      )}
      {description.length > 100 && (
        <button
          className="mt-2 text-blue-500 text-xs font-bold underline"
          onClick={() => setExpanded(!isExpanded)}
        >
          {isExpanded? (<div>Show less</div>):(<div>Read more</div>)}
        </button>
      )}
      {/* <a
        href="#"
        className="mt-4 bg-blue-500 text-white p-2 text-xs rounded-lg font-bold"
      >
        View Project
      </a> */}
    </div>
  );
};

export default WorkCard;
