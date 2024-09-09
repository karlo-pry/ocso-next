import { TOKEN_NAME } from "@/constants";
import axios from "axios";
import { cookies } from "next/headers";
import SelectLocations from "./_components/SelectLocations";
import DataLocation from "./_components/DataLocation";
const CountPage = async ({searchParams} : {searchParams : any}) => {
  const userCookies = cookies();
  const token = userCookies.get(TOKEN_NAME)?.value;
  const { data } = await axios.get("http://127.0.0.1:4000/locations", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return (
    <div className="w-8/12 flex flex-col justify-center items-center h-[90vh]">
      <SelectLocations stores={data} defaultSelected={[searchParams.store]} />
      <DataLocation store={searchParams.store} />
    </div>
  );
};

export default CountPage;
