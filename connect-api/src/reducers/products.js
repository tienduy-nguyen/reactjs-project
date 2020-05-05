const initialState = [
    {
        id: 'id1',
        name:'Iphone',
        description: 'Made by Apple',
        price: 15000000,
        status: true
    },
    {
        id: 'id2',
        name:'Samsung',
        description: 'Made by Samsung',
        price: 15000000,
        status: true
    },
    {
        id: 'id3',
        name:'Iphone',
        description: 'Made by Apple',
        price: 15000000,
        status: false
    },
    {
        id: 'id4',
        name:'Iphone',
        description: 'Made by Apple',
        price: 15000000,
        status: false
    }
];

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return [...state];
    }
}

export default productsReducer;