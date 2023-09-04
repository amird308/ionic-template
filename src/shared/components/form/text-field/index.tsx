import React, { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';

import IBaseInputProps from '../types/base-input-props';
import Input, { IInputProps } from '@components/input';

type ITextFieldProps = IBaseInputProps & IInputProps;

const TextField: React.FC<ITextFieldProps> = ({ name, ...rest }) => {
  const methods = useFormContext();
  const { getValues, setValue, watch, formState, clearErrors } = methods;
  const isInvalid = formState?.errors?.[name];
  useEffect(() => {
    if (getValues(name)) {
      clearErrors(name);
    }
  }, [watch(name)]);
  return (
    <Input
      // error={!!isInvalid}
      // helperText={formState.errors?.[name]?.message}
      onIonInput={(data) => {
        setValue(name, data.target.value);
      }}
      value={getValues(name)}
      {...rest}
    />
  );
};

export default TextField;
