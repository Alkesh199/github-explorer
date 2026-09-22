import { createContext,useState } from "react";

export const AppContext = createContext();

const AppProvider = ({children}) =>{
    const [filteredProfilesText,setFilteredProfilesText] = useState("");
    console.log("after setting context filetered profile text is",filteredProfilesText);
    return(
        <AppContext.Provider value = {{filteredProfilesText,setFilteredProfilesText}}>
          {children}
        </AppContext.Provider>
    )
}

export default AppProvider;