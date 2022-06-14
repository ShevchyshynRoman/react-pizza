import { useState } from 'react';

const categories = [
  'Всі',
  'Мясні',
  'Вегетаріанські',
  'Гриль',
  'Гострі',
  'Закриті',
]

export const Categories = () => {
  const [categoryIndex, setCategoryIndex] = useState(0);

  const onCategoryItemClick = (index) => {
    setCategoryIndex(index);
  }

  return (
    <div className="categories">
      <ul>
        {categories.map((category, index) =>
          <li
            key={index}
            className={index === categoryIndex ? 'active' : '' }
            onClick={() => onCategoryItemClick(index)}
          >
            {category}
          </li>
        )}
      </ul>
    </div>
  );
};
