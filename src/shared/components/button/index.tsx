

import type { JSX } from '@ionic/core/components';
import { HTMLAttributes, RefAttributes, forwardRef } from "react";
import { IonButton, RouterDirection, RouterOptions, AnimationBuilder } from "@ionic/react";
import { IonicReactProps } from "@ionic/react/dist/types/components/IonicReactProps";

import "./style.css";

export type IButtonProps = Omit<JSX.IonButton, "routerDirection"> & Omit<HTMLAttributes<HTMLIonButtonElement>, "style"> & IonicReactProps & RefAttributes<HTMLIonButtonElement> & {
        routerLink?: string | undefined;
        routerDirection?: RouterDirection | undefined;
        routerOptions?: RouterOptions | undefined;
        routerAnimation?: AnimationBuilder | undefined;
};

export type IButtonRef = HTMLIonButtonElement;

const Button = forwardRef<IButtonRef, IButtonProps>((props, ref)=> {
    return <IonButton {...props} ref={ref}> {props.children} </IonButton>
})

export default Button;