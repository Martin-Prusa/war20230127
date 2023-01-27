import {ModalHeaderProps} from "@/components/UI/Modal/ModalHeader/ModalHeaderProps";
import {ButtonGroup} from "@/components/UI/ButtonGroup/ButtonGroup";

export const ModalHeader = (props: ModalHeaderProps) => {
    return <header>
        <div><img src={props.icon} alt=""/></div>
        <div><h2>{props.title}</h2></div>
        <ButtonGroup {...props.buttonGroup} />
    </header>
}