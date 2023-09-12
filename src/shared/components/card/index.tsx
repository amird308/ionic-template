import type { JSX } from '@ionic/core/components';
import { HTMLAttributes, RefAttributes, forwardRef } from "react";
import { IonCard } from "@ionic/react";
import { IonicReactProps } from "@ionic/react/dist/types/components/IonicReactProps";
import { clsx } from 'clsx';

import "./style.css";

export type ICardProps = Omit<JSX.IonCard, "routerDirection"> & Omit<HTMLAttributes<HTMLIonCardElement>, "style"> & IonicReactProps & RefAttributes<HTMLIonCardElement> & {
        routerLink?: string | undefined;
};

export type ICardRef = HTMLIonCardElement;


const Card = forwardRef<ICardRef, ICardProps>(({className, ...props}, ref)=> {


    return <IonCard className={clsx(['m-0', 'rounded-none', className])} {...props} ref={ref}> {props.children} </IonCard>
})

export default Card;