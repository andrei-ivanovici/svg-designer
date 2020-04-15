import React, {forwardRef} from 'react';
import {WithCssClass} from "../../WithCssClass";
import style from "./Scene.module.scss";
import clsx from "clsx";
import {SceneModel, SceneElement, ElementType} from "./Scene.model";
import {Discord} from "../toolbox/elements/discord/Discord";
import {Plane} from "../toolbox/elements/plane/Plane";
import {BarCode} from "../toolbox/elements/bar-code/BarCode";

const elements = {
    [ElementType.discord]: Discord,
    [ElementType.plane]: Plane,
    [ElementType.barCode]: BarCode
};

const {root} = style;
const backgroundStyle = {
    backgroundImage: `url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2QwZDBkMCIgb3BhY2l0eT0iMC4yIiBzdHJva2Utd2lkdGg9IjEiLz48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZDBkMGQwIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=")`,
    backgroundSize: "auto"
};

export interface SceneProps extends WithCssClass {
    value: SceneModel;
    onChange: (change: SceneModel) => void;
}

function useScene(model: SceneModel, onChange: (newModel: SceneModel) => void) {

    console.log("useScene: RENDER");
    console.log("ELEMENTS", model.elements);


    const updateElement = (changedElement: SceneElement) => {
        const newElements = [...model.elements];
        const foundElement = newElements.findIndex(e => e.id == changedElement.id);

        if (foundElement !== -1) {

            console.log("Updating array ", newElements);
            newElements[foundElement] = changedElement;
            onChange({
                elements: newElements
            });
        }
    };

    return {
        model,
        updateElement: updateElement
    };
}

function byIndex(x: SceneElement, y: SceneElement) {
    if (x.zIndex == y.zIndex) {
        return 0;
    }
    return x.zIndex > y.zIndex ? 1 : -1;
}

function SceneComponent({className, onChange, value}: SceneProps, ref) {
    const {model, updateElement} = useScene(value, onChange);

    const clazz = clsx(root, className);
    return <div className={clazz} ref={ref}>
        <svg xmlns="http://www.w3.org/2000/svg" style={backgroundStyle} preserveAspectRatio="xMinYMin meet">
            {model.elements.sort(byIndex)
                .map((el) => {
                    const ToRender = elements[el.type];
                    return <ToRender onChange={(change) => updateElement(change)} model={el} key={el.id}/>;
                })}
        </svg>
    </div>;
}

export const Scene = forwardRef(SceneComponent);


