import React from 'react';
import {WithCssClass} from "../../WithCssClass";
import style from "./Properties.module.scss";
import clsx from "clsx";

const {root} = style;

export function Properties({className}: WithCssClass) {
    const clazz = clsx(root, className);
    return <div className={clazz}>
        Properties
    </div>;
}
