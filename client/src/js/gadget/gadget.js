import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

// 3010 포트 도메인
// URL 맨 뒤에 / (슬래시) 없어야 하므로 주의할 것
const EXPRESS_URL = 'https://term-express.run.goorm.io'

function clickChange(idx, name, speed){
	const td = document.getElementsByTagName("span").item(idx)
	td.innerText == name ? td.innerText = speed : td.innerText = name
	console.log(td.innerText)
}

const GTable = () => {
  const [R6S, setR6S] = useState([])
  useEffect(() => {
    getR6S()
  }, [])

  const getR6S = async() => {
    try {
      const res = await axios.get(EXPRESS_URL + '/gadget')
      // console.log(res.data)
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
				<th>name/speed</th>
				<th>팀</th>
				<th>gadget</th>
			</tr>
		  </thead>
		  <tbody>
			{ R6S.map( (g, i) =>   /* list의 map 함수를 이용하여 table의 내용을 구성 */ 
							<tr key={i}>
						    <td onClick={function() {clickChange(i, g.오퍼레이터, g.speed)}}>
									<img src={ process.env.PUBLIC_URL + '/img/' + g.image } width="30px" height="30px"/>
									<span>{ g.오퍼레이터 }</span></td>
						    <td>{ g.attdef === 1 ? "공격" : "방어" }</td>
									{/* 데이터베이스에 저장된 값은 int값. 3항 연산을 이용하여 1이면 공격, 0이면 방어팀으로 구분 */}
						    <td>{ g.가젯 }</td>
						 </tr>) }
		  </tbody>
		</table>
	</div>
  )
}

export default GTable;