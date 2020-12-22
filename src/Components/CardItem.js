import React from 'react'

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <a className='cards__item__link' href={props.path} target="_blank" rel="noreferrer">
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='My Project'
              src={props.src}
              style={{ backgroundColor: props.color }}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
            {props.githubLink &&
              <div className="cards__item__git"> <a href={props.githubLink} target="_blank" rel="noreferrer">  <i className='fab fa-github' />inspect my code</a> </div>}
          </div>
        </a>
      </li>
    </>
  );
}

export default CardItem
