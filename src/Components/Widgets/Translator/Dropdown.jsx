import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ options, selectedLang, onSelectedLangChange, label }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    document.body.addEventListener(
      "click",
      (e) => {
        if (ref.current && ref.current.contains(e.target)) return;

        setOpen(false);
      },
      true
    );
  }, []);

  const renderedOptions = options.map((option) => {
    if (option.value === selectedLang.value) return null;

    return (
      <div
        className="item"
        key={option.value}
        onClick={() => {
          onSelectedLangChange(option);
        }}
      >
        {option.label}
      </div>
    );
  });

  return (
    <form className="ui form" ref={ref}>
      <div className="field">
        <label className="ui fluid label">{label}</label>
        <div
          className={`ui selection dropdown ${open ? "active" : ""}`}
          onClick={() => {
            setOpen(!open);
          }}
        >
          <i className="dropdown icon" />
          <div className="text">{selectedLang.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </form>
  );
};

export default Dropdown;
