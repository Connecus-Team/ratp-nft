import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import queryString from 'query-string';
import HeadingLayer from '../../layouts/HeadingLayer';
import web3Selector from '../../components/Heading/redux/Web3.Selector';
import Footer from '../../components/Footer';
import './styles.scss';
import LoadingInline from '../../components/Loading/LoadingInline';

function Search(props) {
  const web3 = useSelector(web3Selector.selectWeb3);

  const [searchData, setSearchData] = useState(true);
  const [productData, setProducData] = useState(null);
  const [productImage, setProductImage] = useState(null);

  const [historyTransfer, setHistoryTransfer] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      // if (!web3) {
      //   alert('Vui truy cập ví để thực hiện truy cứu');
      //   return;
      // }
      const query = queryString.parse(window.location.search);
      const {rqid} = query;
      if (!rqid) {
        alert('Lỗi đường link truy cập, Vui lòng xác thực');
      }
      console.log(query);
      // const accounts = await web3.eth.getAccounts();
      // let contract = new web3.eth.Contract(contractValue.ABI, contractValue.address);
      // const productInfo = await contract.methods.products(query['rqid']).call();
      // const ipfsUrl = await contract.methods.requestIdToTokenURI(query['rqid']).call();

      // setProducData(productInfo);
      // setProductImage(ipfsUrl);
      // setSearchData(true);
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
      <Footer />
    </HeadingLayer>
  );
}

export default Search;

