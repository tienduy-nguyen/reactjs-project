import React from 'react';
import Home from './pages/home/homPage';
import NotFound from './pages/not-found/notFoundPage';
import Products from './pages/product-list/productListPage';
import ProductAction from './pages/product-action/productActionPage';

const routes = [
    {
        path: '/',
        exact :true,
        main: () => <Home></Home>
    },
    {
        path: '/products',
        exact :false,
        main: () => <Products></Products>
    },
    {
        path: '/product/add',
        exact :false,
        main: () => <ProductAction></ProductAction>
    },
    {
        path: '/product/:id/edit',
        exact :false,
        main: ({match}) => <ProductAction match = {match}></ProductAction>
    },
    {
        path: '',
        exact :false,
        main: () => <NotFound></NotFound>
    }
]

export default routes;