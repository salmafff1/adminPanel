import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, MenuItem, Stack } from '@mui/material';
import { useForm } from 'react-hook-form';

const data = [
  {
    value: 'Admin',
    label: 'Admin',
  },
  {
    value: 'Manager',
    label: 'Manager',
  },
  {
    value: 'User',
    label: 'User',
  },
];

const Form = () => {
  const { register,handleSubmit,formState: { errors }, } = useForm();

  const onSubmit = () => {
    console.log(doneeeeeeeeeeeeeee);
    
  };

  return (
    <Box
    onSubmit={handleSubmit(onSubmit)}
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
      }}
      noValidate
      autoComplete="off"
    
    >
      <Stack sx={{ gap: 2 }} direction="row">
        <TextField sx={{ flex: 1 }} label="First Name" variant="filled" {...register('firstName')} />
        <TextField sx={{ flex: 1 }} label="Last Name" variant="filled" {...register('lastName')} />
      </Stack>

      <TextField label="Email" variant="filled" {...register('email')} />
      <TextField label="Contact Number" variant="filled" {...register('contactNumber')} />
      <TextField label="Address" variant="filled" {...register('address')} />

      <TextField
        variant="filled"
        id="outlined-select-currency"
        select
        label="Role"
        defaultValue="User"
        {...register('role')}
      >
        {data.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <Box sx={{ textAlign: 'right' }}>
        <Button type="submit" sx={{ textTransform: 'capitalize' }} variant="contained">
          Create New User
        </Button>
      </Box>
    </Box>
  );
};

export default Form;
