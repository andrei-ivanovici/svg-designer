import {SceneModel, ElementType} from "./scene/Scene.model";

export const exampleScene: SceneModel = {
    elements: [
        {
            id: "0",
            position: {
                x: 0,
                y: 0
            },
            dimension: {
                height: 100,
                width: 300,
            },
            zIndex: 0,
            rotation: 0,
            type: ElementType.discord
        },
        {
            id: "1",
            position: {
                x: 0,
                y: 100
            },
            dimension: {
                height: 100,
                width: 400,
            },
            rotation: 0,
            zIndex: 0,
            type: ElementType.barCode
        },
        {
            id: "2",
            position: {
                x: 0,
                y: 455
            },
            dimension: {
                height: 100,
                width: 100,
            },
            rotation: 0,
            zIndex: 0,
            type: ElementType.plane
        },
        {
            id: "3",
            position: {
                x: 0,
                y: 555
            },
            dimension: {
                height: 100,
                width: 100,
            },
            rotation: 0,
            zIndex: 0,
            type: ElementType.rider
        }
    ]
};

