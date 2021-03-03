import React, { useState, useEffect } from "react";
import GoogleTranslation from "../api/GoogleTranslation";

const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState("");
  const [debouncedText, setDebouncedText] = useState(text);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedText(text), 2000);

    return () => clearTimeout(timer);
  }, [text]);

  useEffect(() => {
    const translate = async () => {
      try {
        const { data } = await GoogleTranslation.post("", null, {
          params: {
            q: debouncedText,
            target: language.value,
          },
        });

        setTranslated(data.data["translations"][0]["translatedText"]);
      } catch (error) {
        console.log(error.message);
      }
    };

    if (debouncedText) {
      translate().then(null);
    }
  }, [debouncedText, language]);

  return (
    <div className="ui segment">
      <h3 className="ui header" lang={language.value}>
        {translated}
      </h3>
    </div>
  );
};

export default Convert;
