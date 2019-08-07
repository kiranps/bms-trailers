import React, { useState } from "react";
import CheckBox from "/components/CheckBox";
import * as R from "ramda";

const Select = ({ placeholder, options, onChange }) => {
  const [isOpen, setOpen] = useState(false);
  const [selectedValues, setValues] = useState([]);

  let handleSelect = index => {
    const item = options[index];
    const newValues = R.contains(item, selectedValues)
      ? R.reject(x => x === item, selectedValues)
      : R.append(item, selectedValues);

    setValues(newValues);
    onChange(newValues);
  };

  return (
    <div
      className="inline-block mx-2 align-top"
      onMouseOver={_ => setOpen(true)}
      onMouseOut={_ => setOpen(false)}
    >
      <div>
        <div className="border border-teal-500 rounded-sm text-xs w-32 py-1 cursor-pointer">
          <div className="inline-block text-teal-500 overflow-none w-3/4 overflow-hidden px-2 align-middle">
            {R.isEmpty(selectedValues) ? placeholder : selectedValues.join(",")}
          </div>
          <div className="inline-block w-1/4 text-center">
            <svg
              viewBox="-1 -1 453.85 453.85"
              style={{ display: "inline-block", height: "12px", width: "12px" }}
            >
              <path
                fill="#38b2ac"
                d="M225.92 354.7c-8.1 0-16.2-3.09-22.37-9.26L9.27 151.16a31.64 31.64 0 1 1 44.75-44.75l171.9 171.91 171.9-171.9a31.64 31.64 0 0 1 44.75 44.74L248.3 345.45a31.55 31.55 0 0 1-22.37 9.26z"
              />
            </svg>
          </div>
        </div>
        <div className={"bg-black-200" + (isOpen ? " visible" : " hidden")}>
          {options.map((x, i) => (
            <div
              key={i}
              className="px-1 cursor-pointer"
              onClick={() => handleSelect(i)}
            >
              <span className="align-middle">
                <CheckBox active={R.contains(x, selectedValues)} />
              </span>
              <span
                className={
                  "capitalize text-xs align-middle px-1" +
                  (selectedValues.includes(x)
                    ? " text-teal-500"
                    : " text-white")
                }
              >
                {x}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

Select.defaultProps = {
  placeholder: "select"
};

export default Select;
