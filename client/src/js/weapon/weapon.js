import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

// 3010 포트 도메인
// URL 맨 뒤에 / (슬래시) 없어야 하므로 주의할 것
const EXPRESS_URL = 'https://term-express.run.goorm.io'

function clickChange(idx, name, speed){
	const td = document.getElementsByTagName("span").item(idx)
	td.innerText === name ? td.innerText = speed : td.innerText = name
	console.log(td.innerText)
}

const WTable = () => {
  const [R6S, setR6S] = useState([])
  useEffect(() => {
    getR6S()
  }, [])

  const getR6S =  async() => {
    try {
      const res = await axios.get(EXPRESS_URL + '/weapon')
      setR6S(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  return (
	<div className="Table">
		<table>
		  <thead>
			<tr>
				<th>name</th>
				<th>팀</th>
				<th>gun</th>
				<th>damage</th>
			</tr>
		  </thead>
		  <tbody>
			{ R6S.map( (g, i) =>
							<tr key={i}>
						    <td onClick={function() {clickChange(i, g.오퍼레이터, g.speed)}}>
									<img src={ process.env.PUBLIC_URL + '/img/' + g.image } width="30px" height="30px"/>
									<span>{ g.오퍼레이터 }</span></td>
						    <td>{ g.attdef === 1 ? "공격" : "방어" }</td>
						    <td>{g.총기 + ' (' + g.guntype + ',' + (g.ismain === 1 ? "주" : "보조") + ')'}</td>
						    <td>{g.damage}</td>
						 	</tr>) }
		  </tbody>
		</table>
	</div>
  )
}

export default WTable;