import useFetch from "@/hooks/useFetch";
import { REPO_URL } from "@/utils/constant";
export default function Repository() {
  const { status, data, error } = useFetch({
    url: REPO_URL + "/TanStack/query/contributors",
  
    // url: "https://cataas.com/cat/says/hello%20world!",
  });

  const renderData = () => {
    return status === "fetching"
      ? "Loading.."
      : status === "error"
      ? "Error "
      : status === "success"
      ? "Success"
      : null;
  };

  return <div>{renderData()}</div>;
}
