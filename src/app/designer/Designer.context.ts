import {createContext, MutableRefObject} from "react";

export interface DesignerContextProps {
    ref: MutableRefObject<HTMLElement>
}

export const DesignerContext = createContext<DesignerContextProps>({} as any);

export const DesignerContextProvider = DesignerContext.Provider;
