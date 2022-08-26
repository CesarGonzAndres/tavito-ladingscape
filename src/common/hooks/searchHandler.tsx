export const filterProducts = (query, products, productsList) => {
  const suggestions = [];
  products.findIndex((product) => {
    const nameLowered = product.name.toLowerCase();
    const queryLowered = query.toLowerCase();
    if (nameLowered.includes(queryLowered)) suggestions.push(product);
  });
  if (query.length > 0) {
    return suggestions;
  }
  return productsList;
};
