import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

import SignIn from './signin.js'
import SignUp from './signup.js' 

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`
  };
}

const SignInOutContainer = ( {setName, setPrig} ) => {
  const [value, setValue] = React.useState(0);
	const [user, setUser] = React.useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
					<Tabs value={value} onChange={handleChange} centered>
						<Tab label="Sign In" />
						<Tab label="Sign Up" />
					</Tabs>
        </Box>
        <TabPanel value={value} index={0}>
					<SignIn setName={setName} setPrig={setPrig}/>
				</TabPanel>
        <TabPanel value={value} index={1}>
					<SignUp />
				</TabPanel>
    </Box>
  );
}

export default SignInOutContainer;