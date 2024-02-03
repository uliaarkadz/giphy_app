function SearchButton(props) {
  const handleSubmit = () => {
    props.gifSerach();
  };
  return (
    <div className="search">
      <button onClick={handleSubmit}>Search GIPHY</button>
    </div>
  );
}

export default SearchButton;
