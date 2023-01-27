import {ModalHeaderProps} from "@/components/UI/Modal/ModalHeader/ModalHeaderProps";
import {ModalFooterProps} from "@/components/UI/Modal/ModalFooter/ModalFooterProps";
import {ReactNode} from "react";

export interface ModalProps {
    header?: ModalHeaderProps
    children: ReactNode
    footer?: ModalFooterProps
}