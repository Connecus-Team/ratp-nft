import React from 'react';
import {NavLink} from 'react-router-dom';
import './styles.scss';

function Heading() {
  return (
    <div className="heading">
      <ul>
        <li><NavLink to="/">Trang Chủ</NavLink></li>
        <li><NavLink to="/word">Hoạt Động</NavLink></li>
        <li><NavLink to="/future"> KẾ Hoạch</NavLink></li>
        <li><NavLink to="/event">Sự Kiện</NavLink></li>
        <li><NavLink to="/member">Thành Viên</NavLink></li>
        <li><NavLink to="https://github.com/huonghope/ratp-nft">Mã Nguồn</NavLink></li>
      </ul>
    </div>
  );
}
export default Heading;

