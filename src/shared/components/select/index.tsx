import { IonSelect, IonSelectOption } from "@ionic/react"
import { forwardRef } from "react";

export type ISelectOptionProps = typeof IonSelectOption & {
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

export type ISelectProps = typeof IonSelect & {
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