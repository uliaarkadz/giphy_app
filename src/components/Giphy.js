function Gif(props) {
  console.log("adding PROPS", props.gifImage.data.images["original"].url);
  return (
    <div className="gif">
      {props.gifImage.data.images ? (
        <img src={props.gifImage.data.images["original"].url} alt="GIPHY" />
      ) : (
        <h1>Search AGAIN</h1>
      )}
    </div>
  );
}

export default Gif;
