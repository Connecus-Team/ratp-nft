import React, {useState} from 'react';
import Banner from '../../components/Banner';
import HeadingLayer from '../../layouts/HeadingLayer';
import ProductList from './components/ProductList';
import ProductRegist from './components/ProductRegist';
import ProductSearch from './components/ProductSearch';
import './styles.scss';
function Home(props) {
  const [selectPage, setSelectPage] = useState('regist');
  return (
    <HeadingLayer>
      <div className="home-page">
        <Banner />
        <div className="home-page__container">
          <div className="home-page__btn-list btn">
            <div className="btn__insert btn--active" onClick={() => setSelectPage('regist')}>Nhập thông tin sản phẩm</div>
            <div className="btn__search" onClick={() => setSelectPage('search')}>Tra cứu thông tin sản phẩm</div>
            <div className="btn__list" onClick={() => setSelectPage('list')}>Danh sách sản phẩm</div>
          </div >
          <div className="home-page__content">
            { selectPage === 'regist' ?
              <ProductRegist /> :
              selectPage === 'search' ?
              <ProductSearch /> : <ProductList />
            }
          </div>
        </div>
      </div>
    </HeadingLayer>
  );
}

export default Home;

