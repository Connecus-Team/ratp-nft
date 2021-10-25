import React from 'react';
import styled from 'styled-components';

function ProductRegist(props) {
  return (
    <ProductRegistDiv>
      <div className="form form-section">
        <div className="form-sub-wrap">
          <label className="control-label">Hình thức vận hành</label>
          <div className="input-content form-group type">
            <div>
              <input type="radio" name="type" id="individual" value="individual"/>
              <label htmlFor="individual"> Cá nhân</label>
            </div>
            <div>
              <input type="radio" name="type" value="enterprise"/>
              <label htmlFor="enterprise" id="enterprise"> Doanh nghiệp</label>
            </div>
          </div>
        </div>
        <div className="form-sub-wrap">
          <label className="control-label">Loại sản phẩm</label>
          <div className="input-content form-group">
            <select>
              <option>Quần áo</option>
              <option>Mỹ phấm</option>
              <option>Nghệ thuật</option>
            </select>
          </div>
        </div>
        <div className="form-sub-wrap">
          <label className="control-label">Tên sản phẩm</label>
          <div className="input-content form-group">
            <input type="text" />
          </div>
        </div>
        <div className="form-sub-wrap">
          <label className="control-label">Mã sản phẩm</label>
          <div className="input-content form-group">
            <input type="text" />
          </div>
        </div>
        <div className="form-sub-wrap">
          <label className="control-label">Màu sắc</label>
          <div className="input-content form-group">
            <input type="text" />
          </div>
        </div>
        <div className="form-sub-wrap">
          <label className="control-label">Miêu tả</label>
          <div className="input-content form-group">
            <input type="text" />
          </div>
        </div>
        <div className="form-sub-wrap">
          <label className="control-label">Điều khoản</label>
          <div className="input-content form-group rules">
            <div className="rules-content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                    optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                    obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                    nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                    tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                    quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
                    sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
                    recusandae alias error harum maxime adipisci amet laborum. Perspiciatis
                    minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit
                    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                    optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                    obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                    nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                    tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                    quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
                    sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
                    recusandae alias error harum maxime adipisci amet laborum. Perspiciatis
                    minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit
                    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                    optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                    obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                    nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                    tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                    quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
                    sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
                    recusandae alias error harum maxime adipisci amet laborum. Perspiciatis
                    minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit
            </div>
            <div className="rules-check">
              <input type="checkbox" id="check-rules" name="check-rules"/>
              <label>Đồng ý</label>
            </div>
          </div>
        </div>
        <div className="regist-btn">
          <button>Đăng ký</button>
        </div>
      </div>
    </ProductRegistDiv>
  );
}

const ProductRegistDiv = styled.div`
  .form{
    border: 1px solid #ccc;
    padding: 10px 30px
  }
  .form-section{
    display: flex;
    flex-direction: column;
    .form-sub-wrap{
      width: 100%;
      display: flex;
      margin: 10px 0;
      .control-label{
        width: 20%;
      }
      .input-content{
        width: 80%;
        > select{
          width: 200px;
        }
        > input{
          outline:none;
          border: none;
          width: 100%;
          border-bottom: 1px solid #ccc;

          padding: 0 5px;
        }
      }
      .type{
        display: flex;
        align-items: center;
        div{
          margin-right: 10px;
        }
      }
      .rules{
        &-content{
          height:200px;
          border: 1px solid #ccc;
          padding: 5px;
          overflow-y: scroll;
        }
        &-check{
          display: flex;
          justify-content: end;
          align-items:center;

          input{
            margin-right: 5px;
          }
        }
      }
    }
    .regist-btn{
      display: flex;
      align-items: center;
      justify-content:center;
      button {
        border-radius: 4px;
        background-color:var(--color-background);

        border: none;
        color: #fff;
        text-align: center;
        font-size: 20px;
        padding: 16px 32px;
        transition: all 0.5s;
        width: 200px;
        cursor: pointer;
        box-shadow: 0 10px 20px -8px rgba(0, 0, 0,.7);

        cursor: pointer;
        display: inline-block;
        position: relative;
        transition: 0.5s;
      }
      button:after {
        content: '»';
        position: absolute;
        opacity: 0;  
        top: 14px;
        right: -20px;
        transition: 0.5s;
      }
      button:hover{
        padding-right: 20px;
        padding-left: 10px;
      }
      
      button:hover:after {
        opacity: 1;
        right: 20px;
      }
    }
  }

`;

export default ProductRegist;

