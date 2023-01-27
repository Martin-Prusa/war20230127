import {ButtonGroupProps} from "@/components/UI/ButtonGroup/ButtonGroupProps";
import {Button} from "@/components/UI/Button/Button";

export const ButtonGroup = (props: ButtonGroupProps) => {
    return <div>
        {props.buttons.map(btn => <Button key={`btn-${btn.title}`} {...btn} />)}
    </div>
}