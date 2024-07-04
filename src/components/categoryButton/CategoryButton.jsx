import "./CategoryButton.css";

const CategoryButton = ({ text }) => {
  return (
    <button className="category-button">
      {text}
      <span>( );</span>
    </button>
  );
};

export default CategoryButton;
