import { FC } from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { TextField, TextFieldProps } from '@mui/material';

type Props = TextFieldProps & {
  name: string;
};

const RHFTextField: FC<Props> = ({ name, ...props }) => {
const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
        sx={{ width: '30%' ,}} 
          {...field}
          {...props}
          
          value={typeof field.value === 'number' && field.value === 0 ? '' : field.value}
          error={!!error}
          helperText={error?.message}
        />
      )}
    />
  );
};

export default RHFTextField;


























