import React, { Children, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';

import IBaseInputProps from '../types/base-input-props';
import Select, { ISelectProps } from '@components/select';

type ISelectFieldProps = IBaseInputProps & ISelectProps;

const SelectField: React.FC<ISelectFieldProps> = ({ name, ...rest }) => {
  const methods = useFormContext();
  const { getValues, setValue, watch, formState, clearErrors } = methods;
  const isInvalid = formState?.errors?.[name];
  useEffect(() => {
    if (getValues(name)) {
      clearErrors(name);
    }
  }, [watch(name)]);
  return (
    <Select
      // error={!!isInvalid}
      // helperText={formState.errors?.[name]?.message}
      onChange={(data) => {
        setValue(name, data);
      }}
      value={getValues(name)}
      {...rest}
    >
      {Children}
    </Select>
  );
};

export default SelectField;
