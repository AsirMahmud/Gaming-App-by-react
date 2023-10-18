import useData from "./useData";

interface Platform {
  name: string;
  id: number;
  slug: string;
}

const usePlatForm = () => useData<Platform>("/platforms/lists/parents");

export default usePlatForm;
