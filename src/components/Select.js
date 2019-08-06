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
    <div>
      <div>
        <div onClick={toggleSelect}>
          <span>
            {R.isEmpty(selectedValues) ? "select" : selectedValues.join(",")}
          </span>
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
                <span>{x}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Select;
