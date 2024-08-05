import { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ handleNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = ({ target }) => {
    setInputValue(target.value); // Coge el valor del teclado y lo guarda
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Para que no refresque cuando presionemos enter
    if (inputValue.trim().length <= 1) return; // Para que tenga más de un caracter

    handleNewCategory(inputValue.trim()); // Envia el input limpio (sin espacios)
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  );
};

AddCategory.propTypes = {
  handleNewCategory: PropTypes.func,
};
