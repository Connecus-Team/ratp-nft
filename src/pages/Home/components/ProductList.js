import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import styled from 'styled-components';
import contractValue from '../../../constants/contract';
import web3Selector from '../../../components/Heading/redux/Web3.Selector';
import axios from 'axios';
import LoadingInline from '../../../components/Loading/LoadingInline';

function ProductList(props) {
  // const productList = [{
  //   name: 'Túi LV thời trang xxx',
  //   color: 'Trắng - Đen',
  //   size: '10cm x 20cm',
  //   desc: 'Túi LV tốt nhất 2021',
  // },
  // {
  //   name: 'Túi LV thời trang TTZ',
  //   color: 'Trắng - Đen',
  //   size: '10cm x 20cm',
  //   desc: 'Túi LV tốt nhất 2021',
  // },
  // {
  //   name: 'Túi LV thời trang LKOQ',
  //   color: 'Trắng - Đen',
  //   size: '10cm x 20cm',
  //   desc: 'Túi LV tốt nhất 2021',
  // },
  // {
  //   name: 'Túi LV thời trang PPY',
  //   color: 'Trắng - Đen',
  //   size: '10cm x 20cm',
  //   desc: 'Túi LV tốt nhất 2021',
  // }];
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
              productsTemp.push({...result[index], productInfo});
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
        console.log(data);
        let productsTemp = products.filter((item) => item.token_id !== product.token_id);
        // localStorage.setItem('products', JSON.stringify(productsTemp));
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
        <div className="loading-event">
          <div style={{width: '50px', height: '50px', margin: '0 auto'}}>
            <LoadingInline type={'bubbles'} color={'#0F054C'} />
          </div>
          <span>Vui lòng đợi trong giây lát, Quá trình tải xác thực lên mạng có thể mất chút thời gian !!!</span>
        </div> :
        products.length !== 0 && products.map((product) => <Product
          product={product}
          handleTransfer={handleTransfer}
        />)
      }
    </ProductListDiv>
  );
}

const Product = ({product, handleTransfer}) => {
  const [btnText, setBtnText] = useState('Giao Dịch');
  const [addressTo, setAddressTo] = useState(null);

  const handleCickTransfer = () => {
    if (btnText === 'Giao Dịch') {
      setBtnText('Thực Hiện');
    } else if (btnText === 'Thực Hiện') {
      if (addressTo) {
        handleTransfer(product, addressTo);
      }
    }
  };

  return (
    <ProductItem className="product-item">
      <div className="product-sales-wrap">
        <button className="product-sales-btn" onClick={() => handleCickTransfer()}>{btnText}</button>
        <div>
          <label>Địa chỉ người nhận</label>
          {
            btnText === 'Thực Hiện' &&
            <input type='text' onChange={(e) => setAddressTo(e.target.value)} />
          }
        </div>
      </div>
      <div className="product-item__img">
        <img src={product.token_uri}/>
      </div>
      <div className="product-item__content">
        {product.productInfo}
        {/* <div className="product-sub-info">
          <label className="label-control">Tên sản phẩm</label>
          <p>{product.name}</p>
        </div>
        <div className="product-sub-info">
          <label className="label-control">Kích thước</label>
          <p>{product.size}</p>
        </div>
        <div className="product-sub-info">
          <label className="label-control">Màu sắc</label>
          <p>{product.color}</p>
        </div>
        <div className="product-sub-info">
          <label className="label-control">Miêu tả</label>
          <p>{product.desc}</p>
        </div> */}
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
      }
      .product-item__content{
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
`;

export default ProductList;

