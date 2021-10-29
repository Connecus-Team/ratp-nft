import React, {useEffect, useState} from 'react';
import {NavLink, useLocation} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import './styles.scss';

function Heading() {
  const location = useLocation();
  const pathname = location.pathname;
  const splitLocation = pathname.split('/');
  const [isFixed, setIsFixed] = useState(false);

  const [language, setLanguage] = useState('vn');
  const {t, i18n} = useTranslation();

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
    i18n.changeLanguage(lang);
    setLanguage(lang);
  };
  return (
    <div className="heading" id="heading" style={isFixed ? {position: 'fixed', top: '0px', zIndex: 999} : {}}>
      <ul className="heading-lang">
        <li className={language === 'vn' ? 'active-lang' : ''} onClick={() => handleClickLanguage('vn')}>VN</li>
        <li className={language === 'en' ? 'active-lang' : ''} onClick={() => handleClickLanguage('en')}>ENG</li>
        <li className={language === 'ko' ? 'active-lang' : ''} onClick={() => handleClickLanguage('ko')}>KOR</li>
      </ul>
      <ul className="heading-task">
        <li><NavLink className={splitLocation[1] === '' ? 'page-active' : ''} to="/">{t('headerText.0')}</NavLink></li>
        <li><NavLink className={splitLocation[1] === 'work' ? 'page-active' : ''} to="/work">{t('headerText.1')}</NavLink></li>
        <li><NavLink className={splitLocation[1] === 'future' ? 'page-active' : ''} to="/future">{t('headerText.2')}</NavLink></li>
        <li><NavLink className={splitLocation[1] === 'event' ? 'page-active' : ''}to="/event">{t('headerText.3')}</NavLink></li>
        <li><NavLink className={splitLocation[1] === 'member' ? 'page-active' : ''}to="/member">{t('headerText.4')}</NavLink></li>
        <li><a href="https://github.com/huonghope/ratp-nft" target="_blank" rel="noreferrer">{t('headerText.5')}</a></li>
        <li id="btn-app"><NavLink to="/application">{t('headerButton')}</NavLink></li>
        {/* <li><button className="connect__btn" onClick={() => handleConnectWallet()}><p>{currentAccount ? currentAccount : 'KẾT NỐI VÍ'}</p></button></li> */}
      </ul>
    </div>
  );
}
export default Heading;

