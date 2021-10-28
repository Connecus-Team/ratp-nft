import React from 'react';
import HeadingLayer from '../../layouts/HeadingLayer';
import Footer from '../../components/Footer';
import './styles.scss';

function Home(props) {
  return (
    <HeadingLayer>
      <div className="member-page">
        <div className="member-page__container">
          <div className="member-page__col member-img">
            <div className="member-page__col work-img">
              <img src="https://scontent-ssn1-1.xx.fbcdn.net/v/t1.15752-9/p1080x2048/245182636_203077278569068_8960726563935767017_n.png?_nc_cat=105&ccb=1-5&_nc_sid=ae9488&_nc_ohc=tSbSDoZJ5YkAX9vTU7Z&_nc_ht=scontent-ssn1-1.xx&oh=eb2a6a2ad85cdaedacf15929b6bb286f&oe=619CD9B4"/>
              <label>Ảnh Thành Viên Dự Án</label>
            </div>
          </div>
          <div className="member-page__col content">
            <div className="mentor-list">
              <h2>Mentor</h2>
              <ul>
                <li> <img className="content__img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDtQ4YYvu990oOH2z_4HMlVEyMv_1pxubhuc0sffLu6tjmcx9LSoaFxtIV3xGK3TygpHY&usqp=CAU"/></li>
                <li> <img className="content__img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDtQ4YYvu990oOH2z_4HMlVEyMv_1pxubhuc0sffLu6tjmcx9LSoaFxtIV3xGK3TygpHY&usqp=CAU"/></li>
              </ul>
            </div>
            <div className="developer-list">
              <h2>Devoloper</h2>
              <div>
                <ul>
                  <li><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDtQ4YYvu990oOH2z_4HMlVEyMv_1pxubhuc0sffLu6tjmcx9LSoaFxtIV3xGK3TygpHY&usqp=CAU"/></li>
                  <li><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDtQ4YYvu990oOH2z_4HMlVEyMv_1pxubhuc0sffLu6tjmcx9LSoaFxtIV3xGK3TygpHY&usqp=CAU"/></li>
                </ul>
              </div>
              <div>
                <ul>
                  <li><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDtQ4YYvu990oOH2z_4HMlVEyMv_1pxubhuc0sffLu6tjmcx9LSoaFxtIV3xGK3TygpHY&usqp=CAU"/></li>
                  <li><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDtQ4YYvu990oOH2z_4HMlVEyMv_1pxubhuc0sffLu6tjmcx9LSoaFxtIV3xGK3TygpHY&usqp=CAU"/></li>
                  <li><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDtQ4YYvu990oOH2z_4HMlVEyMv_1pxubhuc0sffLu6tjmcx9LSoaFxtIV3xGK3TygpHY&usqp=CAU"/></li>
                </ul>
              </div>
            </div>
            {/* <img className="content__img" src="https://scontent-ssn1-1.xx.fbcdn.net/v/t1.15752-9/244712661_1709607392711099_2992031891309241091_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=ae9488&_nc_ohc=dRtUdv0qg7EAX_ljcXf&_nc_ht=scontent-ssn1-1.xx&oh=c893970b04d017122315f2564d91de5f&oe=619D1903"/>
            <div className="content__text" >
              <ul>
                <li>Phan Ke Hien</li>
                <li>DevOps Engineer</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus deserunt earum mollitia, totam aut dignissimos a perferendis, minima at suscipit ullam asperiores corrupti
                  laudantium voluptates maiores perspiciatis harum veritatis? Quod!</li>
              </ul>
            </div>
          </div>
          <div className="member-page__col content">
            <img className="content__img" src="https://scontent-ssn1-1.xx.fbcdn.net/v/t1.6435-1/s320x320/149717604_3733638833378908_7672286221174580202_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=7206a8&_nc_ohc=jSwEqxfGpx0AX8oJJjn&_nc_oc=AQn232syZtUlkjlFP_eh48KvDjsZRtghzRIS8TKjlLv3ignsoe0YAVzdJzXItl7Q2OM&_nc_ht=scontent-ssn1-1.xx&oh=ecd077fb88347f88328d35fb3f3ed3bc&oe=619ADA45"/>
            <div className="content__text" >
              <ul>
                <li>Huynh Phu Dat</li>
                <li>Product Manager</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus deserunt earum mollitia, totam aut dignissimos a perferendis, minima at suscipit ullam asperiores corrupti
                  laudantium voluptates maiores perspiciatis harum veritatis? Quod!</li>
              </ul>
            </div>
          </div>
          <div className="member-page__col content">
            <img className="content__img" src="https://scontent-ssn1-1.xx.fbcdn.net/v/t1.15752-9/65223406_469890020496471_166170467911073792_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=ae9488&_nc_ohc=bEq8T8qVHsoAX96tqLF&_nc_ht=scontent-ssn1-1.xx&oh=0fa6d1c22ac9e0ba27c02ef87584b795&oe=619D3A00"/>
            <div className="content__text">
              <ul>
                <li>Nguyen Dinh Huong</li>
                <li>Web Developer</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus deserunt earum mollitia, totam aut dignissimos a perferendis, minima at suscipit ullam asperiores corrupti
                  laudantium voluptates maiores perspiciatis harum veritatis? Quod!</li>
              </ul>
            </div>
          </div>
          <div className="member-page__col content">
            <img className="content__img" src="https://scontent-ssn1-1.xx.fbcdn.net/v/t1.6435-9/s960x960/133303670_2993946297374441_3069317844920472823_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=jppzfoSBadYAX-ZuKTB&_nc_ht=scontent-ssn1-1.xx&oh=f72215326b8195fc7cef1ac372da7575&oe=619CF427"/>
            <div className="content__text">
              <ul>
                <li>Nguyen Manh Dung</li>
                <li>Blockchain Developer</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus deserunt earum mollitia, totam aut dignissimos a perferendis, minima at suscipit ullam asperiores corrupti
                  laudantium voluptates maiores perspiciatis harum veritatis? Quod!</li>
              </ul>
            </div>
          </div>
          <div className="member-page__col content">
            <img className="content__img" src="https://scontent-ssn1-1.xx.fbcdn.net/v/t1.6435-9/118389006_2242537752559113_3479872072983870634_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=174925&_nc_ohc=68irO13pjhYAX9Q4s5s&_nc_ht=scontent-ssn1-1.xx&oh=868664cafdf48d357a29c4da92fccf44&oe=619B5B03"/>
            <div className="content__text">
              <ul>
                <li>Le Van Ninh</li>
                <li>Blockchain Architect</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus deserunt earum mollitia, totam aut dignissimos a perferendis, minima at suscipit ullam asperiores corrupti
                  laudantium voluptates maiores perspiciatis harum veritatis? Quod!</li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>
      <Footer />
    </HeadingLayer>
  );
}

export default Home;

