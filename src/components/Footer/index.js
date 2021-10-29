import React from 'react';
import './styles.scss';
import {useTranslation} from 'react-i18next';

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
              <li>{t('mainPage.footer.webmap.0.content.0')}</li>
              <li>{t('mainPage.footer.webmap.0.content.1')}</li>
              <li>{t('mainPage.footer.webmap.0.content.2')}</li>
            </ul>
          </li>
          <li>
            <p>{t('mainPage.footer.webmap.1.name')}</p>
            <ul className="footer__map-list-child">
              <li>{t('mainPage.footer.webmap.1.content.0')}</li>
            </ul>
          </li>
          <li>
            <p>{t('mainPage.footer.webmap.2.name')}</p>
            <ul className="footer__map-list-child">
              <li>{t('mainPage.footer.webmap.2.content.0')}</li>
            </ul>
          </li>
          <li>
            <p>{t('mainPage.footer.webmap.3.name')}</p>
            <ul className="footer__map-list-child">
              <li>{t('mainPage.footer.webmap.3.content.0')}</li>
            </ul>
          </li>
          <li>
            <p>{t('mainPage.footer.webmap.4.name')}</p>
            <ul className="footer__map-list-child">
              <li>{t('mainPage.footer.webmap.4.content.0')}</li>
            </ul>
          </li>
        </ul>
      </div>
      <h5 className="footer__copyright">@ CopyRight - 2021 RATP Team</h5>
    </div>
  );
}


export default Footer;

