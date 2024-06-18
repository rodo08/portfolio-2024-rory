import "./BasicButton.css";

const BasicButton = ({ text, handleClick }) => {
  return (
    <aside className="basic-button-container">
      <button className="basic-button" onClick={handleClick}>
        {text}
        <span>( );</span>
      </button>
    </aside>
  );
};

export default BasicButton;
