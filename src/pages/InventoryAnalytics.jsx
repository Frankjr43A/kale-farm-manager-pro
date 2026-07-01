import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "recharts";

function InventoryAnalytics() {
  const inventory =
    JSON.parse(
      localStorage.getItem(
        "inventory"
      )
    ) || [];

  const categories = [
    "Fertilizer",
    "Seeds",
    "Pesticides",
    "Tools",
  ];

  const categoryData =
    categories.map(
      (category) => ({
        name: category,
        value:
          inventory.filter(
            (item) =>
              item.category ===
              category
          ).length,
      })
    );

  const lowStock =
    inventory.filter(
      (item) =>
        item.quantity <= 2
    );

  const lowStockData =
    lowStock.map((item) => ({
      name: item.name,
      quantity:
        item.quantity,
    }));

  const COLORS = [
    "#4caf50",
    "#2196f3",
    "#ff9800",
    "#9c27b0",
  ];

  return (
    <main className="dashboard">
      <div className="farm-card">
        <h2>
          📊 Inventory Analytics
        </h2>

        <p>
          Total Items:
          {" "}
          {inventory.length}
        </p>

        <p>
          Low Stock Items:
          {" "}
          {lowStock.length}
        </p>
      </div>

      <div
        className="farm-card"
        style={{
          height: 350,
          marginTop: 20,
        }}
      >
        <h3>
          📦 Inventory by Category
        </h3>

        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <PieChart>
            <Pie
              data={categoryData}
              dataKey="value"
              nameKey="name"
              outerRadius={100}
              label
            >
              {categoryData.map(
                (
                  entry,
                  index
                ) => (
                  <Cell
                    key={index}
                    fill={
                      COLORS[
                        index %
                          COLORS.length
                      ]
                    }
                  />
                )
              )}
            </Pie>

            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div
        className="farm-card"
        style={{
          height: 350,
          marginTop: 20,
        }}
      >
        <h3>
          ⚠️ Low Stock Items
        </h3>

        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <BarChart
            data={
              lowStockData
            }
          >
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis
              dataKey="name"
            />

            <YAxis />

            <Tooltip />

            <Legend />

            <Bar
              dataKey="quantity"
              fill="#f44336"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </main>
  );
}

export default InventoryAnalytics;