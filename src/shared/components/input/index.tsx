import { IonInput } from "@ionic/react";
import type { JSX } from '@ionic/core/components';
import { HTMLAttributes, RefAttributes, forwardRef } from "react";
import { StyleReactProps } from "@ionic/react/dist/types/components/react-component-lib/interfaces";

export type IInputProps = JSX.IonInput & Omit<HTMLAttributes<HTMLIonInputElement>, "style"> & StyleReactProps & RefAttributes<HTMLIonInputElement>;

export type IInputRef = HTMLIonInputElement;

const Input = forwardRef<IInputRef, IInputProps>((props, ref)=> {
return <IonInput {...props} ref={ref} />
})

export default Input;