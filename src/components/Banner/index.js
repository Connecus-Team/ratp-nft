
import React, {useEffect, useState} from 'react';
import bannerAction from './redux/Banner.Action';
import {useDispatch} from 'react-redux';
import './styles.scss';
import Icon from '../../constants/icons';
import Web3 from 'web3';

function Banner(props) {
  const [currentAccount, setCurrentAcount] = useState(null);
  const dispatch = useDispatch();


  const handleConnectWallet = async () => {
    try {
      let web3Provider;
      // Check Install Metamask
      if (window.ethereum) {
        web3Provider = window.ethereum;
        try {
          await window.ethereum.enable();
        } catch (error) {
          console.error('User denied account access');
        }
      }// Legacy dapp browsers...
      else if (window.web3) {
        web3Provider = window.web3.currentProvider;
      } else {
        alert('Please install MetaMask to use this dApp!');
        return;
      }
      // const web3 = new Web3(new Web3.providers.HttpProvider('https://rinkeby.infura.io/v3/81b9f5ec89d7444db4009cdbb00b8dba'));
      // const web3 = new Web3(new Web3.providers.HttpProvider('https://data-seed-prebsc-1-s1.binance.org:8545'));
      // console.log(web3);
      // ! current web 3
      let web3 = new Web3(web3Provider);

      // const accounts = await web3.eth.requestAccounts();
      dispatch(bannerAction.setWeb3(web3));
      // setCurrentAcount(accounts[0]);
      // window.ethereum.on('accountsChanged', async function() {
      //   accounts = await web3.eth.getAccounts();
      //   setCurrentAcount(accounts[0]);
      // });
    } catch (error) {
      console.log(error);
    }
  };
  const handleAccountsChanged = (account) => {
    console.log(account);
  };

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
      <button className="banner__btn" onClick={() => handleConnectWallet()}>Collect Wallet <p>{currentAccount}</p></button>
    </div>
  );
}


export default Banner;

