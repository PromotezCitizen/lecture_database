import React from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import {useState} from 'react'

const SignIn = ({handleChange}) => {
	const [id, setId] = useState("")
	const [pw, setPw] = useState("")
	
	const paperStyle={padding :20,height:'73vh',width:300, margin:"0 auto"}
	const avatarStyle={backgroundColor:'#1bbd7e'}
	const btnstyle={margin:'8px 0'}

	return(
			<Grid>
					<Paper  style={paperStyle}>
							<Grid align='center' onClick={(e) => console.log(id,pw)}>
									 <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
									<h2>Sign In</h2>
							</Grid>
							<form>
								<TextField
									label='Username'
									placeholder='Enter username'
									value={id}
									onChange={(e) => setId(e.target.value)}
									fullWidth
									required/>
								<TextField
									label='Password'
									placeholder='Enter password'
									type='password'
									value={pw}
									onChange={(e) => setPw(e.target.value)}
									fullWidth
									required/>
							</form>
							<Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
							<Typography component={'span'}> Do you have an account ?
									 <Link href="#" onClick={()=>handleChange("event",1)} >
											Sign Up 
							</Link>
							</Typography>
					</Paper>
			</Grid>
    )
}

export default SignIn