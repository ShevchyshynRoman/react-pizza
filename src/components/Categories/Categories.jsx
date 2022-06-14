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

  const onCategoryClick = (index) => {
    setCategoryIndex(index);
  }

  return (
    <div className="categories">
      <ul>
        {categories.map((category, index) =>
          <li
            className={index === categoryIndex ? 'active' : '' }
            key={index}
            onClick={() => onCategoryClick(index)}
          >
            {category}
          </li>
        )}
      </ul>
    </div>
  );
};
