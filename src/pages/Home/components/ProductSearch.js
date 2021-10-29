import React, {useRef, useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import QrReader from 'react-qr-reader';
import QRScanner from '../../../components/QRScanner';
import Waiting from '../../../components/Waiting';
import web3Selector from '../../../components/Heading/redux/Web3.Selector';
import LoadingInline from '../../../components/Loading/LoadingInline';
import contractValue from '../../../constants/contract';
import styled from 'styled-components';
import queryString from 'query-string';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {useTranslation} from 'react-i18next';

function ProductSearch(props) {
  const web3 = useSelector(web3Selector.selectWeb3);


  const [scanResultWebCam, setScanResultWebCam] = useState(null);

  const [loadingHistory, setLoadingHistory] = useState(false);
  const [searchData, setSearchData] = useState(false);
  const [productData, setProducData] = useState(null);
  const [productImage, setProductImage] = useState(null);
  const [historyTransfer, setHistoryTransfer] = useState([]);
  const [tokenId, setTokenId] = useState(null);

  const qrRef = useRef(null);
  const {t, i18n} = useTranslation();

  // search btn
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
      setSearchData(true);
      const query = queryString.parse(scanResultWebCam);
      const requestId = Object.values(query)[0];
      const accounts = await web3.eth.getAccounts();
      let contract = new web3.eth.Contract(contractValue.ABI, contractValue.address);
      const productInfo = await contract.methods.products(requestId).call();
      const ipfsUrl = await contract.methods.requestIdToTokenURI(requestId).call();

      let productObject = {
        type: '',
        category: '',
        name: '',
        code: '',
        date: '',
        desc: '',
      };

      const fullLength = productInfo.length;
      const typeIndex = productInfo.indexOf('type');
      const categoryIndex = productInfo.indexOf('category');
      const nameIndex = productInfo.indexOf('name');
      const codeIndex = productInfo.indexOf('code');
      const dateIndex = productInfo.indexOf('date');
      const descIndex = productInfo.indexOf('desc');


      productObject = {
        type: productInfo.slice(typeIndex + 6, categoryIndex - 2),
        category: productInfo.slice(categoryIndex + 10, nameIndex - 2),
        name: productInfo.slice(nameIndex + 6, codeIndex - 2),
        code: productInfo.slice(codeIndex + 6, dateIndex - 2),
        date: productInfo.slice(dateIndex + 6, descIndex - 2),
        desc: productInfo.slice(descIndex + 6, fullLength - 1),
      };
      setProducData(productObject);
      setProductImage(ipfsUrl);
      setSearchData(false);


      setLoadingHistory(true);
      const tokenId = await contract.methods.requestIdToTokenId(requestId).call();
      const url = `https://deep-index.moralis.io/api/v2/nft/${contractValue.address}/${tokenId}/transfers?chain=bsc%20testnet&format=decimal`;
      axios.get(url, {
        headers: {
          'accept': 'application/json',
          'X-API-Key': process.env.REACT_APP_MORALIS_API,
        },
      }).then((res) => {
        const {status} = res;
        if (status === 200) {
          const {data} = res;
          const {result} = data;
          setTokenId(tokenId);
          setHistoryTransfer(result);
          setLoadingHistory(false);
        } else {
          alert('Truy xuất dữ liệu có lỗi, Vui lòng thử lại sau!!!');
        }
      }).catch((error) => {
        setSearchData(false);
        setLoadingHistory(false);
        alert('Truy cập API Moralis phát sinh lỗi, Vui lòng thử lại sau !!!');
      });
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
  const handleCheckTokenDirectBSC = () => {
    if (contractValue.address && tokenId) {
      let url = `https://testnet.bscscan.com/token/${contractValue.address}?a=${tokenId}`;
      window.open(url, '_blank');
    } else {
      alert('Không thể chuyển trang với đường dẫn này, Vui lòng thử lại sau !!!');
    }
  };

  const getRequestId = (scanResultWebCam) => {
    const query = queryString.parse(scanResultWebCam);
    const requestId = Object.values(query)[0];
    return requestId;
  };

  return (
    <ProductSearchDiv>
      <div className="product-search">
        <div className="product-search__form">
          <input type="text" className="product-search__input" value={getRequestId(scanResultWebCam)} onChange={(e) => setScanResultWebCam(e.target.value)}/>
          <button onClick={() =>getProductFromSmartContract()}><i className="fa fa-search"/> {t('applicationPage.formSeacrh.btnList.0')}</button>
          <button onClick={() => handleSearchQRCode()}><i className="fa fa-camera"/> {t('applicationPage.formSeacrh.btnList.1')}</button>
          <button onClick={() => onScanFile()}><i className="fa fa-upload"/> {t('applicationPage.formSeacrh.btnList.2')}</button>
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
          {/* <div style={{padding: '5px'}}>Kết quả scan :  {scanResultWebCam}</div> */}
        </div>
        {
          searchData ?
        <Waiting />:
        productData ?
        <div className="product-search__result" style={productData === null ? {display: 'none'} : {}}>
          <div className="product-search__result-img">
            <img src={productImage} />
          </div>
          <div className="product-search__result-content">
            <div className="product-sub-info">
              <label className="label-control"> {t('applicationPage.formSeacrh.searchInfo.text.0')}</label>
              <div className="info-wrap">
                <div>
                  <label>{t('applicationPage.formSeacrh.tableText.1')}</label>
                  <p>{productData.type}</p>
                </div>
                <div>
                  <label>{t('applicationPage.formSeacrh.tableText.2')}</label>
                  <p>{productData.category}</p>
                </div>
                <div>
                  <label>{t('applicationPage.formSeacrh.tableText.3')}</label>
                  <p>{productData.name}</p>
                </div>
                <div>
                  <label>{t('applicationPage.formSeacrh.tableText.4')}</label>
                  <p>{productData.code}</p>
                </div>
                <div>
                  <label>{t('applicationPage.formSeacrh.tableText.5')}</label>
                  <p>{productData.date}</p>
                </div>
                <div>
                  <label>{t('applicationPage.formSeacrh.tableText.6')}</label>
                  <textarea value={productData.desc}/>
                </div>
              </div>
              {/* <textarea style={{width: '100%'}} rows="10" cols="50" value={productData} /> */}
            </div>
          </div>
        </div> : ''
        }
        {
          loadingHistory ?
          <Waiting /> :
          historyTransfer.length !== 0 &&
          <div className="product-search__history">
            <div className="product-search__history-check">
              <p><i className="fa fa-history"></i> {t('applicationPage.formSeacrh.searchInfo.text.1')}</p>
              <button className="btn btn-check" onClick={() => handleCheckTokenDirectBSC()}><i className="fa fa-share-square"/> {t('applicationPage.formSeacrh.checkBtn')}</button>
            </div>
            <table>
              <thead>
                <tr>
                  <th width="10%">No.</th>
                  <th width="45%"> {t('applicationPage.formSeacrh.searchInfo.tableCol.0')}<i className="fa fa-arrow-circle-o-right" style={{color: 'red'}} /></th>
                  <th width="45%"> {t('applicationPage.formSeacrh.searchInfo.tableCol.1')} <i className="fa fa-arrow-circle-o-left" style={{color: 'green'}} /></th>
                </tr>
              </thead>
              <tbody>
                {
                  historyTransfer.reverse().map((item, idx) => {
                    return (
                      <tr key={idx}>
                        <th>{idx + 1}</th>
                        <th><a href={`https://testnet.bscscan.com/address/${item.from_address}`} target="_blank" rel="noopener noreferrer"> {item.from_address}</a></th>
                        <th><a href={`https://testnet.bscscan.com/address/${item.to_address}`} target="_blank" rel="noopener noreferrer" >{item.to_address} </a></th>
                      </tr>
                    );
                  })
                }
              </tbody>
            </table>
          </div>
        }
      </div>
    </ProductSearchDiv>
  );
}
const ProductSearchDiv = styled.div`
    border: 1px solid #ccc;
    padding: 10px 30px;
    border-radius: 5px;
    box-shadow: 0 3px 10px rgba(0,0,0,0.1);

  .product-search{
    /* border: 1px solid #ccc; */
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
    .loading-event{
      margin: 20px;
      background: var(--color-gray-secondary);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100px;
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
        border-radius:  5px;
      }
    }
    //--> Product Info 
    &__result{
      margin:50px 0;
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
          flex-direction: column;
          border:  1px solid var(--color-gray);
          border-radius:  5px;
          margin: 5px 0;
          > label{
            width: 100%;
            background: blue;
            text-align:center;
            padding: 10px 0;
            background-color: var(--color-background);
            color: white;
          }
          .info-wrap{
            padding: 0 5px;
            > div {
              display: flex;
              margin: 10px 0;
              > label{
                width: 30%;
              }
              > textarea{
                width: 70%;
                resize: none;
                padding: 5px;
                overflow: auto;
                height: 50px;
              }
            }
          }
          
        }
      }
    }
    //--> History
    &__history{
      margin-top: 20px;
      &-check{
        display: flex;
        justify-content: space-between;
        align-items: center;
        button{
          padding: 7px 0px;
          width: 130px;
          margin-left: 10px;

          background-color: var(--color-background);
          border: transparent;
          color: white;
          cursor: pointer;
          border-radius:  5px;
          i{
            margin-right: 5px;
            font-size: 20px;
          }
        }
      }
      
      p{
        margin-bottom: 10px;
      }
      table{
        width: 100%;
        box-shadow: 0 3px 10px rgba(0,0,0,0.1);
      }
      table thead th i {
        font-size: 20px;
        margin-left: 5px;
      }
      table thead th{
        background-color: var(--color-background);
        color: white;
        padding: 10px;
      }
      table, th{
        font-weight: 500;
        border: 1px solid #ccc;
        border-collapse: collapse;
        padding: 5px 2px;
        a{
          text-decoration: none;
          color: blue;
          font-size: 14px;
        }
      }
    }
  }
`;

export default ProductSearch;

