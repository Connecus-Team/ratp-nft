import React from 'react';
import styled from 'styled-components';

function ProductSearch(props) {
  return (
    <ProductSearchDiv>
      <div className="product-search">
        <div className="product-search__form">
          <input type="text" className="product-search__input"/>
          <button>Tra cứu</button>
          <button>QR Code</button>
        </div>
        <div className="product-search__result">
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
        <div className="product-search__history">
          <p>Lịch sử giao dịch</p>
          <table>
            <thead>
              <tr>
                <th>From</th>
                <th>To</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>text1.1</td>
                <td>text1.2</td>
              </tr>
              <tr>
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
      }
    }
    //--> History
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
      background: red;
    }
  }
`;

export default ProductSearch;

