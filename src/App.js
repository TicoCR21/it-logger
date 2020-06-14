import React, { Fragment, useEffect } from 'react';

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

import SearchBar from "./components/layouts/SearchBar";
import Logs from "./components/logs/Logs";
import AddBtn from "./components/layouts/AddBtn";
import AddLogModal from "./components/logs/AddLogModal";

const App = () => 
{
  useEffect( () => M.AutoInit() , [] );
  return (
    <Fragment>
      <SearchBar />
      <div className = "container" style = { { marginTop : "70px" } } >
        <AddBtn />
        <AddLogModal />
        <Logs />
      </div>
    </Fragment>
  );
}

export default App;