import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { useState, useEffect } from 'react';
import axios from 'axios';

const EXPRESS_URL = 'https://term-express.run.goorm.io'

function clickChange(idx, name, speed){
	const td = document.getElementById("weapon_" + idx)
	td.innerText === name ? td.innerText = speed : td.innerText = name
}

const WTable = () => {
  const [weapon, setWeapon] = useState([])
  useEffect(() => {
    getWeapon()
  }, [])

  const getWeapon =  async() => {
    try {
      const res = await axios.get(EXPRESS_URL + '/weapon')
      setWeapon(res.data)
    } catch (err) {
      console.log(err)
    }
  }	

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>name</TableCell>
            <TableCell>team</TableCell>
            <TableCell>gun</TableCell>
            <TableCell>damage</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {weapon.map((g, i) => (
            <TableRow
              key={i}
            >
              <TableCell scope="row" onClick={function() {clickChange(i, g.오퍼레이터, g.speed)}}>
								<img src={ process.env.PUBLIC_URL + '/img/' + g.image } width="30px" height="30px"/>
								<span id={"weapon_" + i}>{ g.오퍼레이터 }</span>
              </TableCell>
              <TableCell>{ g.attdef === 1 ? "공격" : "방어" }</TableCell>
              <TableCell>{g.총기 + ' (' + g.guntype + ',' + (g.ismain === 1 ? "주" : "보조") + ')'}</TableCell>
              <TableCell>{g.damage}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default WTable;