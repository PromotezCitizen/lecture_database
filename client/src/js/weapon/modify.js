import { React, useState, useEffect, useCallback } from 'react';
import axios from 'axios';

import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const EXPRESS_URL = 'https://term-express.run.goorm.io'

const theme = createTheme();

const ModifyWeapon = () => {	
	const [, updateState] = useState()
	const forceUpdate = useCallback( () => updateState([]), [])
	
	const [b_name, setB_name] = useState("");
	const [name, setName] = useState("");
	const [damage, setDamage] = useState("");
	const [armo, setArmo] = useState("");
	const [spm, setSpm] = useState("");
	const [type, setType] = useState("");
	const [ismain, setIsmain] = useState("");
	const [ischanged, setIschanged] = useState(false);

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
	
	const dataGetHandler = async(name) => {
		try {
      const res = await axios.get(EXPRESS_URL + '/get_weapon/' + name)
			setTable(res.data[0])
    } catch (err) {
      console.log(err)
    }
	}
	
	const weaponlistHandler = (e) => {
		setB_name(e.target.value)
		dataGetHandler(e.target.value)
		setIschanged(true)
	}
	
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
		if (!ischanged) return;
    e.preventDefault();
		
    const body = {
			name: name,
			damage: Number(damage),
			armo: Number(armo),
			spm: Number(spm),
			type: type,
			ismain: Number(ismain)
		}
		
		axios
      .put(EXPRESS_URL + "/modify_weapon/"+name, body)
      .then((res) => console.log(res));
  };
	
	const removeHandler = async(e) => {
    e.preventDefault();
		const DELETE_URL = EXPRESS_URL + "/remove_weapon/" + name
    const body = {
			name: name
		}
		
		const r = await axios
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
		handleClose()
		
		forceUpdate()
	};
	
	const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
		if (!ischanged) return;
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
								onChange={weaponlistHandler}
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
									required
									fullWidth
									name="name"
									id="name"
									label="Name"
									value={name}
									onChange={(e) => setName(e.target.value)}
									inputProps={
										{ /*readOnly: true,*/ }
									}
							/>
							</Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
									type="number"
                  name="damage"
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
									type="number"
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
									type="number"
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
									inputProps={
										{ /*readOnly: true,*/ }
									}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
									type="number"
                  id="ismain"
                  label="ismain"
                  name="ismain"
									value={ismain}
									onChange={(e) => setIsmain(e.target.value)}
                />
              </Grid>
							<Grid item xs={12} sm={6}>
								<Button
									fullWidth
									variant="contained"
									sx={{ mt: 3, mb: 2 }}
									sm={6}
									onClick={submitHandler}
								>
									제출
								</Button>
							</Grid>
							<Grid item xs={12} sm={6}>
								<Button
									fullWidth
									variant="contained"
									sx={{ mt: 3, mb: 2 }}
									onClick={handleClickOpen}
								>
									제거
								</Button>
							</Grid>
						</Grid>
          </Box>
        </Box>
      </Container>
			
			<div>
				<Dialog
					open={open}
					onClose={handleClose}
					aria-labelledby="alert-dialog-title"
					aria-describedby="alert-dialog-description"
				>
					<DialogTitle id="alert-dialog-title">
						총기 삭제 확인
					</DialogTitle>
					<DialogContent>
						<DialogContentText id="alert-dialog-description">
							정말로 {name} 총기를 삭제하시겠습니까?
						</DialogContentText>
					</DialogContent>
					<DialogActions>
						<Button onClick={handleClose} autoFocus>아니오</Button>
						<Button onClick={removeHandler} >예</Button>
					</DialogActions>
				</Dialog>
			</div>
    </ThemeProvider>
  );
}

export default ModifyWeapon

	// const integHandler = (e) => {
	// 	switch (e.target.name){
	// 		case weapondatas[0]:
	// 			setName(e.target.value)
	// 			break;
	// 		case weapondatas[1]:
	// 			setDamage(e.target.value)
	// 			break;
	// 		case weapondatas[2]:
	// 			setArmo(e.target.value)
	// 			break;
	// 		case weapondatas[3]:
	// 			setSpm(e.target.value)
	// 			break;
	// 		case weapondatas[4]:
	// 			setType(e.target.value)
	// 			break;
	// 		case weapondatas[5]:
	// 			setIsmain(e.target.value)
	// 			break;
	// 	}
	// }