import React from "react";

const NewsItem = (props)=> {
    let { title, description, imageUrl, newsUrl, author, time, name } = props;
    return (
      <>
        <div className="card my-4">
          <img
            src={imageUrl}
            className="card-img-top"
            alt="..."
            style={{ height: "12rem" }}
          />
          <div className="card-body">
            <span
              className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
              style={{ zIndex: "1", left: "92%" }}
            >
              {name}
              <span className="visually-hidden">unread messages</span>
            </span>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-body-secondary">
                By '{author}' On '{new Date(time).toGMTString()}'
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </>
    );
}

export default NewsItem;
