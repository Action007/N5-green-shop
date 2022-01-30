import React, { useEffect, Suspense } from 'react';

import './global-styles/_global.scss';
import './global-styles/_normalize.scss';
import './global-styles/_fonts.scss';


import { Redirect, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { productActions } from './store/productsSlice';
import Layout from './Layout/Layout';
import LoadingSpinner from './components/UI/LoadingSpinner';

const ProductDetailsPage = React.lazy(() => import('./pages/ProductDetailsPage'));
const ShoppingCartPage = React.lazy(() => import('./pages/ShoppingCartPage'));
const MainPage = React.lazy(() => import('./pages/MainPage'));
const ShopPage = React.lazy(() => import('./pages/ShopPage'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getProducts = async () => {
      dispatch(productActions.setLoading(true));

      const response = await fetch('https://greenshopdata-68cf5-default-rtdb.firebaseio.com/products.json');
      const responseData = await response.json();

      dispatch(productActions.setProducts(responseData));
      dispatch(productActions.setLoading(false));
    }

    getProducts();
  }, [dispatch])

  return (
    <Layout>
      <Suspense fallback={<LoadingSpinner />}>
        <Switch>
          <Route path="/" component={MainPage} exact />
          <Route path="/shop" component={ShopPage} />
          <Route path="/shopping-cart" component={ShoppingCartPage} />
          <Route path="/products/:id" component={ProductDetailsPage} />
          <Route path="/about" component={About} />
          <Route path="/contacts" component={Contact} />
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
