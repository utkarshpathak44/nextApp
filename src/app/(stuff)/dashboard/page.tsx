import Chart from "./chart";
import RadarChart from "./radar";

const growthChart = () => {
  return (
    <div className="py-5 h-full">
      <div className="h-full flex flex-row gap-4">
        <div className="h-full bg-black rounded-md text-black w-full">
          {" "}
          this is the display portion
        </div>
        <div className="flex flex-col h-full w-full gap-4">
          <div className="w-full h-60 bg-black rounded-md p-4 flex flex-row gap-4">
            <div className="w-full h-44 p-2 bg-[#000000] rounded-md">
              <Chart />
            </div>
            {/* <div className="w-60 h-44 flex bg-[#000000]  rounded-md">
                <RadarChart/>
            </div> */}
          </div>
          <div className="w-full h-full bg-black rounded-md">smdslmfs</div>
        </div>
      </div>
    </div>
  );
};

export default growthChart;
