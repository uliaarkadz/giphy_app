function SearchButton(props) {
  const handleSubmit = () => {
    props.gifSearch();
  };
  return (
    <div className="search">
      <button onClick={handleSubmit}>Search GIPHY</button>
    </div>
  );
}

export default SearchButton;
