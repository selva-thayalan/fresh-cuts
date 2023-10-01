import "../../styles/components/common/StateSwitch.scss";
import StateSwitchProps, { StateStyle } from "../../models/StateSwitchComponent";

const StateSwitch = ({options, value, style = StateStyle.radio, onChange}: StateSwitchProps) => {
    return(
        <div className="state-switch-cont">
            {options.map((opt, index) => <div 
                className={`state-item-cont clickable ${opt.value === value ? "active-state" : ""}`} 
                dangerouslySetInnerHTML = {{__html: opt.label}}
                onClick={() => onChange(opt.value, index)}></div>)}
        </div>
    )
}

export default StateSwitch;