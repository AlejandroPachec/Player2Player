export const getAllProductsService = async () => {
    const response = await fetch('http://localhost:5002/products');

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message);
    }

    return data.data;
};

export const getSearchProductsService = async (params) => {
    const response = await fetch(`http://localhost:5002/products/${params}`);

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message);
    }

    return data.data;
};
