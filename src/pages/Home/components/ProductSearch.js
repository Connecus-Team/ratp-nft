import React, {useRef, useState} from 'react';
import QrReader from 'react-qr-reader';
import QRScanner from '../../../components/QRScanner';
import styled from 'styled-components';

function ProductSearch(props) {
  const [scanResultWebCam, setScanResultWebCam] = useState('');
  const qrRef = useRef(null);


  const handleSearchQRCode = () => {
    QRScanner({
      handleErrorWebCam: () => {
      },
      handleScanWebCam: (result) => {
        if (result) {
          setScanResultWebCam(result);
        }
      },
    });
  };
  const handleErrorFile = (error) => {
    console.log(error);
  };
  const handleScanFile = (result) => {
    console.log(result);
    if (result) {
      setScanResultWebCam(result);
    }
  };
  const onScanFile = () => {
    qrRef.current.openImageDialog();
  };

  return (
    <ProductSearchDiv>
      <div className="product-search">
        <div className="product-search__form">
          <input type="text" className="product-search__input"/>
          <button>Tra cứu</button>
          <button onClick={() => handleSearchQRCode()}>QR Code Scan</button>
          <button onClick={() => onScanFile()}>QR Code Update</button>
        </div>
        <div className="product-search__option">
          <div style={{display: 'none'}}>
            <button onClick={() => onScanFile()}>Update</button>
            <QrReader
              ref={qrRef}
              delay={300}
              style={{width: '100%'}}
              onError={handleErrorFile}
              onScan={handleScanFile}
              legacyMode
            />
          </div>
          <div>Result :  {scanResultWebCam}</div>
        </div>
        <div className="product-search__result" style={{display: 'none'}}>
          <div className="product-search__result-img">
            <img src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQUKhSPUBmLLo7hXK8YC6nZlEABMIfXkhQdHGxkSVEBvRcZJDEOQaPIhnQ-5pybOa7o4hxl88Pdeccc&usqp=CAc" />
          </div>
          <div className="product-search__result-content">
            <div className="product-sub-info">
              <label className="label-control">Tên sản phẩm</label>
              <p>Túi LV thời trang</p>
            </div>
            <div className="product-sub-info">
              <label className="label-control">Kích thước</label>
              <p>20cm x 50cm</p>
            </div>
            <div className="product-sub-info">
              <label className="label-control">Màu sắc</label>
              <p>Đen - trắng</p>
            </div>
            <div className="product-sub-info">
              <label className="label-control">Miêu tả</label>
              <p>Túi LV thời trang thịnh hành nhất năm 2021</p>
            </div>
          </div>
        </div>
        <div className="product-search__history" style={{display: 'none'}}>
          <p>Lịch sử giao dịch</p>
          <table>
            <thead>
              <tr>
                <th width="50%">From</th>
                <th width="50%">To</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>0xqwqrqwr121231231</th>
                <th>0xqwqrqwr121231231</th>
              </tr>
              <tr>
                <th>0xqwqrqwr121231231</th>
                <th>0xqwqrqwr121231231</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </ProductSearchDiv>
  );
}
const ProductSearchDiv = styled.div`
  .product-search{
    border: 1px solid #ccc;
    padding: 10px 30px;
    &__option{
      display: flex;
      > div{
        flex: 1;
        border: 1px solid #ccc;
        margin: 10px;

        border-radius: 4px;
      }
    }
    &__form{
      display: flex;
      input{
        flex: 2;
      }
      button{
        padding: 10px 0px;
        width: 130px;
        margin-left: 10px;

        background-color: var(--color-background);
        border: transparent;
        color: white;
        cursor: pointer;
      }
    }
    //--> Product Info 
    &__result{
      margin-top:20px;
      display: flex;
      &-img{
        width: 40%;
      }
      &-content{
        width: 60%;
        .product-sub-info{
          width: 100%;
          display: flex;
          margin: 5px 0;
          label{
            width: 20%;
          }
        }
      }
    }
    //--> History
    &__history{
      margin-top: 20px;
      
      p{
        margin-bottom: 10px;
      }
      table{
        width: 100%;
      }
      table, th{
        font-weight: 500;
        border: 1px solid #ccc;
        border-collapse: collapse;
      }
    }
  }
`;

export default ProductSearch;

