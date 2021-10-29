import React from 'react';
import HeadingLayer from '../../layouts/HeadingLayer';
import Footer from '../../components/Footer';
import Icon from '../../constants/icons';
import './styles.scss';

function Future(props) {
  return (
    <HeadingLayer>
      <div className="future-page">
        <div className="future-page__container">
          <div className="future-page__col content">
            <label className="content__label">1. Kế hoạch ngắn hạn</label>
            <div>
              <img src={Icon.ratp4} />
              <ul>
                <li>Giai đoạn 1: Hoàn thiện sản phẩm và giao diện cho người cùng cuối</li>
                <li>Giai đoạn 2: Phát hành sản phẩm testnet cho người dùng (lấy thông số, để đo lường thị trường)</li>
                <li>Giai đoạn 3: Phát hành sản phẩm mainet và đẩy mạnh marketing kết nối khách hàng</li>
                <li>Giai đoạn 4: Xây dựng chức năng thanh toán và giao dịch online</li>
              </ul>
            </div>
          </div>

          <div className="future-page__col content">
            <label className="content__label">2. Kế hoạch dài hạn</label>
            <div>
              <p>Nghiên cứu và phát triển các tính năng của sản phẩn</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </HeadingLayer>
  );
}

export default Future;

