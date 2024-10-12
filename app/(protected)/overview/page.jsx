import ElectionTile from "@/components/electionTile";
import { elections } from "@/data";

const Overview = () => {
  return (
    <div className="w-full min-h-screen mx-auto rounded-xl">
      <div>
        <h1 className="py-10 text-2xl font-extrabold text-center">Elections</h1>
      </div>
      <div className="w-1/2 mx-auto rounded-xl bg-base-100">
        <ElectionTile elections={elections} />
      </div>
    </div>
  );
};

export default Overview;
