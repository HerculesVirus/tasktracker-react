import React , {FC}from "react";
import PropTypes from "prop-types";
interface Props{
    color?: string;
    text: string;
    onClick?: (...arg: any)=> void | null ;
    disable?: boolean;
}

const Button : FC<Props> = ({ color, text, onClick , disable}) => {
  return (
    <button
      style={{ backgroundColor: color }}
      className={disable ? "btn btn-disabled" : "btn"}
      onClick={onClick}
      disabled={disable}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: "steelblue"
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  onClick: PropTypes.func
};

export default Button;