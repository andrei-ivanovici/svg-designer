import {SceneModel, ElementType} from "./Scene.model";

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
                width: 100,
            },
            rotation: 0,
            type: ElementType.discord
        },
        {
            id: "1",
            position: {
                x: 0,
                y: 200
            },
            dimension: {
                height: 100,
                width: 100,
            },
            rotation: 0,
            type: ElementType.barCode
        },
        {
            id: "2",
            position: {
                x: 0,
                y: 400
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
