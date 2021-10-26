import React from 'react';
import './styles.scss';

function Footer(props) {
  return (
    <div className="footer">
      <h2 className="footer__title">Bắt đầu với RATP, tăng lòng tin người dùng</h2>
      <div className="footer__map">
        <ul className="footer__map-list">
          <li>
            <p>Dịch vụ</p>
            <ul className="footer__map-list-child">
              <li>Đăng ký sản phẩm</li>
              <li>Truy xuất sản phẩm</li>
              <li>Giao dịch sản phẩm</li>
            </ul>
          </li>

          <li>
            <p>Thông tin</p>
            <ul className="footer__map-list-child">
              <li>Hoạt động</li>
            </ul>
          </li>

          <li>
            <p>Sự kiện</p>
            <ul className="footer__map-list-child">
              <li>Danh sách sự kiện</li>
            </ul>
          </li>

          <li>
            <p>Giới thiệu</p>
            <ul className="footer__map-list-child">
              <li>Giới thiệu thành viên</li>
            </ul>
          </li>

          <li>
            <p>Liên hệ</p>
            <ul className="footer__map-list-child">
              <li>ratp@gmail.com</li>
            </ul>
          </li>
        </ul>
      </div>
      <h5 className="footer__copyright">@ CopyRight - 2021 RATP Team</h5>
    </div>
  );
}


export default Footer;

