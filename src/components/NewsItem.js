import React, { useEffect } from 'react'


const NewsItem = (props) => {
  return (
    <div className="card">
        <img src={!props.imgurl? 'https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png' : props.imgurl} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
            <a href={props.url} target="_blank" className="btn btn-primary btn-sm">Read More</a>
        </div>
    </div>
  )
}

export default NewsItem