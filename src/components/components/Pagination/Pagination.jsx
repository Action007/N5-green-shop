import React, { useEffect, useState } from 'react';
import './Pagination.scss'

const Pagination = ({ productsPerPage, totalProducts, paginate }) => {
  const [active, setActive] = useState(1);
  const pageNumbers = [];
  let change = false;

  useEffect(() => {
    window.scrollTo(0, 385);
  }, [paginate, change]);


  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  const onClickHandler = (number) => {
    paginate(number);
    setActive(number);
  };

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number} className="pagination__item">
            <button
              className={`${"pagination__button" + (number === active ? " active" : "")}`}
              onClick={() => onClickHandler(number)}
              type='button'
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;