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

  const [language, setLanguage] = useState('vn');
  const dispatch = useDispatch();

  // const handleScroll = (event) => {
  //   const value = window.scrollY;
  //   if (value >= 175 && !isFixed) {
  //     setIsFixed(true);
  //   } else if (value === 0) {
  //     setIsFixed(false);
  //   }
  // };
  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  const handleClickLanguage = (lang) => {
    setLanguage(lang);
  };
  return (
    <div className="heading" id="heading" style={isFixed ? {position: 'fixed', top: '0px', zIndex: 999} : {}}>
      <ul className="heading-lang">
        <li className={language === 'vn' ? 'active-lang' : ''} onClick={() => handleClickLanguage('vn')}>VN</li>
        <li className={language === 'en' ? 'active-lang' : ''} onClick={() => handleClickLanguage('en')}>ENG</li>
        <li className={language === 'kor' ? 'active-lang' : ''} onClick={() => handleClickLanguage('kor')}>KOR</li>
      </ul>
      <ul className="heading-task">
        <li><NavLink className={splitLocation[1] === '' ? 'page-active' : ''} to="/">TRANG CHỦ</NavLink></li>
        <li><NavLink className={splitLocation[1] === 'work' ? 'page-active' : ''} to="/work">HOẠT ĐỘNG</NavLink></li>
        <li><NavLink className={splitLocation[1] === 'future' ? 'page-active' : ''} to="/future">KẾ HOẠCH</NavLink></li>
        <li><NavLink className={splitLocation[1] === 'event' ? 'page-active' : ''}to="/event">SỰ KIỆN</NavLink></li>
        <li><NavLink className={splitLocation[1] === 'member' ? 'page-active' : ''}to="/member">THÀNH VIÊN</NavLink></li>
        <li><a href="https://github.com/huonghope/ratp-nft" target="_blank" rel="noreferrer">MÃ NGUỒN</a></li>
        <li id="btn-app"><NavLink to="/application">SỬ DỤNG</NavLink></li>
        {/* <li><button className="connect__btn" onClick={() => handleConnectWallet()}><p>{currentAccount ? currentAccount : 'KẾT NỐI VÍ'}</p></button></li> */}
      </ul>
    </div>
  );
}
export default Heading;

