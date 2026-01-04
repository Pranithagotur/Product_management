import { useEffect, useState } from "react";

function SearchBar({ setSearch }) {
  const [value, setValue] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearch(value);
    }, 500);

    return () => clearTimeout(timer);
  }, [value]);

  return (
    <input
      type="text"
      placeholder="Search product..."
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}

export default SearchBar;
