import React from 'react'

export const createLinks = (e) => {
  return (
    e.map((el, i) => el === 'Личные данные' ?
      <li className="active" key={i}><a className="nav-item" href="#">{el}</a></li> :
      <li key={i}><a className="nav-item" href="#">{el}</a></li>)
  )
}