import React from 'react';
import './styles.scss';
import Icon from '../../constants/icons';
import Web3 from 'web3';

function Banner(props) {
  const handleConnectWallet = () => {
    const connectWallet = async () => {
      let web3Provider = null;
      if (typeof web3 != 'undefined') {
        web3Provider = web3.currentProvider;
      } else {
        web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
      }
      const web3 = new Web3(web3Provider);
    };
  };
  window.web3 = new Web3(window.ethereum);
  console.log(window.web3);
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
        </div>
      </div>
      <button className="banner__btn" onClick={() => handleConnectWallet()}>Collect Wallet</button>
    </div>
  );
}


export default Banner;

