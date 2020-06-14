import React from "react";

export default () => 
{
  return(
    <nav>
      <div className="nav-wrapper deep-purple darken-4">
        <form>
          <div className="input-field">
          <input id="search" type="search" required />
            <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
            <i className="material-icons">close</i>
          </div>
        </form>
      </div>
    </nav>
  );
}