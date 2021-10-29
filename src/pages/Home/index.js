import React, {useState} from 'react';
import Banner from '../../components/Banner';
import {useDispatch} from 'react-redux';
import HeadingLayer from '../../layouts/HeadingLayer';
import ProductList from './components/ProductList';
import Footer from '../../components/Footer';
import ProductRegist from './components/ProductRegist';
import ProductSearch from './components/ProductSearch';
import web3Action from '../../components/Heading/redux/Web3.Action';
import {useTranslation} from 'react-i18next';
import Web3 from 'web3';

import './styles.scss';
function Home(props) {
  const [selectPage, setSelectPage] = useState('regist');
  const [currentAccount, setCurrentAcount] = useState(null);

  const dispatch = useDispatch();
  const {t, i18n} = useTranslation();
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
        if (window.confirm('Bạn chưa cài Metamask. Bạn có muốn cài đặt ngay không?')) {
          window.open('https://metamask.io/', '_blank');
        } else {
          return;
        }
      }
      // const web3 = new Web3(new Web3.providers.HttpProvider('https://rinkeby.infura.io/v3/81b9f5ec89d7444db4009cdbb00b8dba'));
      // const web3 = new Web3(new Web3.providers.HttpProvider('https://data-seed-prebsc-1-s1.binance.org:8545'));
      // console.log(web3);
      let web3 = new Web3(web3Provider);
      const chainId = await web3.eth.getChainId();
      if (chainId != 97) {
        alert('Vui lòng liên kết với mạng Binace');
        return;
      }

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
    <HeadingLayer>
      <div className="home-page">
        {/* <Banner /> */}
        <div className="home-page__container">
          <div className="home-page__btn">
            <button className="connect__btn" onClick={() => handleConnectWallet()}><p>{currentAccount ? currentAccount : 'KẾT NỐI VÍ'}</p></button>
          </div>
          <div className="home-page__btn-list btn">
            <div className="btn__insert " id={selectPage === 'regist' ? 'btn--active' : ''} onClick={() => setSelectPage('regist')}><i className="fa fa-pencil-square-o"/>ĐĂNG KÝ SẢN PHẨM</div>
            <div className="btn__search" id={selectPage === 'search' ? 'btn--active' : ''} onClick={() => setSelectPage('search')}><i className="fa fa-search"/>Tra cứu thông tin sản phẩm</div>
            <div className="btn__list" id={selectPage === 'list' ? 'btn--active' : ''} onClick={() => setSelectPage('list')}><i className="fa fa-list-alt"/>Danh sách sản phẩm</div>
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
      <Footer />
    </HeadingLayer>
  );
}

export default Home;

