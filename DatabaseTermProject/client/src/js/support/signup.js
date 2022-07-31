import { React, useState } from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@mui/material'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';
import axios from 'axios';

const EXPRESS_URL = 'https://term-express.run.goorm.io'

const SignUp = (props) => {
		const [id, setId] = useState("")
		const [pw, setPw] = useState("")
		const [_pw, set_Pw] = useState("")
		const [nickname, setNickname] = useState("")
		
    const hasError = (target, len) =>
        target.length < len ? true : false;
	
    const hasNotSameError = passwordEntered =>
				pw != _pw ? true : false;

    const onSubmitHandler = (event) => {
			event.preventDefault(); // 아무 동작 안하고 버튼만 눌러도 리프레쉬 되는 것을 막는다

			if(pw !== _pw){
					return alert('비밀번호와 비밀번호 확인은 같아야 합니다.')
			}

			const body = {
				password: pw,
				id: id,
				nickname: nickname
			}

			console.log(body)
			
			axios
				.post(EXPRESS_URL + "/user/signup", body)
				.then((res) => console.log(res));
    }
		
    const paperStyle = { padding: 20, width: 300, margin: "0 auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const marginTop = { marginTop: 5 }
    return (
        <Grid>
            <Paper style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <AddCircleOutlineOutlinedIcon />
                    </Avatar>
										<h2 style={headerStyle}>Sign Up</h2>
                    <Typography component={'span'} variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                </Grid>
                <form>
                  <Grid item xs={12}>
										<TextField
											fullWidth
											label='Id'
											value={id}
											onChange={ e => setId(e.target.value) }
											placeholder="Enter your ID"
										/>
                  </Grid>
									<Grid item xs={12}>
										<TextField 
											fullWidth 
											label='Nickname' 
											value={nickname} 
											onChange={ e => setNickname(e.target.value) }
											error={hasError(nickname, 1)}
											placeholder="Nickname(1글자 이상 필수)"
										/>
                  </Grid>
									<Grid item xs={12}>
										<TextField 
											fullWidth 
											label='Password' 
											value={pw} 
											onChange={ e => setPw(e.target.value) } 
											error={hasError(pw, 5)}
											placeholder="Enter your password(5글자 이상 필수)"
											type="password"
										/>
                  </Grid>
									<Grid item xs={12}>
										<TextField 
											fullWidth 
											label='Confirm Password' 
											value={_pw} 
											onChange={ e => set_Pw(e.target.value) } 
											error={hasNotSameError('confirmPassword')}
											placeholder="Confirm your password"
											type="password"
											helperText={hasNotSameError('confirmPassword') ? "입력한 비밀번호와 일치하지 않습니다." : null}
										/>
                  </Grid>
									<Grid item xs={12}>
										<Button
											fullWidth
											onClick={onSubmitHandler}
											variant='contained'
											color='primary'
										>
											Sign up
										</Button>
									</Grid>
									
                </form>
            </Paper>
        </Grid>
    )
}

export default SignUp;

//  type='submit'