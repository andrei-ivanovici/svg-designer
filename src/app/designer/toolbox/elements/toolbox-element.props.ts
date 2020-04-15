import {SceneElement} from "../../scene/Scene.model";

export interface ToolboxElementProps {
    model: SceneElement,
    onChange: (newModel: SceneElement) => void
}
