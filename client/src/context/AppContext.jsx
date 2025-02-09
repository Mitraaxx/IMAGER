
import { createContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {
    const [user, setUser] = useState(null);

    const value = { user, setUser };

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;


// YEH BASICALLY EK FILE HAI JAHAN SARA
// FUNCTIONS USESTATE SAB RAHGEA AUR ISKO YAHA SE FILES MAI
// IMPORT KARENGE