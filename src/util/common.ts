export const getDepartmentName = (department: string) => {
  // Encontrar la posición del campo 'name'
  const nameIndex = department.indexOf("name:");

  // Encontrar la posición de la primera comilla después del campo 'name'
  const startQuoteIndex = department.indexOf("'", nameIndex);

  // Encontrar la posición de la segunda comilla después del campo 'name'
  const endQuoteIndex = department.indexOf("'", startQuoteIndex + 1);

  // Extraer el valor del campo 'name'
  const nameValue = department.slice(startQuoteIndex + 1, endQuoteIndex);

  return nameValue;
};
