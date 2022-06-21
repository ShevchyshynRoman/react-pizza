const categories = [
  'Всі',
  'Мясні',
  'Вегетаріанські',
  'Гриль',
  'Гострі',
  'Закриті',
]

export const Categories = ({
  categoryId,
  onClickCategory
}) => {

  return (
    <div className="categories">
      <ul>
        {categories.map((category, i) =>
          <li
            key={i}
            className={i === categoryId ? 'active' : '' }
            onClick={() => onClickCategory(i)}
          >
            {category}
          </li>
        )}
      </ul>
    </div>
  );
};
