import { useSearchParams } from "react-router-dom";

const SearchParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q");
  const color = searchParams.get("color") || "black";
  const bgColor = searchParams.get("bgColor") || "white";

  console.log("Query: ", searchParams.get("q"));
  return (
    <div>
      <div className="form-Element">
        <input
          type="search"
          placeholder="search here"
          value={query || ""}
          onChange={(e) => setSearchParams({ q: e.target.value })}
        />
      </div>
      <section>
        <h1>Showing Results for: {"query"}</h1>
      </section>
    </div>
  );
};
export default SearchParams;