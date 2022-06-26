import express from "express"
import mysql from "mysql"
import bodyParser from "body-parser"
import cors from 'cors'

const app = express()
const port = 3010

const dbc = mysql.createConnection({
	host: '127.0.0.1',
	user: 'root',
	password: 'mysql1234',
	database: 'mydb',
	port: '3306'
})

app.use(cors())
app.use(bodyParser.json())
// application/x-www-form-urlencoded 처리
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`실행`);
});

app.get('/', (req, res) => {
	const query = `select * from operator`
	dbc.query(query, (err, rows) => {
		if (err) {
			res.send('{"status": "error"}')
			return console.log(err)
		}
		res.send(rows)
	})
})

app.get('/weapon', (req, res) => {
	const query = `select operator.name as 오퍼레이터, weapon.name as 총기, damage, operator.attdef as attdef,
			type as guntype, img as image, ismain, operator.speed as speed
		from operator
			left outer join weaponlist on operator.id=weaponlist.op_id 
			left outer join weapon on weaponlist.weapon_id=weapon.id
			join optype on optype.speed=operator.speed
		where weapon.name is not null ORDER BY attdef DESC, 오퍼레이터, ismain DESC`
	dbc.query(query, (err, rows) => {
		if (err) {
			res.send('{"status": "error"}')
			return console.log(err)
		}
		res.send(rows)
	})
})

app.get('/get_weapon', (req, res) => {
	const query = `select id, name from weapon`
	dbc.query(query, (err, rows) => {
		if (err) {
			res.send('{"status": "error"}')
			return console.log(err)
		}
		res.send(rows)
	})
})

app.get('/get_weapon/:name', (req, res) => {
	const query = `select name, damage, armo, spm, type, ismain from weapon where name=?`
	dbc.query(query, req.params.name, (err, rows) => {
		if (err) {
			res.send('{"status": "error"}')
			return console.log(err)
		}
		res.send(rows)
	})
})

app.post('/add_weapon', (req, res) => {
	const pallet = req.body.type === "sg" ? 8 : 1
	const weapon = [
		null,
		req.body.name,
		Number(req.body.damage),
		Number(req.body.armo),
		Number(req.body.spm),
		req.body.type,
		pallet,
		Number(req.body.ismain)
	]

	const query = `insert into weapon values (?)`
	dbc.query(query, [weapon], (err, rows) => {
		if (err){
			res.send('{"status": "error"}')
			return console.log(err)
		}
		res.send(rows)
	})
})

app.delete('/remove_weapon/:name', (req, res) => {
	console.log(req.params.name)
	const name = req.params.name
	const query = `delete from weapon where weapon.name=?`
	dbc.query(query, name, (err, rows) => {
		if (err){
			res.send('{"status": "error"}')
			return console.log(err)
		}
		res.send(rows)
	})
})

app.put('/modify_weapon/:name', (req, res) => {
	const weapon = [
		req.body.name,
		req.body.damage,
		req.body.armo,
		req.body.spm,
		req.body.type,
		req.body.ismain,
		req.params.name
	]
	const query = `update weapon set name=?, damage=?, armo=?, spm=?, type=?, ismain=? where name=?`
	dbc.query(query, weapon, (err, rows) => {
		if (err) {
			res.send('{"status": "error"}')
			return console.log(err)
		}
		res.send(rows)
	})
})
// ======================================================================================================== //

app.get('/gadget', (req, res) => {
	const query = `select operator.name as 오퍼레이터, gadget.name as 가젯, operator.speed as speed, operator.attdef as attdef, img as image
		from operator
			left outer join gadgetlist on operator.id=gadgetlist.op_id 
			left outer join gadget on gadgetlist.gadget_id=gadget.id
			join optype on optype.speed=operator.speed
		where gadget.name is not null ORDER BY attdef, 오퍼레이터;`
	dbc.query(query, (err, rows) => {
		if (err) {
			res.send('{"status": "error"}')
			return console.log(err)
		}
		res.send(rows)
	})
})