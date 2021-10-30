import React from 'react';
import LoadingInline from '../Loading/LoadingInline';
import {useTranslation} from 'react-i18next';
import './styles.scss';

function Waiting(props) {
  const {t, i18n} = useTranslation();
  return (
    <div className="loading-event">
      <div style={{width: '50px', height: '50px', margin: '0 auto'}}>
        <LoadingInline type={'bubbles'} color={'#0F054C'} />
      </div>
      <span>{t('applicationPage.formSeacrh.loadingText')}</span>
    </div>
  );
}

export default Waiting;

