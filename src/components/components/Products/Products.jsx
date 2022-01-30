import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productActions } from '../../../store/productsSlice';
import { NavLink, useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import Pagination from '../Pagination/Pagination';
import Loading from '../../UI/LoadingProducts';
import Product from '../Product/Product';
import scss from './Products.module.scss'
import MultiRangeSlider from '../MultiRangeSlider/MultiRangeSlider';

const Products = () => {
  const products = useSelector((state) => state.products.filterRange);
  const loading = useSelector((state) => state.products.loading);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(9);
  const { pathname } = useLocation();
  const { id } = useParams();

  const indexOfLastPost = currentPage * productsPerPage;
  const indexOfFirstPost = indexOfLastPost - productsPerPage;
  const currentProducts = [...products].slice(indexOfFirstPost, indexOfLastPost);

  useEffect(() => {
    const resizeHandler = () => {
      const { innerWidth: width } = window;

      if (width < 992 && width > 480) {
        setProductsPerPage(8);
      } else {
        setProductsPerPage(9);
      }
    }

    resizeHandler();
    window.addEventListener('resize', resizeHandler);
    return () => window.removeEventListener('resize', resizeHandler);
  }, []);

  useEffect(() => {
    dispatch(productActions.filterProducts('all'));
  }, [id, dispatch])

  const filterHandler = (e) => {
    const filter = e.target.value;
    dispatch(productActions.filterProducts(filter));
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const submitFilterHandler = (event, min, max) => {
    event.preventDefault();

    dispatch(productActions.multiRangeFilter({ min, max }));
  };

  const productItems = currentProducts
    .map((product) => (
      <Product
        key={product.id}
        description={product.description}
        id={product.id}
        image={product.image}
        price={product.price}
        newPrice={product.newPrice}
        rating={product.rating}
        title={product.title}
      />
    ));

  const loaders = (
    <React.Fragment>
      <Loading height={375} width={258} />
      <Loading height={375} width={258} />
      <Loading height={375} width={258} />
      <Loading height={375} width={258} />
      <Loading height={375} width={258} />
      <Loading height={375} width={258} />
    </React.Fragment>
  );

  const select = (
    <div className={scss.filters}>
      <span className={scss.span}>Sort by:</span>
      <select className={scss.select} onChange={filterHandler}>
        <option className={scss.option} value="all">
          All
        </option>
        <option className={scss.option} value="rating">
          Rating
        </option>
        <option className={scss.option} value="low-high">
          Sort by price: low to high
        </option>
        <option className={scss.option} value="high-low">
          Sort by price: high to low
        </option>
      </select>
    </div>
  );

  return (
    <React.Fragment>
      <div className={scss.wrapper}>
        {pathname === '/shop' && select}
        {pathname === '/shop' && <MultiRangeSlider onSubmitHandler={submitFilterHandler} />}
        <ul className={scss.products}>
          {loading ? loaders : productItems}
        </ul>
        <div className={scss.inner}>
          {pathname === '/shop' ?
            <Pagination
              productsPerPage={productsPerPage}
              totalProducts={products.length}
              paginate={paginate} /> :
            <NavLink className={scss.button} to='/shop'>
              Go To Shop
            </NavLink>}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Products;