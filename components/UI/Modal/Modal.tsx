import {ModalProps} from "./ModalProps";
import {ModalHeader} from "@/components/UI/Modal/ModalHeader/ModalHeader";
import {ModalContent} from "@/components/UI/Modal/ModalContent/ModalContent";
import {ModalFooter} from "@/components/UI/Modal/ModalFooter/ModalFooter";

export const Modal = (props: ModalProps) => {
    return (
        <div>
            {props.header  ? <ModalHeader {...props.header} /> : null}
            <ModalContent>{props.children}</ModalContent>
            {props.footer !== undefined ? <ModalFooter {...props.footer} /> : ''}
        </div>
    )
}

