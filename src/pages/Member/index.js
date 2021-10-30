import React from 'react';
import HeadingLayer from '../../layouts/HeadingLayer';
import Footer from '../../components/Footer';
import Icon from '../../constants/icons';
import './styles.scss';

function Home(props) {
  return (
    <HeadingLayer>
      <div className="member-page">
        <div className="member-page__container">
          <div className="member-page__col member-img">
            <div className="member-page__col work-img">
              <img src={Icon.banner2}/>
              <label>Ảnh Thành Viên Dự Án</label>
            </div>
          </div>
          <div className="member-page__col content">
            <div className="mentor-list">
              <h2>Mentor Member</h2>
              <ul>
                <li className="mentor-list__item-li">
                  <div className="mentor-list__img-wrap">
                    <img src="https://scontent-gmp1-1.xx.fbcdn.net/v/t39.30808-6/241066992_4515680945120558_6136173180553120887_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=174925&_nc_ohc=HGuKeD5yR30AX8Uwuos&_nc_ht=scontent-gmp1-1.xx&oh=5a15f92863771bb793c906e8ff1b9d05&oe=6180D9E8"/>
                  </div>
                  <br/>
                  <div className="mentor-list__content-wrap">
                    <p>Le Thanh Hung</p>
                  </div>
                </li>
                <li className="mentor-list__item-li">
                  <div className="mentor-list__img-wrap">
                    <img src="https://scontent-gmp1-1.xx.fbcdn.net/v/t39.30808-6/245587884_3088644268125490_8983103366257027624_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=3ebJgYVWSEQAX_O6-QG&_nc_ht=scontent-gmp1-1.xx&oh=c50a8a626094a75dcd090ee7d75c5da1&oe=61812DA3"/>
                  </div>
                  <br/>
                  <div className="mentor-list__content-wrap">
                    <p>Nguyen Quynh Ngoc Tien</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="developer-list">
              <h2>Developer Member</h2>
              <div className="developer-list__item">
                <ul className="developer-list__item-ul">
                  <li className="developer-list__item-li">
                    <div className="developer-list__img-wrap">
                      <img src="https://scontent-ssn1-1.xx.fbcdn.net/v/t1.6435-1/s320x320/149717604_3733638833378908_7672286221174580202_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=7206a8&_nc_ohc=jSwEqxfGpx0AX8oJJjn&_nc_oc=AQn232syZtUlkjlFP_eh48KvDjsZRtghzRIS8TKjlLv3ignsoe0YAVzdJzXItl7Q2OM&_nc_ht=scontent-ssn1-1.xx&oh=ecd077fb88347f88328d35fb3f3ed3bc&oe=619ADA45"/>
                    </div>
                    <div className="developer-list__content-wrap">
                      <p>Huynh Phu Dat</p>
                      <p>Product Manager</p>
                    </div>
                  </li>
                  <li className="developer-list__item-li">
                    <div className="developer-list__img-wrap">
                      <img src="https://scontent-ssn1-1.xx.fbcdn.net/v/t1.15752-9/244712661_1709607392711099_2992031891309241091_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=ae9488&_nc_ohc=dRtUdv0qg7EAX_ljcXf&_nc_ht=scontent-ssn1-1.xx&oh=c893970b04d017122315f2564d91de5f&oe=619D1903"/>
                    </div>
                    <div className="developer-list__content-wrap">
                      <p>Phan Ke Hien</p>
                      <p>DevOps Engineer</p>
                    </div>
                  </li>

                </ul>
              </div>
              <br/>
              <br/>
              <div>
                <ul className="developer-list__item-ul">
                  <li className="developer-list__item-li">
                    <div className="developer-list__img-wrap">
                      <img className="content__img" src="https://scontent-ssn1-1.xx.fbcdn.net/v/t1.15752-9/65223406_469890020496471_166170467911073792_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=ae9488&_nc_ohc=bEq8T8qVHsoAX96tqLF&_nc_ht=scontent-ssn1-1.xx&oh=0fa6d1c22ac9e0ba27c02ef87584b795&oe=619D3A00"/>
                    </div>
                    <div className="developer-list__content-wrap">
                      <p>Nguyen Dinh Huong</p>
                      <p>Web Developer</p>
                    </div>
                  </li>

                  <li className="developer-list__item-li">
                    <div className="developer-list__img-wrap">
                      <img className="content__img" src="https://scontent-ssn1-1.xx.fbcdn.net/v/t1.6435-9/s960x960/133303670_2993946297374441_3069317844920472823_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=jppzfoSBadYAX-ZuKTB&_nc_ht=scontent-ssn1-1.xx&oh=f72215326b8195fc7cef1ac372da7575&oe=619CF427"/>
                    </div>
                    <div className="developer-list__content-wrap">
                      <p>Nguyen Manh Dung</p>
                      <p>Blockchain Developer</p>
                    </div>
                  </li>

                  <li className="developer-list__item-li">
                    <div className="developer-list__img-wrap">
                      <img className="content__img" src="https://scontent-ssn1-1.xx.fbcdn.net/v/t1.6435-9/118389006_2242537752559113_3479872072983870634_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=174925&_nc_ohc=68irO13pjhYAX9Q4s5s&_nc_ht=scontent-ssn1-1.xx&oh=868664cafdf48d357a29c4da92fccf44&oe=619B5B03"/>
                    </div>
                    <div className="developer-list__content-wrap">
                      <p>Le Van Ninh</p>
                      <p>Blockchain Architect</p>
                    </div>
                  </li>
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

export default Home;

