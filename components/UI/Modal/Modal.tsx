import {ModalProps} from "@/components/UI/Modal/ModalProps";
import {ModalHeader} from "@/components/UI/Modal/ModalHeader/ModalHeader";
import {ModalContent} from "@/components/UI/Modal/ModalContent/ModalContent";
import {ModalFooter} from "@/components/UI/Modal/ModalFooter/ModalFooter";

export const Modal = (props: ModalProps) => {
    return (
        <div>
            <ModalHeader {...props.header} />
            <ModalContent>{props.children}</ModalContent>
            <ModalFooter {...props.footer} />
        </div>
    )
}