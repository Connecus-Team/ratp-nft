import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import bannerSelector from '../../../components/Banner/redux/Banner.Selector';
import styled from 'styled-components';
import ipfs from '../../../apis/ipfsapi';
import QRCode from 'qrcode';

function ProductRegist(props) {
  const [type, setType] = useState('individual');
  const [category, setCategory] = useState('clothes');
  const [productName, setProductName] = useState(null);
  const [productCode, setProductCode] = useState(null);
  const [productColor, setProductColor] = useState(null);
  const [productDesc, setProductDesc] = useState(null);
  const [rulesChecked, setRulesChecked] = useState(false);
  const [ipfsHash, setIpfsHash] = useState(null);

  const [qrImageUrl, setQrImageUrl] = useState(null);
  const web3 = useSelector(bannerSelector.selectWeb3);

  // test
  const loadContract = async () => {
    return await new window.web3.eth.Contract(process.env.REACT_APP_CONTRACT_ABI, process.env.REACT_APP_CONTRACT_ADDRESS);
  };

  // view : https://ipfs.io/ipfs/
  const captureFile = async (e) => {
    try {
      e.preventDefault();
      const file = e.target.files[0];
      const updateResult = await ipfs.add(file);
      setIpfsHash(updateResult.path);
    } catch (error) {
      alert('update image error');
    }
  };
  const handleRegistProduct = async () => {
    try {
      if (web3 === null)
      {
        alert('Chưa khởi tạo đối tượng Web3, Vui lòng liên kết ví với Website');
        return;
      }
      // truy xuất accounts
      // const accounts = await web3.eth.requestAccounts(); // acounts[0] - address
      // const abi = process.env.REACT_APP_CONTRACT_ABI;
      // const address =process.env.REACT_APP_CONTRACT_ADDRESS;
      // const abi = [
      //   {
      //     'inputs': [],
      //     'name': 'count',
      //     'outputs': [
      //       {
      //         'internalType': 'uint256',
      //         'name': '',
      //         'type': 'uint256',
      //       },
      //     ],
      //     'stateMutability': 'view',
      //     'type': 'function',
      //   },
      //   {
      //     'inputs': [],
      //     'name': 'countFunc',
      //     'outputs': [],
      //     'stateMutability': 'nonpayable',
      //     'type': 'function',
      //   },
      // ];
      const abi = [{'inputs': [{'internalType': 'address', 'name': '_vrfCoordinator', 'type': 'address'}, {'internalType': 'address', 'name': '_linkToken', 'type': 'address'}, {'internalType': 'bytes32', 'name': '_keyhash', 'type': 'bytes32'}], 'stateMutability': 'nonpayable', 'type': 'constructor'},
        {'anonymous': false, 'inputs': [{'indexed': true, 'internalType': 'address', 'name': 'owner', 'type': 'address'}, {'indexed': true, 'internalType': 'address', 'name': 'approved', 'type': 'address'}, {'indexed': true, 'internalType': 'uint256', 'name': 'tokenId', 'type': 'uint256'}], 'name': 'Approval', 'type': 'event'},
        {'anonymous': false, 'inputs': [{'indexed': true, 'internalType': 'address', 'name': 'owner', 'type': 'address'}, {'indexed': true, 'internalType': 'address', 'name': 'operator', 'type': 'address'}, {'indexed': false, 'internalType': 'bool', 'name': 'approved', 'type': 'bool'}], 'name': 'ApprovalForAll', 'type': 'event'},
        {'anonymous': false, 'inputs': [{'indexed': false, 'internalType': 'bytes32', 'name': 'requestId', 'type': 'bytes32'}, {'indexed': false, 'internalType': 'uint256', 'name': 'tokenId', 'type': 'uint256'}], 'name': 'CreatedColection', 'type': 'event'},
        {'anonymous': false, 'inputs': [{'indexed': true, 'internalType': 'address', 'name': 'from', 'type': 'address'}, {'indexed': true, 'internalType': 'address', 'name': 'to', 'type': 'address'}, {'indexed': true, 'internalType': 'uint256', 'name': 'tokenId', 'type': 'uint256'}], 'name': 'Transfer', 'type': 'event'},
        {'inputs': [{'internalType': 'address', 'name': 'to', 'type': 'address'}, {'internalType': 'uint256', 'name': 'tokenId', 'type': 'uint256'}], 'name': 'approve', 'outputs': [], 'stateMutability': 'nonpayable', 'type': 'function'},
        {'inputs': [{'internalType': 'address', 'name': 'owner', 'type': 'address'}], 'name': 'balanceOf', 'outputs': [{'internalType': 'uint256', 'name': '', 'type': 'uint256'}], 'stateMutability': 'view', 'type': 'function'},
        {'inputs': [], 'name': 'baseURI', 'outputs': [{'internalType': 'string', 'name': '', 'type': 'string'}], 'stateMutability': 'view', 'type': 'function'},
        {'inputs': [], 'name': 'counter', 'outputs': [{'internalType': 'uint256', 'name': '', 'type': 'uint256'}], 'stateMutability': 'view', 'type': 'function'},
        {'inputs': [{'internalType': 'string', 'name': 'tokenURI', 'type': 'string'}, {'internalType': 'string', 'name': 'productText', 'type': 'string'}], 'name': 'create', 'outputs': [], 'stateMutability': 'nonpayable', 'type': 'function'},
        {'inputs': [], 'name': 'fee', 'outputs': [{'internalType': 'uint256', 'name': '', 'type': 'uint256'}], 'stateMutability': 'view', 'type': 'function'},
        {'inputs': [{'internalType': 'uint256', 'name': 'tokenId', 'type': 'uint256'}], 'name': 'getApproved', 'outputs': [{'internalType': 'address', 'name': '', 'type': 'address'}], 'stateMutability': 'view', 'type': 'function'},
        {'inputs': [{'internalType': 'address', 'name': 'owner', 'type': 'address'}, {'internalType': 'address', 'name': 'operator', 'type': 'address'}], 'name': 'isApprovedForAll', 'outputs': [{'internalType': 'bool', 'name': '', 'type': 'bool'}], 'stateMutability': 'view', 'type': 'function'},
        {'inputs': [], 'name': 'keyHash', 'outputs': [{'internalType': 'bytes32', 'name': '', 'type': 'bytes32'}], 'stateMutability': 'view', 'type': 'function'},
        {'inputs': [], 'name': 'linkToken', 'outputs': [{'internalType': 'address', 'name': '', 'type': 'address'}], 'stateMutability': 'view', 'type': 'function'},
        {'inputs': [], 'name': 'name', 'outputs': [{'internalType': 'string', 'name': '', 'type': 'string'}], 'stateMutability': 'view', 'type': 'function'},
        {'inputs': [{'internalType': 'uint256', 'name': 'tokenId', 'type': 'uint256'}], 'name': 'ownerOf', 'outputs': [{'internalType': 'address', 'name': '', 'type': 'address'}], 'stateMutability': 'view', 'type': 'function'},
        {'inputs': [{'internalType': 'bytes32', 'name': '', 'type': 'bytes32'}], 'name': 'products', 'outputs': [{'internalType': 'string', 'name': '', 'type': 'string'}], 'stateMutability': 'view', 'type': 'function'},
        {'inputs': [{'internalType': 'bytes32', 'name': 'requestId', 'type': 'bytes32'}, {'internalType': 'uint256', 'name': 'randomness', 'type': 'uint256'}], 'name': 'rawFulfillRandomness', 'outputs': [], 'stateMutability': 'nonpayable', 'type': 'function'},
        {'inputs': [{'internalType': 'bytes32', 'name': '', 'type': 'bytes32'}], 'name': 'requestIdToSender', 'outputs': [{'internalType': 'address', 'name': '', 'type': 'address'}], 'stateMutability': 'view', 'type': 'function'},
        {'inputs': [{'internalType': 'bytes32', 'name': '', 'type': 'bytes32'}], 'name': 'requestIdToTokenId', 'outputs': [{'internalType': 'uint256', 'name': '', 'type': 'uint256'}], 'stateMutability': 'view', 'type': 'function'},
        {'inputs': [{'internalType': 'bytes32', 'name': '', 'type': 'bytes32'}], 'name': 'requestIdToTokenURI', 'outputs': [{'internalType': 'string', 'name': '', 'type': 'string'}], 'stateMutability': 'view', 'type': 'function'},
        {'inputs': [{'internalType': 'address', 'name': 'from', 'type': 'address'}, {'internalType': 'address', 'name': 'to', 'type': 'address'}, {'internalType': 'uint256', 'name': 'tokenId', 'type': 'uint256'}], 'name': 'safeTransferFrom', 'outputs': [], 'stateMutability': 'nonpayable', 'type': 'function'},
        {'inputs': [{'internalType': 'address', 'name': 'from', 'type': 'address'}, {'internalType': 'address', 'name': 'to', 'type': 'address'}, {'internalType': 'uint256', 'name': 'tokenId', 'type': 'uint256'}, {'internalType': 'bytes', 'name': '_data', 'type': 'bytes'}], 'name': 'safeTransferFrom', 'outputs': [], 'stateMutability': 'nonpayable', 'type': 'function'}, {'inputs': [{'internalType': 'address', 'name': 'operator', 'type': 'address'}, {'internalType': 'bool', 'name': 'approved', 'type': 'bool'}], 'name': 'setApprovalForAll', 'outputs': [], 'stateMutability': 'nonpayable', 'type': 'function'}, {'inputs': [{'internalType': 'bytes4', 'name': 'interfaceId', 'type': 'bytes4'}], 'name': 'supportsInterface', 'outputs': [{'internalType': 'bool', 'name': '', 'type': 'bool'}], 'stateMutability': 'view', 'type': 'function'}, {'inputs': [], 'name': 'symbol', 'outputs': [{'internalType': 'string', 'name': '', 'type': 'string'}], 'stateMutability': 'view', 'type': 'function'}, {'inputs': [{'internalType': 'uint256', 'name': 'index', 'type': 'uint256'}], 'name': 'tokenByIndex', 'outputs': [{'internalType': 'uint256', 'name': '', 'type': 'uint256'}], 'stateMutability': 'view', 'type': 'function'}, {'inputs': [{'internalType': 'uint256', 'name': '', 'type': 'uint256'}], 'name': 'tokenIdToGene', 'outputs': [{'internalType': 'uint256', 'name': '', 'type': 'uint256'}], 'stateMutability': 'view', 'type': 'function'}, {'inputs': [{'internalType': 'address', 'name': 'owner', 'type': 'address'}, {'internalType': 'uint256', 'name': 'index', 'type': 'uint256'}], 'name': 'tokenOfOwnerByIndex', 'outputs': [{'internalType': 'uint256', 'name': '', 'type': 'uint256'}], 'stateMutability': 'view', 'type': 'function'}, {'inputs': [{'internalType': 'uint256', 'name': 'tokenId', 'type': 'uint256'}], 'name': 'tokenURI', 'outputs': [{'internalType': 'string', 'name': '', 'type': 'string'}], 'stateMutability': 'view', 'type': 'function'}, {'inputs': [], 'name': 'totalSupply', 'outputs': [{'internalType': 'uint256', 'name': '', 'type': 'uint256'}], 'stateMutability': 'view', 'type': 'function'}, {'inputs': [{'internalType': 'address', 'name': 'from', 'type': 'address'}, {'internalType': 'address', 'name': 'to', 'type': 'address'}, {'internalType': 'uint256', 'name': 'tokenId', 'type': 'uint256'}], 'name': 'transferFrom', 'outputs': [], 'stateMutability': 'nonpayable', 'type': 'function'}, {'inputs': [], 'name': 'vrfCoordinator', 'outputs': [{'internalType': 'address', 'name': '', 'type': 'address'}], 'stateMutability': 'view', 'type': 'function'}];

      const address = '0x8bEDFf6315e415d549384E4518219bCB0d2Cb832';
      // const address = '0x1Ac88Bee4E0faFA7F106cF5e0cb9B7b93E33c072';
      let contract = new web3.eth.Contract(abi, address);

      contract.methods.create('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_DxuIzwaufEjdPlEs-SGFgZQH0SGTDUtjFQ&usqp=CAU', '1 do sen').
          send({from: '0x4cf496524CE5fe537A04101E051703B808ffb65a'}).then((res) => {
            console.log(res);
          });
      // send({from: , gas: })
      // const result = await contract.methods.countFunc().call();

      // console.log(result);
      console.log(abi);
      console.log(address);
      // create contract
      // await new web3.eth.Contract(REACT_APP_CONTRACT_ABI, REACT_APP_CONTRACT_ADDRESS);
      // const dataInfo = `${type}===${productName}===${productCode}===${productColor}===${productDesc}`;
      // const result = web3.eth.methods.create(`https://ipfs.io/ipfs/${ipfsHash}` );

      return;
      const qrContent = ipfsHash;
      const response = await QRCode.toDataURL(qrContent);
      const productData = {type, category, productName, productCode, productColor, productDesc, ipfsHash};
      window.contract = await loadContract();
      const coolNumber = await window.contract.methods.coolNumber().call();
      setQrImageUrl(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ProductRegistDiv>
      <div className="form form-section">
        <div className="form-sub-wrap">
          <label className="control-label">Hình thức vận hành</label>
          <div className="input-content form-group type">
            <div>
              <input type="radio" name="type" id="individual" value="individual" checked onChange={(e) => setType(e.target.value)}/>
              <label htmlFor="individual"> Cá nhân</label>
            </div>
            <div>
              <input type="radio" name="type" value="enterprise" onChange={(e) => setType(e.target.value)}/>
              <label htmlFor="enterprise" id="enterprise"> Doanh nghiệp</label>
            </div>
          </div>
        </div>
        <div className="form-sub-wrap">
          <label className="control-label">Loại sản phẩm</label>
          <div className="input-content form-group" >
            <select onChange={(e) => setCategory(e.target.value)} value={category} >
              <option value="clothes">Quần áo</option>
              <option value="cosmetic">Mỹ phấm</option>
              <option value="art">Nghệ thuật</option>
            </select>
          </div>
        </div>
        <div className="form-sub-wrap">
          <label className="control-label">Tên sản phẩm</label>
          <div className="input-content form-group">
            <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)}/>
          </div>
        </div>
        <div className="form-sub-wrap">
          <label className="control-label">Mã sản phẩm</label>
          <div className="input-content form-group">
            <input type="text" value={productCode} onChange={(e) => setProductCode(e.target.value)} />
          </div>
        </div>
        <div className="form-sub-wrap">
          <label className="control-label">Màu sắc</label>
          <div className="input-content form-group">
            <input type="text" value={productColor} onChange={(e) => setProductColor(e.target.value)} />
          </div>
        </div>
        <div className="form-sub-wrap">
          <label className="control-label">Miêu tả</label>
          <div className="input-content form-group">
            <textarea type="text" value={productDesc} onChange={(e) => setProductDesc(e.target.value)} rows="5" />
          </div>
        </div>
        <div className="form-sub-wrap">
          <label className="control-label">Ảnh sản phẩm</label>
          <div className="input-content form-group" style={{display: 'flex'}}>
            <input type="file" onChange={(e) => captureFile(e)} style={{border: 'none', width: '200px'}}/>

            {
              ipfsHash &&
              <img src={`https://ipfs.io/ipfs/${ipfsHash}`} style={{width: '70px', zIndex: 999}}/>
            }
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
              <input type="checkbox" id="check-rules" name="check-rules" checked={rulesChecked} onChange={(e) => setRulesChecked(e.target.value)}/>
              <label>Đồng ý</label>
            </div>
          </div>
        </div>
        <div className="regist-btn">
          <button onClick={() => handleRegistProduct()}>Đăng ký</button>
        </div>
        <div className="qr-canvas" style={qrImageUrl ? {} : {display: 'none'}}>
          <img src={qrImageUrl} alt = 'qrCode Image'/>
          <a href={qrImageUrl} download> Tải xuống </a>
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

