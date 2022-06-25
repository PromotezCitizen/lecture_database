import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const EXPRESS_URL = 'https://term-express.run.goorm.io'

const ModifyWeapon = () => {
	
  const [weaponList, setWeaponList] = useState([])
  useEffect(() => {
    getWeaponList()
  }, [])

  const getWeaponList =  async() => {
    try {
      const res = await axios.get(EXPRESS_URL + '/get_weapon')
      setWeaponList(res.data)
    } catch (err) {
      console.log(err)
    }
  }
	
	const [b_name, setB_name] = useState("");
	const [name, setName] = useState("");
	const [damage, setDamage] = useState("");
	const [armo, setArmo] = useState("");
	const [spm, setSpm] = useState("");
	const [type, setType] = useState("");
	const [ismain, setIsmain] = useState("");
	
	const integHandler = (e) => {
		e.preventDefault()
		switch(e.nativeEvent.path[0].id) {
			case 'b_name':
				setB_name(e.target.value)
				dataGetHandler(e.target.value)
				break;
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
			default:
				break;
		}
	}
	
	const dataGetHandler = async(name) => {
		try {
      const res = await axios.get(EXPRESS_URL + '/get_weapon/' + name)
			setTable(res.data[0])
    } catch (err) {
      console.log(err)
    }
	}
	
	const [, updateState] = useState()
	const forceUpdate = useCallback( () => updateState([]), [])
	function setTable(data) {
		setName(data.name)
		setDamage(data.damage)
		setArmo(data.armo)
		setSpm(data.spm)
		setType(data.type)
		setIsmain(data.ismain)
		
		forceUpdate()
	}
	
	const submitHandler = (e) => {
    e.preventDefault();
		
    const body = {
			name: name,
			damage: Number(damage),
			armo: Number(armo),
			spm: Number(spm),
			type: type,
			ismain: Number(ismain)
		}
		const path = "https://term-express.run.goorm.io/modify_weapon/"+name
		console.log(path)
		
		axios
      .put("https://term-express.run.goorm.io/modify_weapon/"+name, body)
      .then((res) => console.log(res));
		
		console.log(body)
  };
	
	return (
		<>
			<div className="topDiv"></div>
			<div className="modDiv">
				<label>name</label>
				<select type="text" value={b_name} onChange={integHandler} id="b_name"
					style={{width: "200px", height:"26px"}}>
					{ weaponList.map( (g, i) =>   /* list의 map 함수를 이용하여 table의 내용을 구성 */ 
							<option key={i} value={g.name}>{g.name}</option>
							) }
				</select>
			</div>
			<form onSubmit={submitHandler}>
				<table className="addFormTable">
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
							<td><input type="text" value={type} onChange={integHandler} id="type" required/></td>
						</tr>
						<tr>
							<td><label>ismain?</label></td>
							<td><input type="text" value={ismain} onChange={integHandler} id="ismain" required/></td>
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

export default ModifyWeapon