import React, { useState } from "react";

const Accordion = () => {
  //Accordion content
  const [accordions, setAccordions] = useState([
    {
      title: "Accordion Title One",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisic elit. Sed voluptatenihil eumester consectetur similiqu consectetur",
    },
    {
      title: "Accordion Title tow",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisic elit. Sed voluptatenihil eumester consectetur similiqu consectetur",
    },
    {
      title: "Accordion Title three",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisic elit. Sed voluptatenihil eumester consectetur similiqu consectetur",
    },
    {
      title: "Accordion Title fourth",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisic elit. Sed voluptatenihil eumester consectetur similiqu consectetur",
    },
  ]);

  // Currant accordion
  const [select, setSelect] = useState(0);

  //Accordion Toggle
  const currantAccord = (number) => {
    if (select === number) {
      return setSelect(null);
    }
    setSelect(number);
  };

  return (
    <>
      <ul>
        {accordions.map((accord, index) => (
          <li key={index} className="py-4 border-t border-b ">
            <button
              className={`${
                select === index ? "text-red-500" : "text-blue-600"
              } w-full px-2 text-left font-bold hover:text-red-500`}
              onClick={() => currantAccord(index)}
            >
              {accord.title}
            </button>
            <div
              className={`${
                select === index ? "accord-show" : "accord-hidde"
              } overflow-hidden `}
            >
              <p className="px-2 py-4">{accord.content}</p>
              <p className="px-2 py-4">{accord.content}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Accordion;
