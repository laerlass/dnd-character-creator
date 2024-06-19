// Импортируем React для использования JSX и создания компонентов
import React from 'react';

// Создаем функциональный компонент Select
const Select = ({ label, options, value, onChange }) => (
  <div>
    {/* Метка для выпадающего меню */}
    <label>{label}</label>
    {/* Выпадающее меню с привязкой к значению и обработчику изменений */}
    <select value={value} onChange={onChange}>
      {/* Перебираем массив options и создаем элемент <option> для каждого */}
      {options.map(option => (
        <option key={option} value={option}>{option}</option>
      ))}
    </select>
  </div>
);

// Экспортируем компонент для использования в других частях приложения
export default Select;
