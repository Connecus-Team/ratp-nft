import React, {useState, useEffect} from 'react';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';
import HeadingLayer from '../../layouts/HeadingLayer';
import './styles.scss';
function Main(props) {
  return (
    <HeadingLayer>
      <div className="main-page">
        <Banner />
        <div className="main-page__container">
          {/* intro */}
          <div className="main-page__intro">
            <h1>Lời mờ đầu</h1>
            <div className="main-page__intro-content">
              <div className="intro-video">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Wjg5IrSWmZM" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope;
                    picture-in-picture" allowFullScreen />
              </div>
              <div className="intro-text">
                <p>
                  <span style={{fontWeight: '1000'}}>Một trong những vấn đề gần đây được người dùng </span>
                tâm là vấn đề xác minh ….
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla cumque fugiat debitis eligendi excepturi quisquam
                molestias atque magni, deleniti voluptas nobis vitae sequi, soluta, perspiciatis repellendus maiores earum
                laudantium voluptate.
                </p>
              </div>
            </div>
          </div>
          {/* section */}
          <div className="main-page__section">
            <div className="main-page__section-heading">
              <h1>RATP là gì?</h1>
              <p>Một ứng dụng phần mền sử dụng công nghệ blockchain để lưu lại thông tin sản</p>
              <p>Giúp cho việc truy xuất nguồn gốc và chủ sở hữu</p>
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
          {/* guide */}
          <div className="main-page__guide">
            <div className="main-page__guide-title">
              <h1>Hướng dẫn sử dụng RATP?</h1>
            </div>
            <div className="main-page__guide-content">
              {/* product regist */}
              <div className="main-page__guide-row">
                <div className="main-page__guide-row__content">
                  <h2>Cách đăng ký sản phẩm</h2>
                  <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error iure numquam aliquam accusantium quos, molestiae quae sint.
                    Corrupti rerum adipisci voluptas, facilis inventore culpa dicta minus aliquam numquam nulla reiciendis?
                  </div>
                </div>
                <div className="main-page__guide-row__img">
                  <img src="https://blockodyssey.io/static/media/scanusImg01.e593b659.png" />
                </div>
              </div>
              {/* product search */}
              <div className="main-page__guide-row" style={{background: 'var(--color-gray-secondary)'}}>
                <div className="main-page__guide-row__content" style={{order: '1'}}>
                  <h2>Cách tra cuứ sản phẩm</h2>
                  <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error iure numquam aliquam accusantium quos, molestiae quae sint.
                    Corrupti rerum adipisci voluptas, facilis inventore culpa dicta minus aliquam numquam nulla reiciendis?
                  </div>
                </div>
                <div className="main-page__guide-row__img">
                  <img src="https://blockodyssey.io/static/media/scanusImg01.e593b659.png" />
                </div>
              </div>

              {/* product list */}
              <div className="main-page__guide-row">
                <div className="main-page__guide-row__content">
                  <h2>Cách tra cuứ sản phẩm</h2>
                  <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error iure numquam aliquam accusantium quos, molestiae quae sint.
                    Corrupti rerum adipisci voluptas, facilis inventore culpa dicta minus aliquam numquam nulla reiciendis?
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
    title: 'Với nền tảng RATP các chinhs nhaan',
    imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKQLYCnxyw-Wt42JyfPiPMxY-ibRsiCM1yew&usqp=CAU',
    content: ['loream1', 'lorem1', 'lorem1'],
  },
  {
    label: 'check-tracking',
    title: 'Với nền tảng RATP các thoong tin luwu thong',
    imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKQLYCnxyw-Wt42JyfPiPMxY-ibRsiCM1yew&usqp=CAU',
    content: ['loream2', 'lorem2', 'lorem2'],
  },
  {
    label: 'store-point',
    title: 'Với nền tảng RATP tích điểm',
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

