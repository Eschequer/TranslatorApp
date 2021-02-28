import React from "react";
import Accordion from "./Accordion";

const AccordionApp = () => {
  const items = [
    {
      title: "What is React?",
      content: "React is a frontend JavaScript object",
    },
    {
      title: "What should you use React?",
      content:
        "React is one of the most favourite JS libraries among web developers",
    },
    {
      title: "How do you use React?",
      content: "You use React by creating components",
    },
  ];

  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};

export default AccordionApp;
