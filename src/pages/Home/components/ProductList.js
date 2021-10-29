import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import styled from 'styled-components';
import contractValue from '../../../constants/contract';
import web3Selector from '../../../components/Heading/redux/Web3.Selector';
import axios from 'axios';
import LoadingInline from '../../../components/Loading/LoadingInline';
import {useTranslation} from 'react-i18next';
import Waiting from '../../../components/Waiting';
import QRCode from 'qrcode';
import ImgZoomIn from '../../../components/ImgZoomIn';

function ProductList(props) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const web3 = useSelector(web3Selector.selectWeb3);

  useEffect(() => {
    let fetchData = async () => {
      if (!web3) {
        alert('Vui lòng kết nối ví để thực hiện giao dịch');
        setLoading(false);
        return;
      } else {
        setLoading(true);
        const accounts = await web3.eth.getAccounts(); // => array => array[0]
        let contract = new web3.eth.Contract(contractValue.ABI, contractValue.address);
        const url = `https://deep-index.moralis.io/api/v2/${accounts[0]}/nft/${contractValue.address}?chain=bsc%20testnet&format=decimal`;
        axios.get(url, {
          headers: {
            'accept': 'application/json',
            'X-API-Key': process.env.REACT_APP_MORALIS_API,
          },
        }).then(async (res) => {
          const {status} = res;
          if (status === 200) {
            const {data} = res;
            const {result} = data;
            const productsTemp = [];

            for (let index = 0; index < result.length; index++) {
              const {token_id} = result[index];
              const requestId = await contract.methods.tokenIdToRequestId(token_id).call();
              const productInfo = await contract.methods.products(requestId).call();


              let productObject = {
                type: '',
                category: '',
                name: '',
                code: '',
                date: '',
                desc: '',
                requestId: requestId,
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
                desc: productInfo.slice(descIndex + 6, fullLength- 1),
                requestId: requestId,
              };
              productsTemp.push({...result[index], productObject});
            }
            // localStorage.setItem('products', JSON.stringify(productsTemp));
            setProducts(productsTemp);
            setLoading(false);
          } else {
            alert('Truy xuất dữ liệu có lỗi, Vui lòng thử lại sau!!!');
          }
        });
      }
    };
    fetchData();
  }, [web3]);

  const handleTransfer = async (product, addressTo) => {
    try {
      const accounts = await web3.eth.getAccounts(); // => array => array[0]
      let contract = new web3.eth.Contract(contractValue.ABI, contractValue.address);
      await contract.methods.safeTransferFrom(accounts[0], addressTo, product.token_id).send({from: accounts[0]});
      contract.events.Transfer({
        filter: {
          from: accounts[0],
        },
      }, (err, data) => {
        let productsTemp = products.filter((item) => item.token_id !== product.token_id);
        setProducts(productsTemp);
        alert('Giao Dịch Thành Công');
      });
    } catch (error) {
      alert('Giao Dịch Bị lỗi');
      console.log(error);
    }
  };
  return (
    <ProductListDiv>
      {
        loading ?
        <Waiting /> :
        products.length !== 0 && products.map((product) => <Product
          product={product}
          handleTransfer={handleTransfer}
        />)
      }
    </ProductListDiv>
  );
}

