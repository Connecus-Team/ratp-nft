
import React from 'react';
import {Link} from 'react-router-dom';
import Icon from '../../constants/icons';
import {useTranslation} from 'react-i18next';
import './styles.scss';

function Banner({handleToUse}) {
  const {t, i18n} = useTranslation();
  return (
    <div className="banner">
      <div className="banner__container">
        <img className="banner__image"src={Icon.bannerImage}/>
        <div className="banner__text">
          <h1 className="banner__text-brandname">RATP</h1>
          <p className="banner__text-desc">{t('mainPage.banner.bannerText.0')} - {t('mainPage.banner.bannerText.1')} - {t('mainPage.banner.bannerText.2')}</p>
          <ul className="banner__text-tags">
            <li>  <i className="fa fa-shield"/> {t('mainPage.banner.hashtag.0')}</li>
            <li>  <i className="fa fa-shield"/> {t('mainPage.banner.hashtag.1')}</li>
            <li>  <i className="fa fa-shield"/> {t('mainPage.banner.hashtag.2')}</li>
            <li>  <i className="fa fa-shield"/> {t('mainPage.banner.hashtag.3')}</li>
          </ul>
          <div className="banner__btn">
            <div className="banner__help-btn" onClick={() => handleToUse()}>{t('mainPage.banner.button.use')}</div>
            <Link className="banner__use-btn" to="/application" >{t('mainPage.banner.button.app')}</Link>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Banner;

