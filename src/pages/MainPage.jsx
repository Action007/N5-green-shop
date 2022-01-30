import React from 'react';
import BlogPosts from '../components/components/BlogPosts/BlogPosts';
import FindMore from '../components/components/FindMoreBanner/FindMore';
import MainBanner from '../components/components/MainBanner/MainBanner';
import ShopContent from '../components/components/ShopContent/ShopContent';

const MainPage = () => {
  return (
    <React.Fragment>
      <MainBanner />
      <ShopContent />
      <FindMore />
      <BlogPosts />
    </React.Fragment>
  );
};

export default MainPage;