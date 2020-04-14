import React, {useRef, useState} from 'react';
import style from "./Designer.module.scss";
import {exampleScene} from "./example.scene";
import {DesignerContextProvider} from "./Designer.context";
import {ToolBox} from "./toolbox/ToolBox";
import {ModelViewer} from "./model-viewer/ModelViewer";
import {Scene} from "./scene/Scene";
import {StatusBar} from "./status-bar/StatusBar";

const {root, toolbox, properties, scene} = style;


export function Designer() {
    const [model, setModel] = useState(exampleScene);
    const sceneRef = useRef();
    return <div className={root}>
        <DesignerContextProvider value={{ref: sceneRef}}>
            <ToolBox className={toolbox}/>
            <Scene className={scene} ref={sceneRef} value={model} onChange={setModel}/>
            <div className={properties}>
                {/*<Properties/>*/}
                <ModelViewer model={model} onChange={setModel}/>
            </div>

            <StatusBar sceneRef={sceneRef}/>
        </DesignerContextProvider>
    </div>;
}
