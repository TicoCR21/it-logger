import React from "react";
import Moment from "react-moment";
import PropTypes from "prop-types";

const LogItem = ( { log } ) =>
{
  return(
      <li className = "collection-item" >
        <div>
          <a href="#edit-log-modal" className = { `modal-trigger ${ log.attention ? "red-text" : "purple-text" }` }>{ log.message }</a>
          <br/>
          <span className = "grey-text">
            <span className = "black-text" > ID # { log.id } </span> last updated by { " " } <span className = "black-text">{ log.tech }</span>
            <span className = "black-text" > on { " " } <Moment parse = "YYYY-MM-DD" format = "MMMM Do, YYYY - h:mm a" > { log.date } </Moment> </span>
          </span>

          <a href = "#!" className = "secondary-content" >
            <div className="material-icons grey-text">delete</div>
          </a>
        </div>
      </li>
  )
}

LogItem.propTypes = {
  log : PropTypes.object.isRequired
}

export default LogItem;