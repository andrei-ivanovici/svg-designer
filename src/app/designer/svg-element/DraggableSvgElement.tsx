import React, {useState, useEffect, useContext, useRef, ReactNode,} from "react";
import {fromEvent} from "rxjs";
import {switchMap, map, takeUntil, filter, tap, withLatestFrom} from "rxjs/operators";
import {DesignerContext} from "../Designer.context";
import {ToolboxElementProps} from "../toolbox/elements/toolbox-element.props";
import {SceneElement} from "../scene/Scene.model";

export interface DraggableSvgElementProps extends ToolboxElementProps {
    render: (size: { height: number, width: number }) => ReactNode
}

function useDnd3(gRef: React.MutableRefObject<HTMLElement>, model: SceneElement, onChange: (change: SceneElement) => void) {
    const ctx = useContext(DesignerContext);
    const elementRef = ctx.ref;
    const [x, setX] = useState(model.position.x);
    const [y, setY] = useState(model.position.y);
    const [lastPos, setLastPos] = useState(model.position);

    useEffect(() => {
        setX(model.position.x);
        setY(model.position.y);
        setLastPos(model.position);

    }, [model]);

    useEffect(() => {
        console.log("hook call");
        const target: HTMLElement = gRef.current;
        const parent: HTMLElement = ctx.ref.current;
        if (!target || !parent) {
            return;
        }

        const rect = parent.getBoundingClientRect();

        const mouseMove = fromEvent(window, "mousemove");
        const mouseUp = fromEvent(window, "mouseup").pipe(tap(it => console.log("up")));
        const mouseDown = fromEvent(target, "mousedown").pipe(tap(it => console.log("down")))
            .pipe(filter((m: MouseEvent) => m.button == 0));

        const dragAndDrop = mouseDown.pipe(
            switchMap((mouse) => {
                const targetRect = target.getBoundingClientRect();
                const initialElementPosition = {
                    left: targetRect.left,
                    top: targetRect.top
                };
                const initialMousePosition = {
                    x: mouse.clientX,
                    y: mouse.clientY
                };
                return mouseMove.pipe(
                    map((mouse: MouseEvent) => {
                        return {
                            deltaMouse: {
                                x: mouse.clientX - initialMousePosition.x,
                                y: mouse.clientY - initialMousePosition.y
                            },
                            elementPosition: initialElementPosition
                        };
                    }),
                    takeUntil(mouseUp),
                );
            }),
            map(({deltaMouse, elementPosition}) =>
                ({
                    x: lastPos.x + deltaMouse.x,
                    y: lastPos.y + deltaMouse.y
                })));


        const updateSub = mouseUp.pipe(withLatestFrom(dragAndDrop))
            .subscribe(([, pos]) => {
                console.log("update last pos!");
                setLastPos({x: pos.x, y: pos.y});
                const rect = target.getBoundingClientRect();
                const sceneRect = parent.getBoundingClientRect();
                onChange({
                    ...model,
                    position: {
                        x: rect.left - sceneRect.left,
                        y: rect.top - sceneRect.top
                    }
                });
            });

        const dndSub = dragAndDrop
            .subscribe(pos => {
                setX(pos.x);
                setY(pos.y);
            });

        return () => {
            console.log("destroyed");
            updateSub.unsubscribe();
            dndSub.unsubscribe();
        };


    }, [lastPos, model]);


    return {
        x,
        y,
        elementRef
    };
}

export function DraggableSvgElement({render, onChange, model}: DraggableSvgElementProps) {
    const gRef = useRef();
    const {x, y} = useDnd3(gRef, model, onChange);

    return <g ref={gRef} transform={`translate(${x}, ${y})`}>
        {render({height: 100, width: 100})}
    </g>;

}

