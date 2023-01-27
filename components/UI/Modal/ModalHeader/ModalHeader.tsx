import {ModalHeaderProps} from "@/components/UI/Modal/ModalHeader/ModalHeaderProps";
import {ButtonGroup} from "@/components/UI/ButtonGroup/ButtonGroup";

export const ModalHeader = (props: ModalHeaderProps) => {
    return <header>
        {props.icon !== undefined ? <div><img src={props.icon} alt=""/></div> : ''}
        {props.title !== undefined ? <div><h2>{props.title}</h2></div> : ''}
        {props.buttonGroup !== undefined ? <ButtonGroup {...props.buttonGroup} /> : ''}
    </header>
}