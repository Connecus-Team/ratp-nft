import React from 'react';
import HeadingLayer from '../../layouts/HeadingLayer';
import Footer from '../../components/Footer';
import './styles.scss';
import Icon from '../../constants/icons';
function Event(props) {
  return (
    <HeadingLayer>
      <div className="event-page">
        <div className="event-page__container">

          <div className="event-page__col content">
            <img className="content__img" src={Icon.hackathon}/>
            <div>
              <div className="content__text" >
                <ul>
                  <li>1. RATP Tham kha Sự Kiện Hackathon 2021 <span style={{color: 'blue'}}>[Đang diễn ra]</span></li>
                  <li>Team phát triển RATP tham gia sự kiện Hackathong 2021 với Ứng dụng lưu trữ thông tin sản phẩm</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="event-page__col content">
            <img className="content__img" src={Icon.point}/>
            <div>
              <div className="content__text" >
                <ul>
                  <li>2. Chương trình tích điểm thưởng <span style={{color: 'green'}}>[Kế hoạch]</span></li>
                  <li>Chương trình tích điểm thưởng đổi quà, Với những phần qua hấp dẫn đang trờ đợi !</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="event-page__col content">
            <img className="content__img" src={Icon.connect}/>
            <div>
              <div className="content__text" >
                <ul>
                  <li>4.Kết nối cộng đồng <span style={{color: 'green'}}>[Kế hoạch]</span></li>
                  <li>Kết nối cộng đồng với nhiều hoạt động ngoại khóa và online đưa mọi người đến gần nhau hơn </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="event-page__col content">
            <img className="content__img" src={Icon.image}/>
            <div>
              <div className="content__text" >
                <ul>
                  <li>5.Ra mắt sản phẩm <span style={{color: 'green'}}>[Kế hoạch]</span></li>
                  <li>Kế hoạch hoàn thiện sản phẩm đã đi vào hồi kết, Đợi ngày ra mắt với người dùng !!!</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </HeadingLayer>
  );
}

export default Event;

