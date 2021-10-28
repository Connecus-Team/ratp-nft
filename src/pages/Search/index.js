import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import queryString from 'query-string';
import HeadingLayer from '../../layouts/HeadingLayer';
import web3Selector from '../../components/Heading/redux/Web3.Selector';
import Footer from '../../components/Footer';
import './styles.scss';

function Search(props) {
  const web3 = useSelector(web3Selector.selectWeb3);

  const [searchData, setSearchData] = useState(false);
  const [productData, setProducData] = useState(null);
  const [productImage, setProductImage] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      if (!web3) {
        alert('Vui truy cập ví để thực hiện tru cứu');
        return;
      }

      const query = queryString.parse(window.location.search);
      const accounts = await web3.eth.getAccounts();
      let contract = new web3.eth.Contract(contractValue.ABI, contractValue.address);
      const productInfo = await contract.methods.products(query['rqid']).call();
      const ipfsUrl = await contract.methods.requestIdToTokenURI(query['rqid']).call();

      setProducData(productInfo);
      setProductImage(ipfsUrl);
      setSearchData(true);
    };
  }, []);
  return (
    <HeadingLayer>
      <div className="search-page">

      </div>
      <Footer />
    </HeadingLayer>
  );
}

export default Search;

