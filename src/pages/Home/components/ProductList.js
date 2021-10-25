import React from 'react';
import styled from 'styled-components';

function ProductList(props) {
  const productList = [{
    name: 'Túi LV thời trang xxx',
    color: 'Trắng - Đen',
    size: '10cm x 20cm',
    desc: 'Túi LV tốt nhất 2021',
  },
  {
    name: 'Túi LV thời trang TTZ',
    color: 'Trắng - Đen',
    size: '10cm x 20cm',
    desc: 'Túi LV tốt nhất 2021',
  },
  {
    name: 'Túi LV thời trang LKOQ',
    color: 'Trắng - Đen',
    size: '10cm x 20cm',
    desc: 'Túi LV tốt nhất 2021',
  },
  {
    name: 'Túi LV thời trang PPY',
    color: 'Trắng - Đen',
    size: '10cm x 20cm',
    desc: 'Túi LV tốt nhất 2021',
  }];
  return (
    <ProductListDiv>
      {productList.map((product) => <Product product={product}/>)}
    </ProductListDiv>
  );
}

const Product = ({product}) => {
  return (
    <ProductItem className="product-item">
      <button className="product-sales-btn">Giao dịch</button>
      <div className="product-item__img">
        <img src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQUKhSPUBmLLo7hXK8YC6nZlEABMIfXkhQdHGxkSVEBvRcZJDEOQaPIhnQ-5pybOa7o4hxl88Pdeccc&usqp=CAc" />
      </div>
      <div className="product-item__content">
        <div className="product-sub-info">
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
        </div>
      </div>
    </ProductItem>
  );
};
const ProductListDiv = styled.div`

`;

const ProductItem = styled.div`
      margin-top:20px;
      display: flex;
      border: 1px solid #ccc;
      position: relative;
      .product-sales-btn{
        position:absolute;
        right: 10px;
        top: 10px;
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
        position: absolute;
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

