import React from 'react';
import HeadingLayer from '../../layouts/HeadingLayer';
import Footer from '../../components/Footer';
import './styles.scss';

function Event(props) {
  return (
    <HeadingLayer>
      <div className="event-page">
        <div className="event-page__container">
          <div className="event-page__col content">
            <img className="content__img" src="https://devfest.gdgmientrung.com/wp-content/uploads/2021/10/Thong-bao-khai-mac-cuoc-thi-va-Demo-Day-1-2.png"/>
            <div>
              <div className="content__text" >
                <ul>
                  <li>1. RATP Tham kha Sự Kiện Hackathon 2021</li>
                  <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus deserunt earum mollitia, totam aut dignissimos a perferendis, minima at suscipit ullam asperiores corrupti
                  laudantium voluptates maiores perspiciatis harum veritatis? Quod!</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="event-page__col content">
            <img className="content__img" src="https://vietstore365.vn/Uploads/origin/20200611/icon-tich-diem_doi-diem-20200611155943444.jpg"/>
            <div>
              <div className="content__text" >
                <ul>
                  <li>2. Chương trình tích điểm thưởng</li>
                  <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus deserunt earum mollitia, totam aut dignissimos a perferendis, minima at suscipit ullam asperiores corrupti
                  laudantium voluptates maiores perspiciatis harum veritatis? Quod!</li>
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

