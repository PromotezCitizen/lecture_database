import { Link } from "react-router-dom";
import React from 'react';

const Nav = () => { // 상단 네비게이션바 제작
  return (
      <nav className="clearfix">
        <ul className="clearfix">
					<span style={{position:"absolute", left:"10px", top:"14px"}}>20181264 한상현</span>
          <li><Link to="/">메인</Link></li>
					<li><Link to="/gadget">가젯</Link>
						<ul className="dropDown">
							<li><Link to="/add_gadget">가젯추가</Link></li>
							<li><Link to="/modify_gadget">가젯변경</Link></li>
							<li><Link to="/remove_gadget">가젯삭제</Link></li>
						</ul>
					</li>
          <li><Link to="/weapon">총기</Link>
						<ul className="dropDown">
							<li><Link to="/add_weapon">총기추가</Link></li>
							<li><Link to="/modify_weapon">총기변경</Link></li>
							<li><Link to="/remove_weapon">총기삭제</Link></li>
						</ul>
					</li>
        </ul>
      </nav>
  );
}

export default Nav;