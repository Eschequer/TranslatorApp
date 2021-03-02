// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Dropdown from "./Dropdown";

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
];

const Translator = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState("Some text");

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
            placeholder={text}
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
    </div>
  );
};

export default Translator;
