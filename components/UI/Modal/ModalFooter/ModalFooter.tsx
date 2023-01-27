import {ModalFooterProps} from "@/components/UI/Modal/ModalFooter/ModalFooterProps";
import {ButtonGroup} from "@/components/UI/ButtonGroup/ButtonGroup";

export const ModalFooter = (props: ModalFooterProps) => {
    return <footer>
        {props.description !== undefined ? <small>{props.description}</small> : ''}
        {props.buttonGroup !== undefined ? <ButtonGroup {...props.buttonGroup} /> : ''}
    </footer>
}