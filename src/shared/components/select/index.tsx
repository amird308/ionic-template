import { HTMLAttributes, RefAttributes, forwardRef } from "react";
import type { JSX } from '@ionic/core/components';
import { IonSelect, IonSelectOption } from "@ionic/react";
import { StyleReactProps } from "@ionic/react/dist/types/components/react-component-lib/interfaces";

export type ISelectOptionProps = JSX.IonSelectOption & Omit<HTMLAttributes<HTMLIonSelectOptionElement>, "style"> & StyleReactProps & RefAttributes<HTMLIonSelectOptionElement> & {
    children: any
};

export type IISelectOptionRef = HTMLIonSelectElement;

export const SelectOption = forwardRef<IISelectOptionRef, ISelectOptionProps>(({ children, ...props}, ref)=> {
    return  (
        <IonSelectOption {...props}>
            {children}
        </IonSelectOption>
        )
});

export type ISelectProps = JSX.IonSelect & Omit<HTMLAttributes<HTMLIonSelectElement>, "style"> & StyleReactProps & RefAttributes<HTMLIonSelectElement> & {
    children: any
};

export type ISelectRef = HTMLIonSelectElement;

const Select = forwardRef<ISelectRef, ISelectProps>(({ children, ...props}, ref)=> {
return  (
    <IonSelect {...props}>
        {children}
    </IonSelect>
    )
})

export default Select;