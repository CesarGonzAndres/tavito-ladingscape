export const ascSorting = (products) => {
    const filteredProducts = products.sort((a, b) => {
        return a.hasDiscount && b.hasDiscount ? parseFloat(a.price_discount) - parseFloat(b.price_discount) :
        !a.hasDiscount && b.hasDiscount ? parseFloat(a.price) - parseFloat(b.price_discount) :
        a.hasDiscount && !b.hasDiscount ? parseFloat(a.price_discount) - parseFloat(b.price) :
        !a.hasDiscount && !b.hasDiscount ? parseFloat(a.price) - parseFloat(b.price) : []
    });
    return filteredProducts;
}

export const descSorting = (products) => {
    const filteredProducts = products.sort((a, b) => {
        return a.hasDiscount && b.hasDiscount ? parseFloat(b.price_discount) - parseFloat(a.price_discount) :
        !a.hasDiscount && b.hasDiscount ? parseFloat(b.price) - parseFloat(a.price_discount) :
        a.hasDiscount && !b.hasDiscount ? parseFloat(b.price_discount) - parseFloat(a.price) :
        !a.hasDiscount && !b.hasDiscount ? parseFloat(b.price) - parseFloat(a.price) : []
    });
    return filteredProducts;
}
