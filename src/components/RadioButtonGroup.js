import React from "react";
import PropTypes from "prop-types";

function RadioButtonGroup(props) {
  const { value, items, onClick } = props;
  const getItemElement = item => {
    const className = value === item.value ? "selected" : "";
    return (
      <button
        key={item.value + item.label}
        className={`btn ${className}`}
        onClick={()=>onClick(item.value)}
      >
        {item.label}
      </button>
    );
  };
  const itemElements = items.map(getItemElement);
  return <div className="btn-group">{itemElements}</div>;
}

RadioButtonGroup.propTypes = {
  items: PropTypes.array,
  value: PropTypes.string,
  onClick: PropTypes.func
};

export default RadioButtonGroup;
