// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const options = [
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
    label: "Russian",
    value: "ru",
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

const Translator = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState("");

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label htmlFor="text" className="ui fluid label">
            Enter a Text
          </label>
          <input
            id="text"
            type="text"
            placeholder="Enter some text to translate"
            onChange={(e) => setText(e.target.value)}
          />
        </div>
      </div>
      <Dropdown
        options={options}
        selectedLang={language}
        onSelectedLangChange={setLanguage}
        label="Select a Language"
      />
      <Convert language={language} text={text} />
    </div>
  );
};

export default Translator;
