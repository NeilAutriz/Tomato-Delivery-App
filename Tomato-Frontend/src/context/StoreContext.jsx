import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/frontend_assets/assets";

export const StoreContext = createContext(null);

export const StoreContextProvider = (props) => {
    
    const [cartContainer, setCart] = useState({});

    const addCart = (itemId) => {
        if (!(cartContainer[itemId])) {
            setCart({ ...cartContainer, [itemId]: 1 });
            // setCart((prev) => ({ ...prev, [itemId]: 1 }));
        } else {
            setCart({ ...cartContainer, [itemId]: cartContainer[itemId]+1})
            // setCart((prev) => ({ ...prev, [itemId]: prev[itemId]+1}));

        }
    }

    const removeCart = (itemId) => {
        setCart({...cartContainer, [itemId]: cartContainer[itemId]-1})
        // setCart((prev) => ({ ...prev, [itemId]: prev[itemId]-1}));

    }


    useEffect(() => {
        console.log(cartContainer);
    }, [cartContainer])

    const storeContextVal = {
        food_list, cartContainer, setCart, addCart, removeCart
    }
    
    return(
        <StoreContext.Provider value={storeContextVal}>
            {props.children}
        </StoreContext.Provider>
    )
}