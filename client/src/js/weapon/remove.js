import { useState, useEffect } from 'react';
import axios from 'axios';

const EXPRESS_URL = 'https://term-express.run.goorm.io'

const RemoveWeapon = () => {
	
  const [weapon, setWeapon] = useState([])
  useEffect(() => {
    getWeapon()
  }, [])

  const getWeapon =  async() => {
    try {
      const res = await axios.get(EXPRESS_URL + '/get_weapon')
      //console.log(res)
      setWeapon(res.data)
    } catch (err) {
      console.log(err)
    }
  }

	const [name, setName] = useState("");
	
	const integHandler = (e) => {
		e.preventDefault()
		setName(e.target.value)
	}
	
	const submitHandler = async(e) => {
    e.preventDefault();
		const DELETE_URL = "https://term-express.run.goorm.io/remove_weapon/" + name
    const body = {
			name: name
		}
		
		const res = await axios.delete(DELETE_URL, body).then((res) => console.log(res))
		
		window.location.reload();
  };
	
	return (
		<>
			<div className="topDiv"></div>
			<form onSubmit={submitHandler}>
				<div>
					<label>name</label>
					<select type="text" value={name} onChange={integHandler} id="type"
						style={{width: "200px", height:"26px"}}>
						{ weapon.map( (g, i) =>   /* list의 map 함수를 이용하여 table의 내용을 구성 */ 
								<option key={i} value={g.name}>{g.name}</option>
								) }
					</select>
				</div>
			
				<input type="submit"/>
			</form>
		</>
	)
}

export default RemoveWeapon