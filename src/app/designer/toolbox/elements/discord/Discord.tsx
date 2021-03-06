import React from 'react';
import {DraggableSvgElement} from "../../../draggable-svg-element/DraggableSvgElement";
import DiscordSvg from "../../../../assets/discord.svg";
import {ToolboxElementProps} from "../toolbox-element.props";

export function Discord(props: ToolboxElementProps) {
    return <DraggableSvgElement  {...props}
                                 render={size => <DiscordSvg {...size} preserveAspectRatio="xMinYMin meet"/>}/>;
}
