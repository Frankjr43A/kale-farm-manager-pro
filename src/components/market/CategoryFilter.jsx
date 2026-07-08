/*
====================================================

Farm Manager Pro

Module : Market Module

Component : CategoryFilter

Version : 2.1.0

Developer : Francis Junior

====================================================
*/

function CategoryFilter({
  categories = [],
  value,
  onChange,
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
        🥬 Category
      </label>

      <select
        className="farm-input"
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
        }}
      >
        <option value="All">
          All Categories
        </option>

        {categories.map((category) => (
          <option
            key={category.id}
            value={category.id}
          >
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CategoryFilter;