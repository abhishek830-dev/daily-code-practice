import { useSearchParams } from "react-router-dom";

const ColorPicker = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const color = searchParams.get("color") || "black";
  const bgColor = searchParams.get("bgColor") || "black";

  const updateParam = (key, value) => {
    const params = Object.fromEntries(searchParams.entries());

    setSearchParams({
      ...params,
      [key]: value,
    });
  };

  return (
    <div
      style={{
        backgroundColor: bgColor,
        color,
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <div className="form-element">
        <input
          type="search"
          placeholder="search here"
          value={query}
          onChange={(e) => updateParam("q", e.target.value)}
        />

        <div
          style={{
            display: "flex",
            gap: "20px",
            margin: "20px 0",
          }}
        >
          {/* Text Color */}
          <div>
            <label>Text Color:</label>
            <br />
            <select
              value={color}
              onChange={(e) => updateParam("color", e.target.value)}
            >
              <option value="black">Black</option>
              <option value="red">Red</option>
              <option value="blue">Blue</option>
              <option value="green">Green</option>
              <option value="purple">Purple</option>
            </select>
          </div>

          {/* Background Color */}
          <div>
            <label>Background Color:</label>
            <br />
            <select
              value={bgColor}
              onChange={(e) => updateParam("bgColor", e.target.value)}
            >
              <option value="white">White</option>
              <option value="lightgray">Light Gray</option>
              <option value="yellow">Yellow</option>
              <option value="lightblue">Light Blue</option>
              <option value="lightgreen">Light Green</option>
            </select>

          </div>
        </div>
            <section>
              <h1>Showing Results for: {query}</h1>
            </section>

            <p>
              Current URL params:
              <br />
              ?q={query}&color={color}&bgColor={bgColor}
            </p>
      </div>
    </div>
  );
};
export default ColorPicker;