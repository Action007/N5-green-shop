import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import Breadcrumbs from '../components/components/Breadcrumbs/Breadcrumbs';
import ProductDescription from '../components/components/ProductDescription/ProductDescription';
import ProductDetails from '../components/components/ProductDetails/ProductDetails';
import ProductsSlider from '../components/components/ProductsSlider/ProductsSlider';

const ProductDetailsPage = () => {
  const { id } = useParams();
  const state = useSelector(state => state.products.products)
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const getProducts = () => {
      const item = state.find((item) => item.id === Number(id));
      if (!item) return;
      setProduct(item);
    }

    getProducts();
  }, [id, state])

  return (
    <React.Fragment>
      <Breadcrumbs title={product.title} />
      <ProductDetails
        key={product.id}
        description={product.description}
        id={product.id}
        image={product.image}
        price={product.price}
        newPrice={product.newPrice}
        rating={product.rating}
        title={product.title}
      />
      <ProductDescription />
      <ProductsSlider />
    </React.Fragment>
  );
};

export default ProductDetailsPage;