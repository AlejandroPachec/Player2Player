export const getAllProductsService = async () => {
    const response = await fetch('http://localhost:5002/products');

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message);
    }

    return data.data;
};

export const getSearchProductsService = async (params) => {
    const response = await fetch(`http://localhost:5002/${params}`);

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message);
    }

    return data.data;
};


export const registerUserService = async ({ firstName, lastName, email, phone, password }) => {
    const response = await fetch('http://localhost:5002/user/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ firstName, lastName, email, phone, password })
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.error);
    }
};
