import React, {useState, useEffect, useRef} from 'react';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';
import ViewVideo from '../../components/ViewVideo';
import axios from 'axios';
import HeadingLayer from '../../layouts/HeadingLayer';

import './styles.scss';


function Main(props) {
  const hanleClickVewVideo = () => {
    ViewVideo();
  };

  const myRef = useRef(null);
  useEffect(() => {
    const url = 'https://deep-index.moralis.io/api/v2/nft/0x8bEDFf6315e415d549384E4518219bCB0d2Cb832/18/transfers?chain=bsc%20testnet&format=decimal';
    axios.get(url, {
      headers: {
        'accept': 'application/json',
        'X-API-Key': process.env.REACT_APP_MORALIS_API,
      },
    }).then((res) => {
      console.log(res);
    });
  }, []);

  const handleToUse = () => {
    window.scrollTo({top: myRef.current.offsetTop, behavior: 'smooth'});
  };
  return (
    <HeadingLayer>
      <div className="main-page">
        <Banner handleToUse={handleToUse} />
        <div className="main-page__container">
          {/* intro */}
          <div className="main-page__intro">
            <h1>Ứng dụng RATP</h1>
            <div className="main-page__intro-content">
              <div className="intro-video">
                <div className="intro-video__wrap" onClick={() => hanleClickVewVideo()}>
                  <img src="https://blockodyssey.io/static/media/revituImg01.2d13f689.png" className="intro-video__wrap-img"/>
                  <svg data-v-01741338="" viewBox="0 0 47.51 47.51" xmlns="http://www.w3.org/2000/svg" className="
                    absolute
                    top-0
                    bottom-0
                    left-0
                    right-0
                    mx-auto
                    my-auto
                    w-1/6
                  icon"><circle cx="23.75" cy="23.75" fill="#231f20" opacity=".8" r="23.75"></circle><path d="m37.16 23.75-21.11-12.18v24.37z" fill="#fff"></path></svg>
                </div>
                {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/Wjg5IrSWmZM" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope;
                    picture-in-picture" allowFullScreen /> */}
              </div>
              <div className="intro-text">
                <p>
                  {/* <p style={{fontWeight: '1000'}}>Hiện nay,</p>
                   */}
                  RATP là
                </p>
              </div>
            </div>
          </div>
          {/* section */}
          <div className="main-page__section">
            <div className="main-page__section-heading">
              <h1>Điểm nổi trội của RATP</h1>
              <p>Một ứng dụng phần mềm sử dụng công nghệ blockchain để lưu lại thông tin sản phẩm giúp việc
              truy xuất nguồn gốc và chủ sở hữu trở nên minh bạch bảo mật và nhanh chóng. Thông tin lưu
              </p>
            </div>
            <div className="main-page__section-content">
              <div className="section-content__img">
                <img src="https://blockodyssey.io/static/media/scanusImg01.e593b659.png"/>
              </div>
              <div className="section-content__content">
                <SectionContent />
              </div>
            </div>
          </div>
          <div ref={myRef}></div>
          {/* guide */}
          <div className="main-page__guide" >
            <div className="main-page__guide-title">
              <h1>Hướng dẫn sử dụng RATP?</h1>
            </div>
            <div className="main-page__guide-content">
              {/* product regist */}
              <div className="main-page__guide-row">
                <div className="main-page__guide-row__content">
                  <h2>Cách đăng ký sản phẩm</h2>
                  <div>
                    <ul>
                      <li>Connect Ví metamask (nếu chưa có ví nên ấn vào đây)</li>
                      <li>Click vào "Sử dụng" trên thanh menu</li>
                      <li>Điền thông tin theo hướng dẫn của phần nhập thong tin</li>
                      <li>Click đăng ký là bạn hoàn thành việc đăng ký sản phẩm</li>
                    </ul>
                  </div>
                </div>
                <div className="main-page__guide-row__img">
                  <img src="https://blockodyssey.io/static/media/scanusImg01.e593b659.png" />
                </div>
              </div>
              {/* product search */}
              <div className="main-page__guide-row" style={{background: 'var(--color-gray-secondary)'}}>
                <div className="main-page__guide-row__content" style={{order: '1'}}>
                  <h2>Cách tra cứu sản phẩm</h2>
                  <div>
                    <ul>
                      <li>Click vào "Sử dụng" trên thanh menu</li>
                      <li>Vào phần tra cứu thông tin sản phẩm</li>
                      <li>Quét mã QR hoặc Update QR</li>
                    </ul>
                  </div>
                </div>
                <div className="main-page__guide-row__img">
                  <img src="https://blockodyssey.io/static/media/scanusImg01.e593b659.png" />
                </div>
              </div>

              {/* product list */}
              <div className="main-page__guide-row">
                <div className="main-page__guide-row__content">
                  <h2>Giao dịch sản phẩm</h2>
                  <div>
                    <li>Click vào "Sử dụng" trên thanh menu</li>
                    <li>Chọn vào sản phẩm muốn Giao dịch</li>
                    <li>Nhập địa chỉ người nhận</li>
                    <li>Bấm Thực Hiện để hoàn thành</li>
                  </div>
                </div>
                <div className="main-page__guide-row__img">
                  <img src="https://blockodyssey.io/static/media/scanusImg01.e593b659.png" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </HeadingLayer>
  );
}
const SectionContent = () => {
  const sectionList = [{
    label: 'check-real',
    title: 'Kiểm tra nguồn gốc, xuất sứ',
    imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKQLYCnxyw-Wt42JyfPiPMxY-ibRsiCM1yew&usqp=CAU',
    content: ['loream1', 'lorem1', 'lorem1'],
  },
  {
    label: 'check-tracking',
    title: 'Kiểm tra quyền sở hữu NFT',
    imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKQLYCnxyw-Wt42JyfPiPMxY-ibRsiCM1yew&usqp=CAU',
    content: ['loream2', 'lorem2', 'lorem2'],
  },
  {
    label: 'store-point',
    title: 'Thực hiện giao dịch các tài sản NFT dựa trên tài sản thật',
    imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKQLYCnxyw-Wt42JyfPiPMxY-ibRsiCM1yew&usqp=CAU',
    content: ['loream3', 'lorem3', 'lorem4'],
  },
  ];
  const [selectTab, setSelectTab] = useState('check-real');
  const [content, setContent] = useState(sectionList[0]);

  useEffect(() => {
    const contenTemp = sectionList.filter((item) => item.label === selectTab);
    setContent(contenTemp[0]);
  }, [selectTab]);

  return (
    <div className="content-container">
      <div className="content-container__wrap">
        <h2 className="content-container__name">RATP</h2>
        <ul className="content-container__list">
          <li onClick={() => setSelectTab('check-real')}>Kiểm tra hàng thật</li>
          <li onClick={() => setSelectTab('check-tracking')}>Kiểm tra lưu thông</li>
          <li onClick={() => setSelectTab('store-point')}>Kiểm tra Tích điểm thanh toán</li>
        </ul>
      </div>
      { content.length !== 0 &&
        <SectionContentRealProduct item = {content} />
      }
    </div>
  );
};

const SectionContentRealProduct = ({item}) => {
  const {title, imgSrc, content} = item;
  return (
    <div className="content-container__wrap-content">
      <p>
        {title}
      </p>
      <div className="content-container__wrap-text">
        <img src={imgSrc} alt='content-img'/>
        <ul>
          {content.length !== 0 && content.map((item) => <li>{item}</li>)}
        </ul>
      </div>
    </div>
  );
};
export default Main;

