export enum ElementType {
    barCode = "barCode",
    plane = "plane",
    discord = "discord"
}

export interface ElementPosition {
    x: number;
    y: number;
}

export interface ElementDimension {
    height: number;
    width: number;
}

export interface SceneElement {
    id: string
    type: ElementType;
    position: ElementPosition;
    dimension: ElementDimension;
    rotation: number;
    zIndex: number;
}

export interface SceneModel {
    elements: SceneElement[];
}
