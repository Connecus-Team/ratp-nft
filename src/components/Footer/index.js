import React from 'react';
import './styles.scss';
import {useTranslation} from 'react-i18next';
import {NavLink} from 'react-router-dom';
import Icon from '../../constants/icons';

function Footer(props) {
  const {t, i18n} = useTranslation();
  return (
    <div className="footer">
      <h2 className="footer__title">{t('mainPage.footer.title')}</h2>
      <div className="footer__map">
        <ul className="footer__map-list">
          <li>
            <p>{t('mainPage.footer.webmap.0.name')}</p>
            <ul className="footer__map-list-child">
              <li><NavLink to="/application">{t('mainPage.footer.webmap.0.content.0')}</NavLink></li>
              <li><NavLink to="/application">{t('mainPage.footer.webmap.0.content.1')}</NavLink></li>
              <li><NavLink to="/application">{t('mainPage.footer.webmap.0.content.2')}</NavLink></li>
            </ul>
          </li>
          <li>
            <p>{t('mainPage.footer.webmap.1.name')}</p>
            <ul className="footer__map-list-child">
              <li><NavLink to="/work">{t('mainPage.footer.webmap.1.content.0')}</NavLink></li>
            </ul>
          </li>
          <li>
            <p>{t('mainPage.footer.webmap.2.name')}</p>
            <ul className="footer__map-list-child">
              <li><NavLink to="/event">{t('mainPage.footer.webmap.2.content.0')}</NavLink></li>
            </ul>
          </li>
          <li>
            <p>{t('mainPage.footer.webmap.3.name')}</p>
            <ul className="footer__map-list-child">
              <li><NavLink to="/member">{t('mainPage.footer.webmap.3.content.0')}</NavLink></li>
            </ul>
          </li>
          <li>
            <p>{t('mainPage.footer.webmap.4.name')}</p>
            <ul className="footer__map-list-child">
              <li><a href="#"><img src={Icon.gmail} alt="gmail" target="_blank" rel="noopener noreferrer"/>{t('mainPage.footer.webmap.4.content.0')}</a></li>
              <li><a href={t('mainPage.footer.webmap.4.content.1')} target="_blank" rel="noopener noreferrer" ><img src={Icon.twitter} alt="twitter"/> Twitter</a></li>
              <li><a href={t('mainPage.footer.webmap.4.content.2')} target="_blank" rel="noopener noreferrer"><img src={Icon.telegram} alt="telegram" /> Telegram</a></li>
              <li><a href={t('mainPage.footer.webmap.4.content.3')} target="_blank" rel="noopener noreferrer" ><img src={Icon.discord} alt="discord"/> Discord</a></li>
            </ul>
          </li>
        </ul>
      </div>
      <h5 className="footer__copyright">@ CopyRight - 2021 RATP Team</h5>
    </div>
  );
}


export default Footer;

