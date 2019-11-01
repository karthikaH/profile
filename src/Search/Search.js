import React, { useState, useEffect } from "react";
import "./Search.scss";

const SearchParams = (props) => {
 const [searchValue, updateTopic] = useState("");

 useEffect(() => {
    props.updateSearchValue(searchValue);
  }, [searchValue]);

  return (
    <div>
      <form>
        <label htmlFor="searchTopics">
          <input id="topic" value={searchValue} placeholder="  Type the Topics you wish to see..." className="inputStyles" onChange={e => updateTopic(e.target.value)}/>
        </label>
      </form>
    </div>
  );
};

export default SearchParams;