import { useRouter } from "../../hooks/use-router";

const Bet = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col w-full h-screen p-10 bg-gradient-to-bl from-[#0B021D] to-[#261A32]">
      <div className="flex justify-between">
        <div className="flex flex-row justify-center items-center cursor-pointer bg-[#383838] py-3 px-5 gap-3 rounded-[12px] border-solid border-[1px] border-[#3637AD]" onClick={() => router.push('/')}>
          <img src="/icons/arrow.svg"></img>
          <p className="text-white">Back</p>
        </div>

        <div className="flex flex-row justify-center items-center cursor-pointer bg-[#383838] py-3 px-5 gap-3 rounded-[36px] border-solid border-[1px] border-[#3637AD]">
          <img src="/images/wait.png" style={{ width: '32px', height: '32px' }}></img>
          <p className="text-white">Last <span className="text-[#7F7DF9]">7 seconds</span> to place the bet</p>
        </div>

        <div className="flex flex-row justify-center items-center cursor-pointer bg-[#383838] py-3 px-5 gap-3 rounded-[12px] border-solid border-[1px] border-[#3637AD]">
          <img src="/icons/quit.svg"></img>
          <p className="text-white">Quit Game</p>
        </div>
      </div>
      <div className="flex flex-row mt-5">
        <div className="flex flex-col p-5 bg-gradient-to-br from-[#52545A] via-[#373C48] to-[#272E3E] rounded-[18px]">
          <div className="flex flex-row justify-between">
            <div className="flex flex-col">
              <p className="text-white text-[32px] p-0">8</p>
              <p className="text-[#F2F2F2] p-0">pabbles</p>
            </div>

            <div className="flex flex-col">
              <p className="text-[#F2F2F2]">Next</p>
              <p className="text-[#F2F2F2]">Betting in</p>
              <div className="flex flex-row">
                <img src="/icons/refresh.svg"></img>
                <p className="text-white">23:20:19</p>
              </div>
            </div>
          </div>
          <div className="mt-10 flex flex-row items-center gap-3">
            <div className="h-[1px] bg-white w-16"></div>
            <p className="text-white">Last Pabble Stat</p>
            <div className="h-[1px] bg-white w-16"></div>
          </div>

          <div className="flex flex-col mt-3 gap-3">
            <div className="flex flex-row items-center">
              <p className="font-bold text-white mr-3">1</p>
              <img src="/icons/tokyo-circle.svg" style={{width: '19px', height: '19px'}} className="mr-3"></img>
              <p className="rounded-[13px] py-1 bg-[#EB5757] bg-opacity-20 text-[#EB5757] font-bold px-2 mr-3">Tokyo</p>
              <img src="/images/cup.png" style={{width: '18px', height: '18px'}}></img>
              <div className="flex-1"/>
              <p className="text-white text-sm underline ml-3">View stats</p>
            </div>

            <div className="flex flex-row items-center">
              <p className="font-bold text-white mr-3">2</p>
              <img src="/icons/moscow-circle.svg" style={{width: '19px', height: '19px'}} className="mr-3"></img>
              <p className="rounded-[13px] py-1 bg-[#D7D7D7] bg-opacity-20 text-[#D7D7D7] font-bold px-2 mr-3">Moscow</p>
              <div className="flex-1"/>
              <p className="text-white text-sm underline ml-3">View stats</p>
            </div>

            <div className="flex flex-row items-center">
              <p className="font-bold text-white mr-3">3</p>
              <img src="/icons/cairo-circle.svg" style={{width: '19px', height: '19px'}} className="mr-3"></img>
              <p className="rounded-[13px] py-1 bg-[#634CF2] bg-opacity-20 text-[#634CF2] font-bold px-2 mr-3">Cairo</p>
              <div className="flex-1"/>
              <p className="text-white text-sm underline ml-3">View stats</p>
            </div>

            <div className="flex flex-row items-center">
              <p className="font-bold text-white mr-3">4</p>
              <img src="/icons/newyork-circle.svg" style={{width: '19px', height: '19px'}} className="mr-3"></img>
              <p className="rounded-[13px] py-1 bg-[#F2C94C] bg-opacity-20 text-[#F2C94C] font-bold px-2 mr-3">New York</p>
              <div className="flex-1"/>
              <p className="text-white text-sm underline ml-3">View stats</p>
            </div>

            <div className="flex flex-row items-center">
              <p className="font-bold text-white mr-3">5</p>
              <img src="/icons/capetown-circle.svg" style={{width: '19px', height: '19px'}} className="mr-3"></img>
              <p className="rounded-[13px] py-1 bg-[#BF2FED] bg-opacity-20 text-[#BF2FED] font-bold px-2 mr-3">Cape Town</p>
              <div className="flex-1"/>
              <p className="text-white text-sm underline ml-3">View stats</p>
            </div>

            <div className="flex flex-row items-center">
              <p className="font-bold text-white mr-3">6</p>
              <img src="/icons/riodejaneiro-circle.svg" style={{width: '19px', height: '19px'}} className="mr-3"></img>
              <p className="rounded-[13px] py-1 bg-[#2F80ED] bg-opacity-20 text-[#2F80ED] font-bold px-2 mr-3">Rio de Janeiro</p>
              <div className="flex-1"/>
              <p className="text-white text-sm underline ml-3">View stats</p>
            </div>

            <div className="flex flex-row items-center">
              <p className="font-bold text-white mr-3">7</p>
              <img src="/icons/paris-circle.svg" style={{width: '19px', height: '19px'}} className="mr-3"></img>
              <p className="rounded-[13px] py-1 bg-[#27AE60] bg-opacity-20 text-[#27AE60] font-bold px-2 mr-3">Paris</p>
              <div className="flex-1"/>
              <p className="text-white text-sm underline ml-3">View stats</p>
            </div>

            <div className="flex flex-row items-center">
              <p className="font-bold text-white mr-3">8</p>
              <img src="/icons/sydney-circle.svg" style={{width: '19px', height: '19px'}} className="mr-3"></img>
              <p className="rounded-[13px] py-1 bg-[#AE6027] bg-opacity-20 text-[#AE6027] font-bold px-2 mr-3">Sydney</p>
              <div className="flex-1"/>
              <p className="text-white text-sm underline ml-3">View stats</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bet;