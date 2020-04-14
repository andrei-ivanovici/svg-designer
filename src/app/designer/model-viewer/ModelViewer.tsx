import React from 'react';
import {SceneModel} from "../scene/Scene.model";
import ReactJson from "react-json-view";
import style from "./ModelViewer.module.scss";

const {root} = style;

export interface ModelViewerProps {
    model: SceneModel
    onChange: (change: SceneModel) => void
}

export function ModelViewer({model, onChange}: ModelViewerProps) {
    return <div className={root}>
        <h3>Model Viewer</h3>
        <div>
            <ReactJson src={model} onEdit={x => {
                onChange(x.updated_src as any);
            }}/>
        </div>
    </div>;
}
