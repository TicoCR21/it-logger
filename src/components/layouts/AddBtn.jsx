import React from 'react'

export default () => 
{
  return (
    <div className = "fixed-action-btn">
      <a href="#add-log-modal" className="btn-floating btn-large deep-purple darken-4 modal-trigger">
        <i className="large material-icons">add</i>
      </a>
      <ul>
        <li>
          <a href="#tech-list-modal" className="btn-floating purple lighten-1 modal-trigger">
            <i className = "material-icons">person</i>
          </a>
        </li>

        <li>
          <a href="#tech-modal" className="btn-floating deep-purple lighten-1 modal-trigger">
            <i className = "material-icons">person_add</i>
          </a>
        </li>
      </ul>
    </div>
  )
}
