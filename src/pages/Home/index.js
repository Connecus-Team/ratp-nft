import React from 'react';
import Banner from '../../components/Banner';
import HeadingLayer from '../../layouts/HeadingLayer';
import ProductRegist from './components/ProductRegist';
import ProductSearch from './components/ProductSearch';
import './styles.scss';
function Home(props) {
  return (
    <HeadingLayer>
      <div className="home-page">
        <Banner />
        <div className="home-page__container">
          <div className="home-page__btn-list btn">
            <div className="btn__insert btn--active">Nhập thông tin sản phẩm</div>
            <div className="btn__search">Tra cứu thông tin sản phẩm</div>
            <div className="btn__list">Danh sách sản phẩm</div>
          </div >
          <ProductSearch />
        </div>
      </div>
    </HeadingLayer>
  );
}

export default Home;

