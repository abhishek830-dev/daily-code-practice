import { useSearchParams } from "react-router-dom";

const DynamicQueryParams = () => {
  const [searchParams] = useSearchParams();
  const queryParams = Object.fromEntries(searchParams.entries());

  console.log(queryParams);
  return (
    <div>
      <h1>Welcome to DynamicQueryParams</h1>
    </div>
  );
};
export default DynamicQueryParams;
