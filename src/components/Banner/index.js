
import React from 'react';
import Icon from '../../constants/icons';
import './styles.scss';

function Banner(props) {
  return (
    <div className="banner">
      <div className="banner__container">
        <img className="banner__image"src={Icon.bannerImage}/>
        <div className="banner__text">
          <h1 className="banner__text-brandname">RATP</h1>
          <p className="banner__text-desc">Lòng tin sản phẩm được nâng cao</p>
          <ul className="banner__text-tags">
            <li># Chứng nhận hàng hóa</li>
            <li># Kiểm tra lưu thông hàng hóa</li>
            <li># Chứng nhận quyền sở hữu sản phẩm</li>
            <li># Tích điểm thanh toán sản phẩm</li>
          </ul>
          <div className="banner__help-btn">Hướng dẫn sử dụng</div>
          <div className="banner__help-btn">Sử dụng</div>
        </div>
      </div>
    </div>
  );
}


export default Banner;

