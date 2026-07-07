/*
====================================================

Farm Manager Pro

Module : Market Module

Component : CountyFilter

Version : 2.1.0

Developer : Francis Junior

====================================================
*/

function CountyFilter({
  counties = [],
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
        🌍 County
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
          All Counties
        </option>

        {counties.map((county) => (
          <option
            key={county}
            value={county}
          >
            {county}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CountyFilter;