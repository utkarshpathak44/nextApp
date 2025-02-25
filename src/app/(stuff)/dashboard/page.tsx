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
            <div
              className="w-full h-44 p-2 bg-[#000000
] rounded-md"
            >
              <Chart />
            </div>
            {/*  */}
          </div>
          <div className="w-full h-full flex flex-col gap-2  bg-black rounded-md p-2">
            <div className="flex flex-row gap-2">
              <div
                className="rounded-md bg-[#0A0A0A
] w-44 h-44 text-stone-600 p-2 flex flex-col gap-2 u"
              >
                <div className="text-sm">Your current ATS score</div>
                <div className="text-9xl text-white font-bold">79</div>
              </div>
              <div
                className="rounded-md bg-[#0A0A0A
] w-44 h-44 text-stone-600 p-2 flex flex-col gap-2"
              >
                <div className="text-sm">Possible ATS score</div>
                <div className="text-9xl text-white font-bold">86</div>
              </div>
              <div
                className="rounded-md bg-[#0A0A0A
] w-full h-44 text-stone-600 p-2 flex flex-col gap-2"
              >
                <div className="text-sm">Click more to get detailed stats</div>
                <div className="text-9xl text-white font-bold cursor-pointer hover:text-red-700">
                  MORE
                </div>
              </div>
            </div>
            <div className="flex flex-row h-full">
              <div
                className="w-full h-full flex bg-[#0A0A0A
]  rounded-md items-center justify-center"
              >
                <RadarChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default growthChart;
