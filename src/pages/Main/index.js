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
                  RATP ứng dụng công nghệ Blockchain và NFT để định danh các sản phẩm ngoài và chứng nhận quyền sở hữu của người tiêu dùng đối với các sản phẩm đó.<br/>
                  Bằng cách cho phép người dùng dễ dàng kiểm tra nguồn gốc và xác minh chủ sở hữu của sản phẩm,
                  RATP giúp bảo vệ quyền lợi người tiêu dùng cũng như giúp doanh nghiệp và các cá nhân bảo vệ doanh thu từ sản phẩm của mình trước những vấn đề về hàng giả,
                  hàng kém chất lượng.
                </p>
              </div>
            </div>
          </div>
          {/* section */}
          <div className="main-page__section">
            <div className="main-page__section-heading">
              <h1>Điểm nổi trội của RATP</h1><br/>
              <p>RATP cung cấp giải pháp xác minh tính tin cậy của sản phẩm. <br/>Từ đó giúp loại bỏ hàng giả và đảm bảo cho các giao dịch mua bán sản phẩm của người dùng</p>
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
                  <h2>Đăng ký sản phẩm</h2>
                  <div>
                    <ul>
                      <li>Bước 1: Kết nối ví MetaMask (Nếu chưa có ví bạn có thể đăng ký theo hướng dẫn tại đây).</li>
                      <li>Bước 2: Điền đầy đủ thông tin ở mục nhập thông tín sản phẩm.</li>
                      <li>Bước 3: Tích vào ô “Đồng ý” sau đó nhấp vào phần “Đăng ký”.</li>
                      <li>Bước 4: Xác nhận trên ví MetaMask và chờ nhận lại mã QR của sản phẩm.</li>
                    </ul>
                  </div>
                </div>
                <div className="main-page__guide-row__img">
                  <img src="https://blockodyssey.io/static/media/scanusImg01.e593b659.png" />
                </div>
              </div>
              {/* product search */}
              <div className="main-page__guide-row" style={{background: 'var(--color-gray-secondary)'}}>
                <div className="main-page__guide-row__content" style={{order: '1', padding: '20px 0'}}>
                  <h2>Tìm kiếm sản phẩm</h2>
                  <div>
                    <ul>
                      <li>Bước 1: Nhấp vào “Sử dụng” trên thanh menu.</li>
                      <li>Bước 2: Chọn mục “Tiềm kiếm thông tin sản phẩm”.</li>
                      <li>Bước 3: Tải mã code QR (Camera hoặc Upload file)</li>
                      <li>Bước 4: Bấm "Tìm kiếm"</li>
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
                    <ul>
                      <li>Bước 1: Nhấp vào “Sử dụng” trên thanh Menu.</li>
                      <li>Bước 2: Chọn mục “Danh sách sản phẩm”.</li>
                      <li>Bước 3: Chọn sản phẩm và bấm "Giao dịch"</li>
                      <li>Bước 4: Nhập địa chỉ người nhận và bấm "Thực hiện".</li>
                    </ul>
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
    title: `Doanh nghiệp hoặc cá nhân sở hữu sản phẩm có thể dễ dàng đăng ký với RATP để bảo vệ sản phẩm của mình. 
    Bằng việc bảo vệ sản phẩm, nhà sản xuất có thể đảm bảo quyền lợi của người mua hàng giúp tăng uy tín và giá trị của thương hiệu.`,
    imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKQLYCnxyw-Wt42JyfPiPMxY-ibRsiCM1yew&usqp=CAU',
    content: ['• Đăng ký dễ dàng', '• Định danh và bảo vệ sản phẩm', '• Khẳng định chất lượng thương hiệu'],
  },
  {
    label: 'check-tracking',
    title: `Với thông tin được mã hóa trong mã QR được gắn trên sản phẩm, RATP giúp người dùng kiểm tra xuất xứ, 
    lịch sử giao dịch của sản phẩm với thông tin minh bạch, chính xác và nói không với giao dịch bằng “lòng tin” vô điều kiện.`,
    imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKQLYCnxyw-Wt42JyfPiPMxY-ibRsiCM1yew&usqp=CAU',
    content: ['• Chống giả mạo', '• Truy xuất dễ dàng', '• Thông tin minh bạch'],
  },
  {
    label: 'store-point',
    title: `Mỗi giao dịch của sản phẩm đều được đảm bảo bằng việc giao dịch NFT thay cho quyền sở hữu. 
    Người mua có thể xác minh nguồn gốc cũng như quyền sở hữu sản phẩm của người bán hàng một cách dễ dàng.`,
    imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKQLYCnxyw-Wt42JyfPiPMxY-ibRsiCM1yew&usqp=CAU',
    content: ['• Đảm bảo quyền lợi của hai bên giao dịch', '• Thao tác giao dịch đơn giản', '• Niềm tin ở sản phẩm thật thay vì lòng tin mong manh với người bán'],
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
        <h1 className="content-container__name">RATP</h1>
        <ul className="content-container__list">
          <li onClick={() => setSelectTab('check-real')}>Đăng ký sản phẩm</li>
          <li onClick={() => setSelectTab('check-tracking')}>Kiểm tra nguồn gốc</li>
          <li onClick={() => setSelectTab('store-point')}>Giao dịch đảm bảo</li>
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

