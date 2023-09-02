import { IonInput } from "@ionic/react"
import { forwardRef } from "react";

export type IInputProps = typeof IonInput;

export type IInputRef = HTMLIonInputElement;

const Input = forwardRef<IInputRef, IInputProps>((props, ref)=> {
return <IonInput {...props} ref={ref} />
})

export default Input;