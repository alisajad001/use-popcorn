import { useEffect, useRef } from 'react';

function Search({ query, setQuery }) {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();

    document.addEventListener('keydown', (e) => {
      if (e.code === 'Enter') {
        setQuery('');
        inputRef.current.focus();
      }
    });
  }, []);

  return (
    <input
      ref={inputRef}
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}

export default Search;
