import "./BasicButton.css";

const BasicButton = ({ text }) => {
  return (
    <aside className="basic-button-container">
      <button className="basic-button">
        {text}
        <span>( );</span>
      </button>
    </aside>
  );
};

export default BasicButton;
