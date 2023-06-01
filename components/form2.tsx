import { FormProvider, useForm } from 'react-hook-form';
import RHFTextField from './form1';
import { Divider, Typography, Button ,Box,Grid} from '@mui/material';

const styles = {
    field: {
      width: '100%',
      rows:4,
      // Agrega aquí cualquier otro estilo personalizado que desees
    },
  };




const  MyForm=()=> {
  const methods = useForm(); // inicializa el hook useForm
  const onSubmit = (data:any) => console.log(data); // función que se ejecutará al enviar el formulario

  return (
<Box overflow="auto" margin={0} padding={0}
marginLeft={12}
>
<FormProvider {...methods}>
<form onSubmit={methods.handleSubmit(onSubmit)}>
<br/> 

<Box position="relative" display="flex" 
flexDirection="row" justifyContent="space-between"

>


<Typography sx={{ color: 'text.secondary' }}>
<br />
First Name 
</Typography>
<RHFTextField name="firstName" label="First Name" 
sx={{width: '30%'}}
/>
<br/>
<Typography sx={{ color: 'text.secondary' }}>
 <br />
 Email
</Typography>
<RHFTextField name="email" label="EMAIL"
sx={{width: '30%'}}/>
</Box>


<Typography sx={{ color: 'text.secondary' }}>
<br />
Bio
</Typography>

<Box marginBottom={3}> 
<RHFTextField name="Bio" label="BIO" 
   multiline  rows={4} sx={styles.field}
   
   />
</Box>

<Divider  />

<Box position="relative" display="flex" 
flexDirection="row" justifyContent="space-between"
marginBottom={3} marginTop={2}
>
<Typography sx={{ color: 'text.secondary' }}>
<br />
country
</Typography>
<RHFTextField name="country" label="COUNTRY" />
<Typography sx={{ color: 'text.secondary' }}>
<br />
city
</Typography>
<RHFTextField name="city" label="CITY" />
</Box>

<Typography sx={{ color: 'text.secondary' }}>

Address
</Typography>
<RHFTextField name="enter your address" label="ADDRESS"
sx={{width: '100%'}}
/>


<Box position="relative" display="flex" 
flexDirection="row" justifyContent="space-between"
marginBottom={1}  marginTop={1}> 
<Typography sx={{ color: 'text.secondary' }}>
<br/>
you may also consider to update your billing information
</Typography>
<Button variant="contained" onClick={()=>onSubmit}>
Save
 </Button>
 </Box>
</form>
</FormProvider>
</Box>
  );
}
export default MyForm;