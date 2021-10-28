import React, {useEffect, useState} from 'react';
import web3Action from '../Heading/redux/Web3.Action';
import {useDispatch} from 'react-redux';
import {NavLink, useLocation} from 'react-router-dom';
import Web3 from 'web3';
import './styles.scss';

function Heading() {
  const location = useLocation();
  const pathname = location.pathname;
  const splitLocation = pathname.split('/');
  const [isFixed, setIsFixed] = useState(false);
  const [currentAccount, setCurrentAcount] = useState(null);
  const dispatch = useDispatch();

  const handleScroll = (event) => {
    const value = window.scrollY;
    if (value !== 0 && !isFixed) {
      setIsFixed(true);
    } else if (value === 0) {
      setIsFixed(false);
    }
  };
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

      const accounts = await web3.eth.requestAccounts();
      dispatch(web3Action.setWeb3(web3));
      setCurrentAcount(accounts[0]);
      // window.ethereum.on('accountsChanged', async function() {
      //   accounts = await web3.eth.getAccounts();
      //   setCurrentAcount(accounts[0]);
      // });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="heading" id="heading" style={isFixed ? {position: 'fixed', top: '0px', zIndex: 999} : {}}>
      <ul>
        <li><NavLink className={splitLocation[1] === '' ? 'page-active' : ''} to="/">TRANG CHỦ</NavLink></li>
        <li><NavLink className={splitLocation[1] === 'dashbord' ? 'page-active' : ''} to="/dashbord">SỬ DỤNG</NavLink></li>
        <li><NavLink className={splitLocation[1] === 'work' ? 'page-active' : ''} to="/work">HOẠT ĐỘNG</NavLink></li>
        <li><NavLink className={splitLocation[1] === 'future' ? 'page-active' : ''} to="/future">KẾ HOẠCH</NavLink></li>
        <li><NavLink className={splitLocation[1] === 'event' ? 'page-active' : ''}to="/event">SỰ KIỆN</NavLink></li>
        <li><NavLink className={splitLocation[1] === 'member' ? 'page-active' : ''}to="/member">THÀNH VIÊN</NavLink></li>
        <li><a href="https://github.com/huonghope/ratp-nft" target="_blank" rel="noreferrer">MÃ NGUỒN</a></li>
        <li><button className="collect__btn" onClick={() => handleConnectWallet()}>TRUY CẬP VÍ <p>{currentAccount}</p></button></li>
      </ul>
    </div>
  );
}
export default Heading;

