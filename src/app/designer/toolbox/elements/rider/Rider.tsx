import {ToolboxElementProps} from "../toolbox-element.props";
import {DraggableSvgElement} from "../../../draggable-svg-element/DraggableSvgElement";
import RiderSvg from "./rider.svg";
import React from "react";

export function Rider(props: ToolboxElementProps) {
    return <DraggableSvgElement {...props}
                                render={size => <RiderSvg {...size} preserveAspectRatio="xMinYMin meet"/>}/>;
}
