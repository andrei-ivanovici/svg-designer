import React, {useState, useEffect, MutableRefObject} from 'react';
import {fromEvent} from "rxjs";
import classes from "./StatusBar.module.scss";

export interface StatusBarProps {
    sceneRef: MutableRefObject<HTMLElement>
}

const {
    root,
    "mouse-position": mousePosition
} = classes;

function useStatistics(sceneRef: MutableRefObject<HTMLElement>) {
    const [statistics, setStatistics] = useState({x: 0, y: 0});
    useEffect(() => {
        const element = sceneRef.current;
        const rect = element.getBoundingClientRect();
        const sub = fromEvent(window, "mousemove")
            .subscribe((mouse: MouseEvent) => {
                setStatistics({
                    x: mouse.clientX - rect.left,
                    y: mouse.clientY - rect.top
                });
            });

        return () => {
            sub.unsubscribe();
        };

    }, []);

    return {statistics};
}

export function StatusBar({sceneRef}: StatusBarProps) {
    const {statistics: {x, y}} = useStatistics(sceneRef);
    return <div className={root}>
        <div className={mousePosition}>
            mouse at {x} , {y}
        </div>
    </div>;
}
