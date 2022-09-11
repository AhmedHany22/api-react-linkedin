const SingleSideNews = ({ item }) => (
  <div>
    <div className="divider"></div>
    <a href={item.url} target="_blank" rel="noreferrer">
      <div className="section">
        <h5>{`${item.title.substring(0, 30)}...`}</h5>
        <p>{item.content}</p>
      </div>
    </a>
  </div>
);

export default SingleSideNews;
