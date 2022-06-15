export const getPizzas = async () => {
  const response = await fetch('https://62a89f79ec36bf40bdaa96f2.mockapi.io/pizzas');

  return response.json();
};
