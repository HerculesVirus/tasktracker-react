import React , {FC}from "react";
import PropTypes from "prop-types";
import Button from "./Button";
interface Props {
    title: string;
    onAdd?: (...arg : any)=> void;
    showAdd: boolean;
    color?: string;
    text: string;
    disable?: boolean;


}
const Header: FC<Props>= ({ title, onAdd, showAdd ,color , text , disable}) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      { showAdd && <Button
        color={color}
        text={text}
        disable={disable}
        onClick={onAdd}
      />}
    </header>
  );
};

Header.defaultProps = {
  title: "Task Runner"
};

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
