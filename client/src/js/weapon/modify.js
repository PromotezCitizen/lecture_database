import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const EXPRESS_URL = 'https://term-express.run.goorm.io'

const theme = createTheme();

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
	const [ischanged, setIschanged] = useState(0);
	
	
	const dataGetHandler = async(name) => {
		try {
      const res = await axios.get(EXPRESS_URL + '/get_weapon/' + name)
			setTable(res.data[0])
    } catch (err) {
      console.log(err)
    }
	}
	
	const handler = (e) => {
		setB_name(e.target.value)
		dataGetHandler(e.target.value)
		setIschanged(1)
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
			ismain: Number(ismain),
		}
		
		const path = "https://term-express.run.goorm.io/modify_weapon/"+name
		
		axios
      .put("https://term-express.run.goorm.io/modify_weapon/"+name, body)
      .then((res) => console.log(res));
  };
	
	const removeHandler = async(e) => {
    e.preventDefault();
		const DELETE_URL = "https://term-express.run.goorm.io/remove_weapon/" + name
    const body = {
			name: name
		}
		
		const res = await axios
									.delete(DELETE_URL, body)
									.then((res) => console.log(res))
		
		setName("")
		setDamage("")
		setArmo("")
		setSpm("")
		setType("")
		setIsmain("")
		setB_name("")
		
		getWeaponList()
		
		forceUpdate()
	}
	
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
					<Box sx={{ minWidth: 120 }}>
						<FormControl fullWidth>
							<InputLabel id="demo-simple-select-label">총기</InputLabel>
							<Select
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								value={b_name}
								label="총기"
								onChange={handler}
								sx={{minWidth: 200}}
							>
							{ weaponList.map( (g, i) =>   /* list의 map 함수를 이용하여 table의 내용을 구성 */ 
									<MenuItem key={i} value={g.name}>{g.name}</MenuItem>
							) }
							</Select>
						</FormControl>
					</Box>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
							<Grid item xs={12}>
								<TextField
									name="name"
									required
									fullWidth
									id="name"
									label="Name"
									value={name}
									onChange={(e) => setName(e.target.value)}
							/>
							</Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="damage"
                  required
                  fullWidth
                  id="damage"
                  label="damage"
									value={damage}
									onChange={(e) => setDamage(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="armo"
                  label="armo"
                  name="armo"
									value={armo}
									onChange={(e) => setArmo(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="spm"
                  label="spm"
                  name="spm"
									value={spm}
									onChange={(e) => setSpm(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="type"
                  label="type"
                  name="type"
									value={type}
									onChange={(e) => setType(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="ismain"
                  label="ismain"
                  name="ismain"
									value={ismain}
									onChange={(e) => setIsmain(e.target.value)}
                />
              </Grid>
							<Grid item xs={12} sm={6}>
								<Button
									onClick={submitHandler}
									fullWidth
									variant="contained"
									sx={{ mt: 3, mb: 2 }}
									sm={6}
								>
									제출
								</Button>
							</Grid>
							<Grid item xs={12} sm={6}>
								<Button
									onClick={removeHandler}
									fullWidth
									variant="contained"
									sx={{ mt: 3, mb: 2 }}
								>
									제거
								</Button>
							</Grid>			
						</Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

// type="submit"
export default ModifyWeapon