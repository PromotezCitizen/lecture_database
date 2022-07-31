import { useState, useCallback } from 'react';

import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';

import axios from 'axios';

const theme = createTheme();

const AddWeapon = () => {
	const [name, setName] = useState("");
	const [damage, setDamage] = useState("");
	const [armo, setArmo] = useState("");
	const [spm, setSpm] = useState("");
	const [type, setType] = useState("");
	const [ismain, setIsmain] = useState("");
	
	const guntype = [
		{code: "hg", name: "권총"},
		{code: "ar", name: "소총"},
		{code: "sg", name: "샷건"},
		{code: "lmg", name: "LMG"},
		{code: "smg", name: "기관단총/권총"},
		{code: "shield", name: "방패"}
	]
	
	const gunmain = [
		{code: 1, name: "주무기"},
		{code: 0, name: "보조무기"}
	]
	
	const [, updateState] = useState()
	const forceUpdate = useCallback( () => updateState([]), [])
	
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
		
		setName("")
		setDamage("")
		setArmo("")
		setSpm("")
		setType("")
		setIsmain("")
		
		forceUpdate()
  };
	
  return (
		<ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            총기 추가
          </Typography>
					<React.Fragment>
						<Grid container spacing={3}>
							<Grid item xs={12}>
								<TextField
									required
									id="name"
									label="weapon name"
									fullWidth
									variant="standard"
									value={name}
									onChange={(e) => setName(e.target.value)}
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									required
									id="damage"
									label="damage"
									fullWidth
									variant="standard"
									value={damage}
									onChange={(e) => setDamage(e.target.value)}
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									required
									id="armo"
									label="armo"
									fullWidth
									variant="standard"
									value={armo}
									onChange={(e) => setArmo(e.target.value)}
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									id="spm"
									label="spm"
									fullWidth
									variant="standard"
									value={spm}
									onChange={(e) => setSpm(e.target.value)}
								/>
							</Grid>
							<Grid item xs={12}>
								<InputLabel id="typeLabel">gun type</InputLabel>
								<Select sx={{minWidth:200}}
									displayEmpty
									labelId="typeLabel"
									id="type"
									label="type"
									value={type}
									onChange={(e) => setType(e.target.value)}
								>
									{guntype.map( ({code, name}, idx) => <MenuItem key={idx} value={code}>
															 {name}
														 </MenuItem>)}
								</Select>
							</Grid>
							<Grid item xs={12}>
								<InputLabel id="ismainLabel">Is Main?</InputLabel>
								<Select sx={{minWidth:200}}
									displayEmpty
									labelId="ismainLabel"
									id="ismain"
									label="ismain"
									value={ismain}
									onChange={(e) => setIsmain(e.target.value)}
								>
									{gunmain.map( ({code, name}, idx) => <MenuItem key={idx} value={code}>
															 {name}
														 </MenuItem>)}
								</Select>
							</Grid>
						</Grid>
					</React.Fragment>
          <React.Fragment>
						<Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
							<Button
								variant="submit"
								onClick={submitHandler}
								sx={{ mt: 3, ml: 1, border: "1px solid black"}}
							>
							  제출
							</Button>
						</Box>
          </React.Fragment>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}

export default AddWeapon;