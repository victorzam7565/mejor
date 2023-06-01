import { FormProvider, useForm } from 'react-hook-form';
import RHFTextField from './form1';
import TextField from '@mui/material/TextField'
import { Typography ,Box} from '@mui/material';

const styles = {
    field: {
      width: '70%',
     height : '200vh',
      rows:4,
// Agrega aquí cualquier otro estilo personalizado 
    },
  };

const  MyForm2=()=> {
  const methods = useForm(); // inicializa el hook 
useForm
  const onSubmit = (data:any) => console.log(data);  
//función que se ejecutará al enviar el formulario

  return (

<Box display="flex" 
      flexDirection="column" 
      alignItems="center" 
      justifyContent="center" 
      > 
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <br/>   

<Typography sx={{ color: 'text.secondary' }}>
<br />
Country
</Typography>


<RHFTextField name="country" label="Counrty" sx={styles.field}/>
<br/>

<Typography sx={{ color: 'text.secondary' }}>
 <br />
 City
</Typography>
<RHFTextField name="city" label="CITY" sx={styles.field}/>


<Typography sx={{ color: 'text.secondary' }}>
<br />
Enter your address
</Typography>


<RHFTextField name="address" label="ADDRESS" 
   multiline   sx={styles.field}/>

<Typography sx={{ color: 'text.secondary' }}>
You may also consider to update your billing information.
</Typography>
</form>
</FormProvider>
</Box>
  );
}
export default MyForm2;































