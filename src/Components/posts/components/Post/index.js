import React from 'react';

import "../Post/style.css";

export default function post(props){
  return (
      <div className='post'>
          <div className="user">
          <div className='userInfo'>
              <div className='photoUser'>
                  <img src={props.photo} alt="Users avatar" className="photoUser__item"/>
              </div>
              <div className='userDate'>
                  <div className="userName">
                  <span>{props.name}</span>
                  <i className="fas fa-check-circle"></i>
                  <div className="userNick"> 
                  <span>{props.nickname}</span>·<span className='datePost'>{props.date}</span>
                  </div>
                  </div>
              <div className='content'>
                  {props.content}
              </div>
              </div>
          </div>
              <button className='hidePost'></button>
              </div>
          
          <div className='imagePost'>
              <img src={props.image} alt="Posts item" className="imagePost__item"/>
          
          <div className="imageFooter">
              <div className="btn-postFooter comments">
                  <button className="btn-comments btn-post__likeItems">
                  <i className="far fa-comment fa-2x"></i>
                  </button>
                  {props.comments}
              </div>
              <div className="btn-postFooter comments">
                  <button className="btn-share btn-post__likeItems">
                  <i className="fas fa-retweet fa-2x"></i>
                  </button>
                  {props.share}
              </div>
              <div className="btn-postFooter comments">
                  <button className="btn-like btn-post__likeItems">
                  <i className="far fa-heart fa-2x"></i>
                  </button>
                  {props.like}
              </div>
              <div className="btn-postFooter comments">
                  <button className="btn-download btn-post__likeItems">
                  <i className="fas fa-download fa-2x"></i>
                  </button>
              </div>

          </div>
          </div>
      </div>
  )

}


/* export default function Post(props){
    return (
      <div  className="post-data">
      <div className="row">
            <div className="col-2">
                <div className="avatar">
                  <img src={props.authorData.photo} alt="user photo"/>  
                </div>
            </div>
            <div className="col-10">
              <div className="post-info">
                    <p className="header-post-info">
                      <b className="name">{props.authorData.name}</b>
                      <span className="icon">FiCheckSquare</span>
                      <span className="nickname">{props.authorData.nickname}</span>
                      <span className="date">{props.date}</span>
                    </p>
                    <p className="text-content">{props.content}</p>
                  <span className="check-down">IoIosArrowDown</span>
              </div>
            </div>
            <div className="col-10 offset-2">
              <div className="post-content">
                  <img src={props.image} alt="content photo"/>
              </div>
              <div className="post-footer">
                      <a href="#"><span className="icon">FiMessageSquare</span>482</a>
                      <a href="#"><span className="icon">FiShare2</span>146</a>
                      <a href="#"><span className="icon">AiFillLike</span>887</a>
                      <a href="#"><span className="icon">FiDownload</span></a>
              </div> 
            </div>
          </div>
          </div>
    );
} */