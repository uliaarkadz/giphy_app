function Gif(props) {
  return (
    <div className="gif">
      {props.gifImage.url ? (
        <img src={props.gifImage.url} alt="GIPHY" />
      ) : (
        <h1>Search AGAIN</h1>
      )}
    </div>
  );
}

export default Gif;
