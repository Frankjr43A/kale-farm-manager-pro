/*
====================================================

Farm Manager Pro

Module : Market Module

Component : SortFilter

Version : 2.1.0

Developer : Francis Junior

====================================================
*/

function SortFilter({
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
        📊 Sort By
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
        <option value="crop">
          Crop Name
        </option>

        <option value="county">
          County
        </option>

        <option value="price">
          Price
        </option>

        <option value="category">
          Category
        </option>
      </select>
    </div>
  );
}

export default SortFilter;