const Product = ({product, handleTransfer}) => {
  const {t, i18n} = useTranslation();
  const [btnText, setBtnText] = useState();
  const [addressTo, setAddressTo] = useState(null);
  const [qrImageUrl, setQrImageUrl] = useState(null);

  useEffect(() => {
    setBtnText(t('applicationPage.formList.btnList.0'));
  }, [t]);

  const handleCickTransfer = () => {
    if (btnText === t('applicationPage.formList.btnList.0')) {
      setBtnText(t('applicationPage.formList.btnList.1'));
    } else if (btnText === t('applicationPage.formList.btnList.1')) {
      if (addressTo) {
        handleTransfer(product, addressTo);
      } else {
        setBtnText(t('applicationPage.formList.btnList.0'));
      }
    }
  };

  useEffect(() => {
    const setQrImage = async () => {
      const qrURL = `${contractValue.webDomain}/search?rqid=${product.productObject.requestId}`;
      const response = await QRCode.toDataURL(qrURL);
      setQrImageUrl(response);
    };
    setQrImage();
  }, [product]);


  return (
    <ProductItem className="product-item">
      <div className="product-sales-wrap">
        <div className="product-sales-wrap-transfer">
          <button className="product-sales-btn" onClick={() => handleCickTransfer()}>{btnText}</button>
          {
            btnText === t('applicationPage.formList.btnList.1') &&
            <div>
              <label style={{marginRight: '5px'}}>{t('applicationPage.formList.text')}</label>
              <input type='text' onChange={(e) => setAddressTo(e.target.value)} />
            </div>
          }
        </div>
      </div>
      <div className="product-item__img">
        <img src={product.token_uri} onClick={() =>ImgZoomIn({imgUrl: product.token_uri})}/>
      </div>
      <div className="product-item__content">
        {/* {product.productInfo} */}
        <div className="product-sub-info">
          <label className="label-control">{t('applicationPage.formSeacrh.tableText.1')}</label>
          <p>{product.productObject.type}</p>
        </div>
        <div className="product-sub-info">
          <label className="label-control">{t('applicationPage.formSeacrh.tableText.2')}</label>
          <p>{product.productObject.category}</p>
        </div>
        <div className="product-sub-info">
          <label className="label-control">{t('applicationPage.formSeacrh.tableText.3')}</label>
          <p>{product.productObject.name}</p>
        </div>
        <div className="product-sub-info">
          <label className="label-control">{t('applicationPage.formSeacrh.tableText.4')}</label>
          <p>{product.productObject.code}</p>
        </div>
        <div className="product-sub-info">
          <label className="label-control">{t('applicationPage.formSeacrh.tableText.5')}</label>
          <p>{product.productObject.date}</p>
        </div>
        <div className="product-sub-info">
          <label className="label-control">{t('applicationPage.formSeacrh.tableText.6')}</label>
          <textarea value={product.productObject.desc}/>
        </div>
        <div className="product-sub-info">
          <label className="label-control">{t('applicationPage.formSeacrh.tableText.7')}</label>
          <div>
            <img src={qrImageUrl} alt = 'qrCode Image'/>
            <a href={qrImageUrl} download> Tải xuống </a>
          </div>
        </div>
      </div>
    </ProductItem>
  );
};
const ProductListDiv = styled.div`
    .loading-event{
    margin: 20px;
    background: var(--color-gray-secondary);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100px;
    }
`;

const ProductItem = styled.div`
      margin-top:20px;
      display: flex;
      border: 1px solid #ccc;
      position: relative;
      padding: 5px;
      .product-sales-wrap{
        position: absolute;
        top: 10px;
        right: 10px;

        &-transfer{
          display: flex;
          flex-direction: column;
          align-items:flex-end;
          > div {
            margin-top: 20px;
            label{
              margin-left: 10px;
            }
          }
        }
      }
      .product-sales-btn{
        /* position:absolute; */
        /* right: 10px;
        top: 10px; */
        padding: 10px 20px;

        border-radius: 4px;
        background-color:var(--color-background);

        border: none;
        color: #fff;
        text-align: center;
        font-size: 20px;
        padding: 10px 15px;
        transition: all 0.5s;
        width: 150px;
        cursor: pointer;
        box-shadow: 0 10px 20px -8px rgba(0, 0, 0,.7);

        cursor: pointer;
        display: inline-block;
        /* position: absolute; */
        transition: 0.5s;
      }
      button:after {
        content: '»';
        position: absolute;
        opacity: 0;  
        top: 6px;
        right: -20px;
        transition: 0.5s;
      }
      button:hover{
        padding-right: 20px;
        padding-left: 10px;
      }
      
      button:hover:after {
        opacity: 1;
        right: 10px;
      }


      .product-item__img{
        width: 40%;
        max-height: 300px;
        overflow: hidden;

        display: flex;
        justify-content:center;
        align-items:center;
        img{
          width: 80%;
        }
      }
      .product-item__content{
        width: 60%;
        .product-sub-info{
          width: 100%;
          display: flex;
          margin: 5px 0;
          label{
            width: 30%;
          }
          textarea{
            width: 70%;
            padding: 10px;
            overflow:auto;
            resize: none;
          }
        }
      }
`;

export default ProductList;

