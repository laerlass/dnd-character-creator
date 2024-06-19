// Импортируем React для использования JSX и создания компонентов
import React from 'react';

// Создаем функциональный компонент Input
const Input = ({ label, value, onChange }) => (
  <div>
    {/* Метка для поля ввода */}
    <label>{label}</label>
    {/* Поле ввода с привязкой к значению и обработчику изменений */}
    <input value={value} onChange={onChange} />
  </div>
);

// Экспортируем компонент для использования в других частях приложения
export default Input;
