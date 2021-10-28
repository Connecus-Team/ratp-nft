
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
          <p className="banner__text-desc">Khi lòng tin vào sản phẩm được đảm bảo</p>
          <ul className="banner__text-tags">
            <li> o Chứng nhận quyền sở hữu sản phẩm</li>
            <li> o Kiểm tra nguồn gốc xuất xứ của sản phẩm</li>
            <li> o Giao dịch chứng nhận sở hữu sản phẩm</li>
          </ul>
          <div className="banner__btn">
            <div className="banner__help-btn" onClick={() => handleToUse()}>Hướng dẫn sử dụng</div>
            <div className="banner__use-btn"><a href="/application" className="use-link">Sử dụng</a></div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Banner;

