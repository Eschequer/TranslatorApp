import React, { useState } from "react";

import Dropdown from "./Dropdown";

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "A Shade of Blue",
    value: "blue",
  },
  {
    label: "A Shade of Violet",
    value: "violet",
  },
  {
    label: "A Shade of Brown",
    value: "brown",
  },
];

const DropdownApp = () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div>
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="ui button"
        style={{ marginBottom: "20px" }}
      >
        Show/Hide Dropdown
      </button>
      {showDropdown ? (
        <Dropdown
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      ) : null}
      <div
        className="ui segment"
        style={{ color: `${selected.value}` }}
      >{`This text is ${selected.value}`}</div>
    </div>
  );
};

export default DropdownApp;
