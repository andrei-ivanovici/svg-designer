import React, {useState, forwardRef} from 'react';
import {WithCssClass} from "../../WithCssClass";
import style from "./Scene.module.scss";
import clsx from "clsx";
import {SceneModel, SceneElement, ElementType} from "./Scene.model";
import {Discord} from "../toolbox/elements/discord/Discord";
import {Plane} from "../toolbox/elements/plane/Plane";
import {BarCode} from "../toolbox/elements/bar-code/BarCode";
import {exampleScene} from "./initial.scene";

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

function logPosition(change: SceneElement) {
    console.log(change.position);
}

function useScene() {
    const [model, setModel] = useState<SceneModel>(exampleScene);
    return {
        model,
        updateElement: (element: SceneElement) => {
            const foundElement = model.elements.findIndex(e => e.id == element.id);

            if (foundElement !== -1) {
                const newElements = [...model.elements];
                newElements[foundElement] = element;
                setModel({
                    ...model,
                    elements: newElements
                });
            }
        }
    };
}

function SceneComponent({className}: WithCssClass, ref) {
    const {model, updateElement} = useScene();

    const clazz = clsx(root, className);
    return <div className={clazz} ref={ref}>
        <svg xmlns="http://www.w3.org/2000/svg" style={backgroundStyle} viewBox={"0 0 100% 100%"}>
            {model.elements.map(el => {
                const ToRender = elements[el.type];
                return <ToRender onChange={updateElement} model={el} key={el.id}/>;
            })}
        </svg>
    </div>;
}

export const Scene = forwardRef(SceneComponent);


