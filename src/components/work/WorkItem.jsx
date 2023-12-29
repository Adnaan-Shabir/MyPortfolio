/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const WorkItem = ({item}) => {
  return (
    <div className="work__card" key={item.id}>
        <img src={item.image} alt="img" className='work__img' />
        <h3 className="work__title">{item.title}</h3>
        <a href="https://github.com/Adnaan-Shabir" target='__blank' className="work__button">
            Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </a>
    </div>
        )
}

export default WorkItem