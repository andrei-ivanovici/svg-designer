import React from 'react';
import {WithCssClass} from "../../WithCssClass";
import style from "./ToolBxox.module.scss";
import clsx from "clsx";

const {root} = style;

export interface ToolBoxProps extends WithCssClass {

}

export function ToolBox({className}: ToolBoxProps) {
    const clazz = clsx(root, className);
    return <div className={clazz}>
        toolbox
    </div>;
}
