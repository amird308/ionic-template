import React, { useEffect, useImperativeHandle, useRef } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  DeepPartial,
  FormProvider as FormProviderRh,
  SubmitHandler,
  useForm,
} from 'react-hook-form';

export interface IFormProviderProps<T = any> {
  defaultValues: DeepPartial<T>;
  onSubmit: SubmitHandler<T>;
  schema?: any;
  className?: string;
  children: any;
  submitPass?: (submitFn: any) => any;
}

export interface IFormMethods {
  reset: () => void;
}

// eslint-disable-next-line react/display-name
const FormProvider = React.forwardRef<IFormMethods, IFormProviderProps>((props, ref) => {
  const methods = useForm({
    defaultValues: props!.defaultValues,
    resolver: props!.schema ? yupResolver(props!.schema) : undefined,
  });
  const refSubmitButton = useRef<HTMLButtonElement>(null);
  const submit = () => {
    refSubmitButton.current?.click();
  };
  useEffect(() => {
    if (refSubmitButton?.current) {
      props!.submitPass?.(submit);
    }
  }, [refSubmitButton?.current]);
  useImperativeHandle(ref, () => ({
    reset() {
      methods.reset();
    },
  }));

  return (
    <FormProviderRh {...methods}>
      <form
        className={props!.className}
        onSubmit={methods.handleSubmit((data) => props!.onSubmit(data))}
      >
        {props!.children}
        <button hidden={true} ref={refSubmitButton} type={'submit'} />
      </form>
    </FormProviderRh>
  );
});

export default FormProvider;
