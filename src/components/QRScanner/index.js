import React, {useState} from 'react';
import {render} from 'react-dom';
import styled from 'styled-components';
import QrReader from 'react-qr-reader';

function QRScanner({handleErrorWebCam, handleScanWebCam}) {
  const modal = (
    <WrapperAlert>
      <div className="container-form-alert">
        <i className="fa fa-times clear-icon" onClick={(e) => closeEvent(e)} />
        <div className="qr-container">
          <QrReader
            delay={300}
            style={{width: '100%'}}
            onError={handleErrorWebCam}
            onScan={handleScanWebCam}
          />
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
  .container-form-alert{
    position: relative;
    width: 500px;
    height: 500px;
    .clear-icon{
      cursor: pointer;

      color: white;
      font-size: 20px;
      position: absolute;

      right: 0;
      top: 0;
    }
    .qr-container{
      width: 90%;
      height: 90%;
    }
  }
`;

export default QRScanner;
