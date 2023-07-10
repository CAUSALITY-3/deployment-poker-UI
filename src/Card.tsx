import React, { useEffect, useState } from 'react'
import { isTemplateExpression } from 'typescript'
import "./Card.scss"

const Card = (props:any) => {
    // props={item, showCard}

    useEffect(
		() => {
    // console.log(props.showCard)
        },[])
  return (
    <div className={`${props.showCard ? 'card-show' : "card-not-show"} card-container`}>
        {props.showCard &&
        <>
            <p className='card-name'>{props.item.name}</p>
            {!props.userMode &&
            <p className='card-value'>{props.item.value}</p>
            }
        </>
        }
    </div>
    // <div>hello</div>
  )
}

export default Card