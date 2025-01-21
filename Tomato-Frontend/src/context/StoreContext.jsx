import { createContext } from "react";
import { food_list } from "../assets/frontend_assets/assets";

export const StoreContext = createContext(null);

export const StoreContextProvider = (props) => {
    const storeContextVal = {
        food_list
    }

    return(
        <StoreContext.Provider value={storeContextVal}>
            {props.children}
        </StoreContext.Provider>
    )
}