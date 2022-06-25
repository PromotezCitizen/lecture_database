// https://blog.toycrane.xyz/react%EC%97%90%EC%84%9C-form-%EC%89%BD%EA%B2%8C-%EB%8B%A4%EB%A3%A8%EA%B8%B0-b3b192cf2b33

import { useState, useEffect } from 'react';
import axios from 'axios';

const AddWeapon = () => {
	const [name, setName] = useState("");
	const [damage, setDamage] = useState("");
	const [armo, setArmo] = useState("");
	const [spm, setSpm] = useState("");
	const [type, setType] = useState("");
	const [ismain, setIsmain] = useState("");
	
	const integHandler = (e) => {
		e.preventDefault()
		
		switch(e.nativeEvent.path[0].id) {
			case 'name':
				setName(e.target.value)
				break;
			case 'damage':
				setDamage(e.target.value)
				break;
			case 'armo':
				setArmo(e.target.value)
				break;
			case 'spm':
				setSpm(e.target.value)
				break;
			case 'type':
				setType(e.target.value)
				break;
			case 'ismain':
				setIsmain(e.target.value)
				break;
		}
	}
	
	const submitHandler = (e) => {
    e.preventDefault();
		
    const body = {
			name: name,
			damage: damage,
			armo: armo,
			spm: spm,
			type: type,
			ismain: ismain
		}

    axios
      .post("https://term-express.run.goorm.io/add_weapon", body)
      .then((res) => console.log(res));
		
		window.location.reload();
  };
	
	return (
		<>
			<div className="topDiv"></div>
			<form onSubmit={submitHandler}>
				<table classclass="addFormTable">
					<thead>
					</thead>
					<tbody>
						<tr>
							<td><label>name</label></td>
							<td><input type="text" value={name} onChange={integHandler} id="name" required/></td>
						</tr>
						<tr>
							<td><label>damage</label></td>
							<td><input type="text" value={damage} onChange={integHandler} id="damage" required/></td>
						</tr>
						<tr>
							<td><label>armo</label></td>
							<td><input type="text" value={armo} onChange={integHandler} id="armo" required/></td>
						</tr>
						<tr>
							<td><label>spm</label></td>
							<td><input type="text" value={spm} onChange={integHandler} id="spm" required/></td>
						</tr>
						<tr>
							<td><label>type</label></td>
							<td>
								<select type="text" value={type} onChange={integHandler} id="type">
									<option value="hg">권총</option>
									<option value="ar">소총</option>
									<option value="sg">샷건</option>
									<option value="lmg">LMG</option>
									<option value="smg">기관단총/권총</option>
									<option value="shield">방패</option>
								</select>
							</td>
						</tr>
						<tr>
							<td><label>ismain?</label></td>
							<td>
								<select type="text" value={ismain} onChange={integHandler} id="ismain">
									<option value="1">주무기</option>
									<option value="0">보조무기</option>
								</select>
							</td>
						</tr>
						<tr>
							<td colSpan="2" style={{position: "center"}}><input id="submit" type="submit"/></td>
						</tr>
					</tbody>
				</table>				
			</form>
		</>
	)
}

export default AddWeapon