const SingleNews = ({ item }) => (
  <div className="col s12 m6 l4">
    <div className="card medium">
      <div className="card-image waves-effect waves-block waves-light">
        <img className="activator" src={item.urlToImage} alt={item.title} />
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          {`${item.title.substring(0, 60)}...`}
          <i className="material-icons right">more_vert</i>
        </span>
        <p>
          <a href={item.url} target="_blank" rel="noreferrer">
            This is a link
          </a>
        </p>
      </div>
      <div className="card-reveal">
        <span className="card-title grey-text text-darken-4">
          {item.title}
          <i className="material-icons right">close</i>
        </span>
        <p>{item.description}</p>
      </div>
    </div>
  </div>
);

export default SingleNews;
// {item.urlToImage} alt={item.title}
