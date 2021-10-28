
import React from 'react';
import Icon from '../../constants/icons';
import './styles.scss';

function Banner({handleToUse}) {
  return (
    <div className="banner">
      <div className="banner__container">
        <img className="banner__image"src={Icon.bannerImage}/>
        <div className="banner__text">
          <h1 className="banner__text-brandname">RATP</h1>
          <p className="banner__text-desc">An toàn - Minh bạch - Tin cậy</p>
          <ul className="banner__text-tags">
            <li>  <i className="fa fa-shield"/> Đăng ký bảo vệ sản phẩm</li>
            <li>  <i className="fa fa-shield"/> Tra cứu nguồn gốc minh bạch</li>
            <li>  <i className="fa fa-shield"/> Xác minh quyền sở hữu</li>
            <li>  <i className="fa fa-shield"/> Giao dịch đảm bảo</li>
          </ul>
          <div className="banner__btn">
            <div className="banner__help-btn" onClick={() => handleToUse()}>HƯỚNG DẪN SỬ DỤNG</div>
            <div className="banner__use-btn"><a href="/application" className="use-link">SỬ DỤNG</a></div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Banner;

