import React, { useState, useEffect } from "react";

import Preloader from "../layouts/Preloader";
import LogItem from "./LogItem";


export default function ()
{
  const [ logs, setLogs ] = useState( [] );
  const [ loading, setLoading ] = useState( false );

  useEffect( () => { getLogs() }, [] );

  const getLogs = async () =>
  {
    setLoading( true );
    setLogs( await ( await fetch( "/logs" ) ).json() );
    setLoading( false );
  }

  if( loading )
    return <Preloader />

  return(
    <ul className = "collection with-header">
      <li className = "collection-header">
        <h4 className = "center">System Logs</h4>
      </li>
      {
        !loading && logs.length === 0 ? <p className="center">No Logs</p> : logs.map( log => <LogItem key = { log.id } log = { log } /> )
      }
    </ul>
  )
}