import React, {useState} from 'react';
import {render} from 'react-dom';
import styled from 'styled-components';
import QrReader from 'react-qr-reader';

function QRScanner() {
  const modal = (
    <WrapperAlert>
      <div className="container-form__alert">
        <div className="container-form__title">
          <h1>RATP</h1>
          <i className="fa fa-times clear-icon" onClick={(e) => closeEvent(e)} />
        </div>
        <div className="container-form__video">
          <iframe width="760" height="515" src="https://www.youtube.com/embed/Wjg5IrSWmZM" frameBorder="0" autoPlay="1"
            allow="accelerometer; autoplay; encrypted-media; gyroscope;picture-in-picture"
            allowFullScreen />
        </div>
      </div>
    </WrapperAlert>
  );

  const divContainer = document.createElement('div');
  document.body.appendChild(divContainer);

  function closeEvent(e) {
    divContainer.removeEventListener('keydown', closeEvent);
    removeDom();
  }

  function removeDom() {
    document.body.removeChild(divContainer);
  }

  render(modal, divContainer);
}

const WrapperAlert = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;

  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 100;

  transition: all 0.5;
  .container-form__alert{
    position: relative;
    padding: 30px;
    background: white;
  }
  .container-form__title{
    display: flex;
    justify-content: space-between;
    align-items: center;
    .clear-icon{
      font-size: 20px;
      cursor: pointer;
    }
  }
  .container-form__video{
    width: 90%;
    height: 90%;
  }
`;

export default QRScanner;
