import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import queryString from 'query-string';
import HeadingLayer from '../../layouts/HeadingLayer';
import web3Selector from '../../components/Heading/redux/Web3.Selector';
import Footer from '../../components/Footer';
import contractValue from '../../constants/contract';
import './styles.scss';
import Waiting from '../../components/Waiting';
import axios from 'axios';
import Web3 from 'web3';
import {useTranslation} from 'react-i18next';
import QRCode from 'qrcode';


function Search(props) {
  const web3 = useSelector(web3Selector.selectWeb3);

  const [searchData, setSearchData] = useState(true);
  const [productData, setProducData] = useState(null);
  const [productImage, setProductImage] = useState(null);
  const [loadingHistory, setLoadingHistory] = useState(false);
  const [qrImageUrl, setQrImageUrl] = useState(false);
  const {t, i18n} = useTranslation();


  const [historyTransfer, setHistoryTransfer] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = queryString.parse(window.location.search);
        const {rqid} = query;
        if (!rqid) {
          alert('Lỗi đường link truy cập, Vui lòng xác thực');
        }
        let web3Provider;
        // Check Install Metamask
        if (window.ethereum) {
          web3Provider = window.ethereum;
          try {
            await window.ethereum.enable();
          } catch (error) {
            console.error('User denied account access');
          }
        }// Legacy dapp browsers...
        else if (window.web3) {
          web3Provider = window.web3.currentProvider;
        } else {
          if (window.confirm('Bạn chưa cài Metamask. Bạn có muốn cài đặt ngay không?')) {
            window.open('https://metamask.io/', '_blank');
          } else {
            return;
          }
        }
        // const web3 = new Web3(new Web3.providers.HttpProvider('https://rinkeby.infura.io/v3/81b9f5ec89d7444db4009cdbb00b8dba'));
        // const web3 = new Web3(new Web3.providers.HttpProvider('https://data-seed-prebsc-1-s1.binance.org:8545'));
        // console.log(web3);
        let web3 = new Web3(web3Provider);
        const chainId = await web3.eth.getChainId();
        if (chainId != 97) {
          alert('Vui lòng liên kết với mạng Binace');
          return;
        }

        let contract = new web3.eth.Contract(contractValue.ABI, contractValue.address);
        const productInfo = await contract.methods.products(query['rqid']).call();
        const ipfsUrl = await contract.methods.requestIdToTokenURI(query['rqid']).call();

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
        const qrURL = `${contractValue.webDomain}/search?rqid=${query['rqid']}`;
        const response = await QRCode.toDataURL(qrURL);

        setQrImageUrl(response);
        setProducData(productObject);
        setProductImage(ipfsUrl);
        setSearchData(false);
        setLoadingHistory(true);
        const tokenId = await contract.methods.requestIdToTokenId(query['rqid']).call();
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
        console.log(error);
      }
    };
    fetchData();
  }, []);
  const handleCheckTokenDirectBSC = () => {
    if (tokenId) {
      let url = `https://testnet.bscscan.com/token/${contractValue.address}?a=${tokenId}`;
      window.open(`https://metamask.io/`, '_blank');
    } else {
      alert('Không thể chuyển trang với đường dẫn này, Vui lòng thử lại sau !!!');
    }
  };
  return (
    <HeadingLayer>
      <div className="search-page">
        {
          searchData ?
          <Waiting /> :
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
                  <div>
                    <label>{t('applicationPage.formSeacrh.tableText.7')}</label>
                    <div>
                      <img src={qrImageUrl} alt = 'qrCode Image'/>
                      <a href={qrImageUrl} download> Tải xuống </a>
                    </div>
                  </div>
                </div>
                {/* <textarea style={{width: '100%'}} rows="10" cols="50" value={productData} /> */}
              </div>
            </div>
          </div>
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
      <Footer />
    </HeadingLayer>
  );
}

export default Search;

