import React, { useState } from "react";
import * as R from "ramda";

const Select = ({ options }) => {
  const [isOpen, setOpen] = useState(false);
  const [selectedValues, setValues] = useState([]);

  let toggleSelect = () => {
    console.log(isOpen);
    setOpen(!isOpen);
  };

  let handleSelect = index => {
    const item = options[index];
    const newValues = R.contains(item, selectedValues)
      ? R.reject(x => x === item, selectedValues)
      : R.append(item, selectedValues);

    setValues(newValues);
    console.log(newValues);
  };

  return (
    <div className="inline-block mx-2 align-top">
      <div>
        <div
          className="border border-teal-500 px-2 rounded-sm text-xs w-32 overflow-hidden"
          onClick={toggleSelect}
        >
          <div className="inline-block text-teal-500 overflow-none w-3/4">
            {R.isEmpty(selectedValues) ? "select" : selectedValues.join(",")}
          </div>
          <div className="inline-block w-1/4">
            <svg
              viewBox="-1 -1 453.85 453.85"
              style={{ display: "inline-block", height: "12px", width: "12px" }}
            >
              <path
                fill="#fff"
                d="M225.92 354.7c-8.1 0-16.2-3.09-22.37-9.26L9.27 151.16a31.64 31.64 0 1 1 44.75-44.75l171.9 171.91 171.9-171.9a31.64 31.64 0 0 1 44.75 44.74L248.3 345.45a31.55 31.55 0 0 1-22.37 9.26z"
              />
            </svg>
          </div>
        </div>
        {isOpen && (
          <div className="bg-black-200">
            {options.map((x, i) => (
              <div key={i} onClick={() => handleSelect(i)}>
                <span>
                  <input
                    type="checkbox"
                    readOnly
                    checked={R.contains(x, selectedValues)}
                  />
                </span>
                <span className="capitalize">{x}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Select;
