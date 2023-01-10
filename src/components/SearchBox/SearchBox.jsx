export const SearchBox = ({ onSubmit }) => {
  return (
    <form className="searchBox" onSubmit={e => onSubmit(e)}>
      <input
        type="text"
        name="name"
      />
      <button type="submit">Search</button>
    </form>
  );
};  