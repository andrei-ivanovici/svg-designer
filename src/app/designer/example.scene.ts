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
                height: 300,
                width: 300,
            },
            rotation: 0,
            type: ElementType.barCode
        },
        {
            id: "2",
            position: {
                x: 0,
                y: 355
            },
            dimension: {
                height: 100,
                width: 100,
            },
            rotation: 0,
            type: ElementType.plane
        }
    ]
};
