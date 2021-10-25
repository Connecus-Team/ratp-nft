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
        <li><a href="https://github.com/huonghope/ratp-nft" target="_blank" rel="noreferrer">Mã Nguồn</a></li>
      </ul>
    </div>
  );
}
export default Heading;

