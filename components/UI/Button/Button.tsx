import {ButtonProps} from "@/components/UI/Button/ButtonProps";

export const Button = (props: ButtonProps) => {
    return (
        <button {...props}>{props.title}</button>
    )
}