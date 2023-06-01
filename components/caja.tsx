import  Box  from '@mui/material/Box'
import Divider from '@material-ui/core/Divider';
import Button from '@mui/material/Button';
import LaunchIcon from '@mui/icons-material/Launch';
import Typography from '@material-ui/core/Typography';
import  Container  from '@material-ui/core/Container';
import Togle from './togle';
import ToggleButton from '@mui/material/ToggleButton';
import MyForm from './form2';
import MyForm2 from './form3';
import Grid from '@material-ui/core/Grid';
import { height } from '@mui/system';
export default function Caja() {
    return (

<Box  height="auto">
<Typography variant="h4">Account settingsformlayout</Typography>
<Typography variant="body2"> <svg xmlns="http://www.w3.org/2000/svg" 
height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" 
fill="none"/><path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1
0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"/></svg> 
./src/blocks/formLayouts/Account/Account.js|ts</Typography>

 

<Box border={1} borderColor="black" borderRadius={2} p={1}
m={1} bgcolor="background.paper" position="relative"
justifyContent='center' height="auto"> 


{/*caja de botones*/}
<Box position="relative" display="flex" flexDirection="row" justifyContent="space-between">
<Box style={{ position: 'relative', top: 30, left: 1, bottom: 50, }} overflow="auto"> 
<Button variant="contained" >Get the Code -> </Button> 
</Box>
<Box style={{position: 'relative', top:30, left: 400 }}>
<Togle></Togle>
</Box>
<Box style={{ position: 'relative',top:30, right:12 }}> <ToggleButton> <LaunchIcon/></ToggleButton></Box >
</Box>

<Box style={{ position: 'relative',top:45}}>
<Divider />
</Box>

<Box position="relative" display="flex" 
flexDirection="row" justifyContent="space-between">
{/*comentario*/}
<Box marginTop={12}> 
<Typography variant="h6">Change your private information</Typography>
<Typography variant="body2">Please read our terms of use to be informed how we manage your private data.</Typography>
</Box>


{/*caja de formulario*/}
<Box display="flex" flexDirection="row" alignItems="center" justifyContent="flex-start"
marginTop={8}
>
<MyForm/>
</Box>
<Box > 
<Divider variant="middle" />
</Box>
 
</Box>


</Box>
</Box>

    );
  }







  


















 
















