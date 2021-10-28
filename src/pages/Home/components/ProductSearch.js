import React, {useRef, useState} from 'react';
import {useSelector} from 'react-redux';
import QrReader from 'react-qr-reader';
import QRScanner from '../../../components/QRScanner';
import web3Selector from '../../../components/Heading/redux/Web3.Selector';
import contractValue from '../../../constants/contract';
import styled from 'styled-components';
import queryString from 'query-string';


function ProductSearch(props) {
  const web3 = useSelector(web3Selector.selectWeb3);


  const [scanResultWebCam, setScanResultWebCam] = useState(null);

  const [searchData, setSearchData] = useState(false);
  const [productData, setProducData] = useState(null);
  const [productImage, setProductImage] = useState(null);

  const qrRef = useRef(null);


  const getProductFromSmartContract = async () => {
    if (!scanResultWebCam) {
      alert('Vui lòng quét mã Barcode của sản phẩm muốn tra cứu');
      return;
    }

    if (!web3) {
      alert('Vui truy cập ví để thực hiện tru cứu');
      return;
    }
    try {
      const query = queryString.parse(scanResultWebCam);
      const requestId = Object.values(query)[0];
      const accounts = await web3.eth.getAccounts();
      let contract = new web3.eth.Contract(contractValue.ABI, contractValue.address);
      const productInfo = await contract.methods.products(requestId).call();
      const ipfsUrl = await contract.methods.requestIdToTokenURI(requestId).call();

      setProducData(productInfo);
      setProductImage(ipfsUrl);
      setSearchData(true);
    } catch (error) {
      alert('Truy xuất dữ liệu phát sinh lỗi, Vui lòng thử lại sau');
    }
  };

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
          <button onClick={() =>getProductFromSmartContract()}>Tra cứu</button>
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
          <div style={{padding: '5px'}}>Result :  {scanResultWebCam}</div>
        </div>
        <div className="product-search__result" style={searchData ? {} : {display: 'none'}}>
          <div className="product-search__result-img">
            <img src={productImage} />
          </div>
          <div className="product-search__result-content">
            <div className="product-sub-info">
              <label className="label-control">Thông tin sản phẩm</label>
              <textarea style={{width: '100%'}} rows="10" cols="50" value={productData} />
            </div>
            {/* <div className="product-sub-info">
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
            </div> */}
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
        text-align: center;
        img{
          width: 40%;
        }
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

