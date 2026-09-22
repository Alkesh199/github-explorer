import { useState } from "react";
import { AppContext } from "../context/Context";
import { useContext } from "react";

import "../styles/searchBar.css";

const SearchBar = () => {
    const {filteredProfilesText,setFilteredProfilesText} = useContext(AppContext);
    const [searchText,setSearchText] = useState(filteredProfilesText);
    

    const handleSearchText = (e) =>{
       setSearchText(e.target.value);
    }

    const handleSearchBtnClick = ()=>{
        if(searchText.length===0){
            setFilteredProfilesText("");
            alert("can't search with empty name");
        }
        else{
            setFilteredProfilesText(searchText);
        }
        
    }

    const clearBtnClick = () =>{
        console.log("clear btn clicked");
        setFilteredProfilesText("");
        setSearchText("");
    }
    console.log(searchText);

  return (
    <div className="searchbar-container">
      <input value = {searchText} onChange={handleSearchText} placeholder="search profiles globally"></input>
      <button className="btn btn-search" onClick={handleSearchBtnClick}>Search</button>
      <button className="btn clear-btn" onClick={clearBtnClick}>Reset</button>
    </div>
  );
};

export default SearchBar;
