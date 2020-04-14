import React, {useRef} from 'react';
import style from "./Designer.module.scss";
import {ToolBox} from "./toolbox/ToolBox";
import {Properties} from "./properties/Properties";
import {Scene} from "./scene/Scene";
import {StatusBar} from "./status-bar/StatusBar";
import {DesignerContextProvider} from "./Designer.context";

const {root, toolbox, properties, scene} = style;

export function Designer() {
    const sceneRef = useRef();
    return <div className={root}>
        <DesignerContextProvider value={{ref: sceneRef}}>
            <ToolBox className={toolbox}/>
            <Scene className={scene} ref={sceneRef}/>
            <Properties className={properties}/>
            <StatusBar sceneRef={sceneRef}/>
        </DesignerContextProvider>
    </div>;
}
