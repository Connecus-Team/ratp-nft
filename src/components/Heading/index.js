import React from 'react';
import {NavLink, useLocation} from 'react-router-dom';
import './styles.scss';
function Heading() {
  const location = useLocation();
  const pathname = location.pathname;
  const splitLocation = pathname.split('/');
  return (
    <div className="heading">
      <ul>
        <li><NavLink className={splitLocation[1] === '' ? 'page-active' : ''} to="/">Trang Chủ</NavLink></li>
        <li><NavLink className={splitLocation[1] === 'dashbord' ? 'page-active' : ''} to="/dashbord">Sử dụng</NavLink></li>
        <li><NavLink className={splitLocation[1] === 'work' ? 'page-active' : ''} to="/work">Hoạt Động</NavLink></li>
        <li><NavLink className={splitLocation[1] === 'future' ? 'page-active' : ''} to="/future"> Kế Hoạch</NavLink></li>
        <li><NavLink className={splitLocation[1] === 'event' ? 'page-active' : ''}to="/event">Sự Kiện</NavLink></li>
        <li><NavLink className={splitLocation[1] === 'member' ? 'page-active' : ''}to="/member">Thành Viên</NavLink></li>
        <li><a href="https://github.com/huonghope/ratp-nft" target="_blank" rel="noreferrer">Mã Nguồn</a></li>
      </ul>
    </div>
  );
}
export default Heading;

