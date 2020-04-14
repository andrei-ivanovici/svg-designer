import React from 'react';
import {DraggableSvgElement} from "../../../draggable-svg-element/DraggableSvgElement";
import {ToolboxElementProps} from "../toolbox-element.props";
import BarCodeSvg from "./bar-code.svg";

export function BarCode(props: ToolboxElementProps) {
    return <DraggableSvgElement {...props} render={size => <BarCodeSvg {...size}/>}/>;
}
