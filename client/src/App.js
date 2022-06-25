import './App.css';
import React from 'react';

import WTable from './js/weapon/weapon.js';
import AddWeapon from './js/weapon/add.js'
import RemoveWeapon from './js/weapon/remove.js';
import ModifyWeapon from './js/weapon/modify.js';

import GTable from './js/gadget/gadget.js';
import AddGadget from './js/gadget/add.js';
import ModifyGadget from './js/gadget/remove.js';
import RemoveGadget from './js/gadget/modify.js';

//import Nav from './js/support/menu.js';
import ResponsiveAppBar from './js/support/_menu.js';
import Main from './js/support/main.js';

import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

const App = () => {
	return(
	<div className='App'>
		<BrowserRouter>
		  <ResponsiveAppBar />  { /* router를 이용하여 페이지 전환 기능 구현 */}
		  <Routes>
				<Route path="/" element={<Main />} />
				
				<Route path="/weapon" element={<WTable />} />
				<Route path="/add_weapon" element={<AddWeapon />}/>
				<Route path="/modify_weapon" element={<ModifyWeapon />}/>
				<Route path="/remove_weapon" element={<RemoveWeapon />}/>
				
				<Route path="/gadget" element={<GTable />} />
				<Route path="/add_gadget" element={<AddGadget />}/>
				<Route path="/modify_gadget" element={<ModifyGadget />}/>
				<Route path="/remove_gadget" element={<RemoveGadget />}/>
		  </Routes>
		</BrowserRouter>
	</div>
	)
}

export default App;
