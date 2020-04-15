import React from 'react';
import {DraggableSvgElement} from "../../../draggable-svg-element/DraggableSvgElement";
import PlaneSvg from "./plane.svg";
import {ToolboxElementProps} from "../toolbox-element.props";

export function Plane(props: ToolboxElementProps) {
    return <DraggableSvgElement {...props}
                                render={size => <PlaneSvg {...size}  preserveAspectRatio="xMinYMin meet"/>}/>;
}
