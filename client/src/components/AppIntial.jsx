import React from 'react'
import {useState} from 'react'
import data from "../components/Data.json";
import Jobs from "../components/JobsBoard";
import Header from "../components/HeaderBoard";
import Search from "../components/SearchBoard"; 

const AppIntial = () => {
    const [filterKeywords, setfilterKeywords] = useState([]);

  // const setSearchKeyword = (data) => {
  //   setfilterKeywords(data);
  // };

  const addFilterKeywords = (data) => {
    if (!filterKeywords.includes(data)) {
      setfilterKeywords([...filterKeywords, data]);
    }
  };

  const deleteKeyword = (data) => {
    const newKeywords = filterKeywords.filter((key) => key !== data);
    setfilterKeywords(newKeywords);
  };

  const clearAll = () => {
    setfilterKeywords([]);
  };
  
  return (
    <div>
      <div>
    <div className="header"></div>

    {/* <Search setSearchKeyword={setSearchKeyword} /> */}

    {filterKeywords.length > 0 && (
      <Header
        keywords={filterKeywords}
        removeKeywords={deleteKeyword}
        clearAll={clearAll}
      />
    )}

    <Jobs
      keywords={filterKeywords}
      data={data}
      setKeywords={addFilterKeywords}
    />
  </div>
    </div>
  )
}

export default AppIntial
