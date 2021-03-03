import React from "react";
import Translator from "./Components/Translator";

const options = [
  {
    label: "Russian",
    value: "ru",
  },
  {
    label: "French",
    value: "fr",
  },
  {
    label: "Spanish",
    value: "es",
  },
  {
    label: "Polish",
    value: "pl",
  },
  {
    label: "German",
    value: "de",
  },
  {
    label: "Italian",
    value: "it",
  },
  {
    label: "Ukrainian",
    value: "uk",
  },
  {
    label: "Portuguese",
    value: "pt",
  },
  {
    label: "Romanian",
    value: "ro",
  },
  {
    label: "Czech",
    value: "cs",
  },
];

const App = () => {
  return (
    <div>
      <Translator langOptions={options} />
    </div>
  );
};

export default App;
