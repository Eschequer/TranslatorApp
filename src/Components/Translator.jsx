// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const Translator = ({ langOptions }) => {
  const [language, setLanguage] = useState(langOptions[0]);
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
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
      </div>
      <Dropdown
        options={langOptions}
        selectedLang={language}
        onSelectedLangChange={setLanguage}
        label="Select a Language"
      />
      <Convert language={language} text={text} />
    </div>
  );
};

export default Translator;
