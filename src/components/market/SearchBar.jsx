/*
====================================================

Farm Manager Pro

Module : Market Module

Component : SearchBar

Version : 2.1.0

Developer : Francis Junior

====================================================
*/

function SearchBar({
  value,
  onChange,
  placeholder = "Search..."
}) {
  return (
    <div
      className="farm-card"
      style={{
        marginBottom: "20px",
      }}
    >
      <label
        style={{
          display: "block",
          marginBottom: "8px",
          fontWeight: "bold",
        }}
      >
        🔍 Search
      </label>

      <input
        type="text"
        className="farm-input"
        placeholder={placeholder}
        value={value}
        onChange={(e) =>
          onChange(e.target.value)
        }
        style={{
          width: "100%",
          padding: "12px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          fontSize: "16px",
          boxSizing: "border-box",
        }}
      />
    </div>
  );
}

export default SearchBar;