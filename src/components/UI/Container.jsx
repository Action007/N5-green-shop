import React from 'react';

const Container = ({ children }) => {
  return (
    <main className="main">
      <div className="container">
        {children}
      </div>
    </main>
  );
};

export default Container;