import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import web3Selector from '../../../components/Heading/redux/Web3.Selector';
import styled from 'styled-components';
import ipfs from '../../../apis/ipfsapi';
import QRCode from 'qrcode';
import contractValue from '../../../constants/contract';
import LoadingInline from '../../../components/Loading/LoadingInline';
import {useTranslation} from 'react-i18next';
import moment from 'moment';
import Waiting from '../../../components/Waiting';
import ImgZoomIn from '../../../components/ImgZoomIn';

function ProductRegist(props) {
  const [type, setType] = useState('individual');
  const [category, setCategory] = useState('clothes');
  const [productName, setProductName] = useState('');
  const [productCode, setProductCode] = useState('');
  const [productDate, setProductDate] = useState(moment().format('YYYY-MM-DD'));
  const [productDesc, setProductDesc] = useState('');
  // const [rulesChecked, setRulesChecked] = useState(false);
  const [ipfsHash, setIpfsHash] = useState(null);

  const [qrImageUrl, setQrImageUrl] = useState(null);
  const web3 = useSelector(web3Selector.selectWeb3);

  const [imgProductTemp, setImageProductTemp] = useState(null);
  const {t, i18n} = useTranslation();

  // const [submitBtn, setSubmitBtn] = useState(true);
  const [loadingListingEventSC, setLoadingListingEventSC] = useState(false);

  // view : https://ipfs.io/ipfs/
  const captureFile = async (e) => {
    try {
      e.preventDefault();
      const file = e.target.files[0];
      const updateResult = await ipfs.add(file);
      setIpfsHash(updateResult.path);
      setImageProductTemp(URL.createObjectURL(file));
    } catch (error) {
      alert('update image error');
    }
  };
  const handleRegistProduct = async () => {
    try {
      // console.log(moment(productDate).format('L'));
      // console.log(type, category, productName, productCode, productDate, productDesc);
      if (web3 === null)
      {
        alert('Chưa khởi tạo đối tượng Web3, Vui lòng liên kết ví với Website');
        return;
      }
      if (!type || !category || !productName || !productCode || !productDate || !productDesc) {
        alert('Vui lòng kiểm tra lại thông tin sản phẩm');
        return;
      }

      if (productName.length >= 100 || productCode.length >= 100 || productDate.length >= 200) {
        alert('Độ dài tối thiểu của các thuộc tính sản phẩm có độ dài tối đa là 100, và miêu tả là 200. Vui lòng kiểm tra lại');
        return;
      }


      const accounts = await web3.eth.getAccounts();
      let contract = new web3.eth.Contract(contractValue.ABI, contractValue.address);
      let productInfo = `"type: ${type}, category: ${category}, name: ${productName}, code: ${productCode}, date: ${productDate}, desc: ${productDesc}"`;
      await contract.methods.create(`https://ipfs.io/ipfs/${ipfsHash}`, productInfo).send({from: accounts[0]});
      setLoadingListingEventSC(true);
      contract.events.CreatedColection({}, (err, event) => {
        if (err) {
          alert('Sự kiện trả về phát sinh lỗi, Vui lòng thử lại sau');
          console.log(err);
          return;
        }
      }).on('connected', function(subscriptionId) {
        console.log('subscriptionId', subscriptionId);
      }).on('data', async function(event) {
        const {event: eventName} = event;
        if (eventName === 'CreatedColection') {
          const {returnValues} = event;
          const {requestId} = returnValues;
          const qrURL = `${contractValue.webDomain}/search?rqid=${requestId}`;
          const response = await QRCode.toDataURL(qrURL);
          setQrImageUrl(response);
          setLoadingListingEventSC(false);
        }
      }).on('changed', function(event) {
        console.log('change');
        // remove event from local database
      }).on('error', function(error, receipt) {
        // If the transaction was rejected by the network with a receipt, the second parameter will be the receipt.
        alert('Sự kiện chả về thất bại, Vui lòng thử lại sau');
        return;
      }); ;
    } catch (error) {
      alert('Truy cập có lỗi, Vui lòng thử lại sau. Hãy đọc qua phần hướng dẫn sử dụng !!!');
      console.log(error);
    }
  };
  return (
    <ProductRegistDiv>
      <div className="form form-section">
        <div className="form-sub-wrap">
          <label className="control-label">{t('applicationPage.formRegist.type.key')}</label>
          <div className="input-content form-group type">
            <div>
              <input type="radio" name="type" id="individual" value="individual" checked onChange={(e) => setType(e.target.value)}/>
              <label htmlFor="individual"> {t('applicationPage.formRegist.type.value.0')}</label>
            </div>
            <div>
              <input type="radio" name="type" value="enterprise" onChange={(e) => setType(e.target.value)}/>
              <label htmlFor="enterprise" id="enterprise"> {t('applicationPage.formRegist.type.value.1')}</label>
            </div>
          </div>
        </div>
        <div className="form-sub-wrap">
          <label className="control-label">{t('applicationPage.formRegist.productCategory.key')}</label>
          <div className="input-content form-group" >
            <select onChange={(e) => setCategory(e.target.value)} value={category} >
              <option value="clothes">{t('applicationPage.formRegist.productCategory.value.0')}</option>
              <option value="cosmetic">{t('applicationPage.formRegist.productCategory.value.1')}</option>
              <option value="art">{t('applicationPage.formRegist.productCategory.value.2')}</option>
            </select>
          </div>
        </div>
        <div className="form-sub-wrap">
          <label className="control-label">{t('applicationPage.formRegist.productName.key')}</label>
          <div className="input-content form-group">
            <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} maxLength="100"/>
          </div>
        </div>
        <div className="form-sub-wrap">
          <label className="control-label">{t('applicationPage.formRegist.productCode.key')}</label>
          <div className="input-content form-group">
            <input type="text" value={productCode} onChange={(e) => setProductCode(e.target.value)} maxLength="100" />
          </div>
        </div>
        <div className="form-sub-wrap">
          <label className="control-label">{t('applicationPage.formRegist.productDate.key')}</label>
          <div className="input-content form-group">
            <input type="date" id='input-date' value={productDate} onChange={(e) => setProductDate(e.target.value)} maxLength="100"/>
          </div>
        </div>
        <div className="form-sub-wrap">
          <label className="control-label">{t('applicationPage.formRegist.productDesc.key')}</label>
          <div className="input-content form-group input-desc">
            <textarea type="text" value={productDesc} onChange={(e) => setProductDesc(e.target.value)} rows="5" maxLength="200" />
            <label>{t('applicationPage.formRegist.productDescInfo.value.0')} <span style={{color: 'red', fontWeight: 'bold'}}>{t('applicationPage.formRegist.productDescInfo.value.1')}</span></label>
          </div>
        </div>
        <div className="form-sub-wrap">
          <label className="control-label">{t('applicationPage.formRegist.productImage.key')}</label>
          <div className="input-content form-group" style={{display: 'flex'}}>
            <input type="file" onChange={(e) => captureFile(e)} style={{border: 'none', width: '200px'}}/>
            {
              ipfsHash &&
              <img src={imgProductTemp} onClick={() => {ImgZoomIn({imgUrl: imgProductTemp});}} id="product-img" style={{width: '70px', zIndex: 1}}/>
            }
          </div>
        </div>
        {/* <div className="form-sub-wrap">
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
              <input type="checkbox" id="check-rules" name="check-rules" checked={rulesChecked} onChange={() => setRulesChecked(!rulesChecked)}/>
              <label>Đồng ý</label>
            </div>
          </div>
        </div> */}
        <div className="regist-btn">
          <button onClick={() => handleRegistProduct()}>{t('applicationPage.btnBottom')}</button>
        </div>
        {
          loadingListingEventSC ?
          <Waiting /> :
          <div className="qr-canvas" style={qrImageUrl ? {} : {display: 'none'}}>
            <img src={qrImageUrl} alt = 'qrCode Image'/>
            <a href={qrImageUrl} download> Tải xuống </a>
          </div>
        }
      </div>
    </ProductRegistDiv>
  );
}

const ProductRegistDiv = styled.div`
  .form{
    border: 1px solid #ccc;
    padding: 10px 30px;
    border-radius: 5px;
    box-shadow: 0 3px 10px rgba(0,0,0,0.1);
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
      #input-date{
        width: 15%;
      }
      .input-desc{
        label{
          font-size: 11px;
        }
        >textarea{
          width: 100%;
          padding: 5px;
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
  .loading-event{
    margin: 20px;
    background: var(--color-gray-secondary);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100px;
  }
  .qr-canvas{
    margin: 20px auto;
    display: flex;
    align-items: center;
    justify-content: center;
    canvas{
      width: 100px;
      height: 100px;
    }
    button{
      padding: 10px 20px;
      margin-left: 10px;
      background-color: var(--color-background);
      border: none;
      color: white;
      cursor: pointer;
    }
  }
`;

export default ProductRegist;

