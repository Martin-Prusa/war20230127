import {ModalFooterProps} from "@/components/UI/Modal/ModalFooter/ModalFooterProps";
import {ButtonGroup} from "@/components/UI/ButtonGroup/ButtonGroup";

export const ModalFooter = (props: ModalFooterProps) => {
    return <footer>
        <small>{props.description}</small>
        <ButtonGroup {...props.buttonGroup} />
    </footer>
}