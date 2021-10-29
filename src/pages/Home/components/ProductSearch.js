import React, {useRef, useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import QrReader from 'react-qr-reader';
import QRScanner from '../../../components/QRScanner';
import web3Selector from '../../../components/Heading/redux/Web3.Selector';
import LoadingInline from '../../../components/Loading/LoadingInline';
import contractValue from '../../../constants/contract';
import styled from 'styled-components';
import queryString from 'query-string';
import axios from 'axios';
import {Link} from 'react-router-dom';

function ProductSearch(props) {
  const web3 = useSelector(web3Selector.selectWeb3);


  const [scanResultWebCam, setScanResultWebCam] = useState(null);

  // const [loading, setLoading] = useState(false);
  const [searchData, setSearchData] = useState(false);
  const [productData, setProducData] = useState(null);
  const [productImage, setProductImage] = useState(null);
  const [historyTransfer, setHistoryTransfer] = useState([]);
  const [tokenId, setTokenId] = useState(null);

  const qrRef = useRef(null);


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
          // let convertObject = productInfo.replaceAll(`'`, `"`).replaceAll(`"`, `'`);
          // console.log(convertObject);
          // console.log(JSON.parse(convertObject));
          // console.log(productInfo.replace('"', '').replace('"', '')['type']);
          // console.log(JSON.stringify(productInfo.replace('"', '')));
          setProducData(productInfo);
          setProductImage(ipfsUrl);
          setSearchData(false);
        } else {
          alert('Truy xuất dữ liệu có lỗi, Vui lòng thử lại sau!!!');
        }
      }).catch((error) => {
        alert('Truy cập API Moralis phát sinh lỗi, Vui lòng thử lại sau !!!');
        console.log(error);
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
  useEffect(() => {
    // let transferList = [{from_address: '0000', to_address: '0000'}, {from_address: '2222', to_address: 3333}, {from_address: '11111', to_address: 2222}];
    const productInfo = {'type': 'individual', 'category': 'clothes', 'name': 'LV level3', 'code': 'LVTEST', 'date': '2021-10-29', 'desc': 'Túi thời trang'};
    console.log(productInfo.type);
    // setHistoryTransfer(transferList);
  }, []);
  // console.log('aabbcc'.replaceAll('b', '.'));
  return (
    <ProductSearchDiv>
      <div className="product-search">
        <div className="product-search__form">
          <input type="text" className="product-search__input" value={getRequestId(scanResultWebCam)} onChange={(e) => setScanResultWebCam(e.target.value)}/>
          <button onClick={() =>getProductFromSmartContract()}>Tìm kiếm</button>
          <button onClick={() => handleSearchQRCode()}>QR Code Scan</button>
          <button onClick={() => onScanFile()}>QR Code Upload</button>
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
          <div className="loading-event">
            <div style={{width: '50px', height: '50px', margin: '0 auto'}}>
              <LoadingInline type={'bubbles'} color={'#0F054C'} />
            </div>
            <span>Vui lòng đợi trong giây lát. Quá trình tải xác thực lên mạng có thể mất chút thời gian !!!</span>
          </div> :
        <div className="product-search__result" style={productData === null ? {display: 'none'} : {}}>
          <div className="product-search__result-img">
            <img src={productImage} />
          </div>
          <div className="product-search__result-content">
            <div className="product-sub-info">
              <label className="label-control">Thông tin sản phẩm</label>
              <textarea style={{width: '100%'}} rows="10" cols="50" value={productData} />
            </div>
          </div>
        </div>
        }
        {
          historyTransfer.length !== 0 &&
          <div className="product-search__history">
            <div className="product-search__history-check">
              <p><i className="fa fa-history"></i> Lịch sử giao dịch</p>
              <button className="btn btn-check" onClick={() => handleCheckTokenDirectBSC()}><i className="fa fa-share-square"/>Kiểm tra</button>
            </div>
            <table>
              <thead>
                <tr>
                  <th width="10%">No.</th>
                  <th width="45%"> Người Gửi<i className="fa fa-arrow-circle-o-right" style={{color: 'red'}} /></th>
                  <th width="45%"> Người Nhận <i className="fa fa-arrow-circle-o-left" style={{color: 'green'}} /></th>
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

