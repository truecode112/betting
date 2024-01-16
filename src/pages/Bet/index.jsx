import { useState } from "react";
import { useRouter } from "../../hooks/use-router";

const Bet = () => {
  const router = useRouter();
  const [solValue, setSolValue] = useState(4.2);
  const [walletBalance, setWalletBalance] = useState(4.67);

  const onInputSol = (e) => {
    e.preventDefault();
    setSolValue(e.target.value);
  }

  const onClickPlus = () => {
    let curValue;
    try {
      curValue = parseFloat(solValue)
      if (isNaN(curValue))
        curValue = 0
    } catch (e) {
      curValue = 0;
    }
    setSolValue(curValue + 1);
  }

  const onClickMinus = () => {
    let curValue;
    try {
      curValue = parseFloat(solValue)
      if (isNaN(curValue))
        curValue = 0
    } catch (e) {
      curValue = 0;
    }
    if (curValue == 0) {
      setSolValue(curValue);
    } else {
      setSolValue(curValue - 1);
    }
    
  }

  return (
    <div className="flex flex-col w-full h-full p-10 bg-gradient-to-bl from-[#0B021D] to-[#261A32]">
      <div className="flex justify-between">
        <div className="flex flex-row justify-center items-center cursor-pointer bg-[#383838] py-3 px-5 gap-3 rounded-[12px] border-solid border-[1px] border-[#3637AD]" onClick={() => router.push('/')}>
          <img src="/icons/arrow.svg"></img>
          <p className="text-white">Back</p>
        </div>

        <div className="flex flex-row justify-center items-center bg-[#383838] py-3 px-5 gap-3 rounded-[36px] border-solid border-[1px] border-[#3637AD]">
          <img src="/images/wait.png" style={{ width: '32px', height: '32px' }}></img>
          <p className="text-white">Last <span className="text-[#7F7DF9]">7 seconds</span> to place the bet</p>
        </div>

        <div className="flex flex-row justify-center items-center cursor-pointer bg-[#383838] py-3 px-5 gap-3 rounded-[12px] border-solid border-[1px] border-[#3637AD]">
          <img src="/icons/quit.svg"></img>
          <p className="text-white">Quit Game</p>
        </div>
      </div>
      <div className="flex flex-row mt-5">
        <div className="flex flex-col p-5 bg-gradient-to-br from-[#52545A] via-[#373C48] to-[#272E3E] rounded-[18px] h-fit">
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
              <img src="/icons/tokyo-circle.svg" style={{ width: '19px', height: '19px' }} className="mr-3"></img>
              <p className="rounded-[13px] py-1 bg-[#EB5757] bg-opacity-20 text-[#EB5757] font-bold px-2 mr-3">Tokyo</p>
              <img src="/images/cup.png" style={{ width: '18px', height: '18px' }}></img>
              <div className="flex-1" />
              <p className="text-white text-sm underline ml-3">View stats</p>
            </div>

            <div className="flex flex-row items-center">
              <p className="font-bold text-white mr-3">2</p>
              <img src="/icons/moscow-circle.svg" style={{ width: '19px', height: '19px' }} className="mr-3"></img>
              <p className="rounded-[13px] py-1 bg-[#D7D7D7] bg-opacity-20 text-[#D7D7D7] font-bold px-2 mr-3">Moscow</p>
              <div className="flex-1" />
              <p className="text-white text-sm underline ml-3">View stats</p>
            </div>

            <div className="flex flex-row items-center">
              <p className="font-bold text-white mr-3">3</p>
              <img src="/icons/cairo-circle.svg" style={{ width: '19px', height: '19px' }} className="mr-3"></img>
              <p className="rounded-[13px] py-1 bg-[#634CF2] bg-opacity-20 text-[#634CF2] font-bold px-2 mr-3">Cairo</p>
              <div className="flex-1" />
              <p className="text-white text-sm underline ml-3">View stats</p>
            </div>

            <div className="flex flex-row items-center">
              <p className="font-bold text-white mr-3">4</p>
              <img src="/icons/newyork-circle.svg" style={{ width: '19px', height: '19px' }} className="mr-3"></img>
              <p className="rounded-[13px] py-1 bg-[#F2C94C] bg-opacity-20 text-[#F2C94C] font-bold px-2 mr-3">New York</p>
              <div className="flex-1" />
              <p className="text-white text-sm underline ml-3">View stats</p>
            </div>

            <div className="flex flex-row items-center">
              <p className="font-bold text-white mr-3">5</p>
              <img src="/icons/capetown-circle.svg" style={{ width: '19px', height: '19px' }} className="mr-3"></img>
              <p className="rounded-[13px] py-1 bg-[#BF2FED] bg-opacity-20 text-[#BF2FED] font-bold px-2 mr-3">Cape Town</p>
              <div className="flex-1" />
              <p className="text-white text-sm underline ml-3">View stats</p>
            </div>

            <div className="flex flex-row items-center">
              <p className="font-bold text-white mr-3">6</p>
              <img src="/icons/riodejaneiro-circle.svg" style={{ width: '19px', height: '19px' }} className="mr-3"></img>
              <p className="rounded-[13px] py-1 bg-[#2F80ED] bg-opacity-20 text-[#2F80ED] font-bold px-2 mr-3">Rio de Janeiro</p>
              <div className="flex-1" />
              <p className="text-white text-sm underline ml-3">View stats</p>
            </div>

            <div className="flex flex-row items-center">
              <p className="font-bold text-white mr-3">7</p>
              <img src="/icons/paris-circle.svg" style={{ width: '19px', height: '19px' }} className="mr-3"></img>
              <p className="rounded-[13px] py-1 bg-[#27AE60] bg-opacity-20 text-[#27AE60] font-bold px-2 mr-3">Paris</p>
              <div className="flex-1" />
              <p className="text-white text-sm underline ml-3">View stats</p>
            </div>

            <div className="flex flex-row items-center">
              <p className="font-bold text-white mr-3">8</p>
              <img src="/icons/sydney-circle.svg" style={{ width: '19px', height: '19px' }} className="mr-3"></img>
              <p className="rounded-[13px] py-1 bg-[#AE6027] bg-opacity-20 text-[#AE6027] font-bold px-2 mr-3">Sydney</p>
              <div className="flex-1" />
              <p className="text-white text-sm underline ml-3">View stats</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col ml-5">
          <img src="/images/video.png" className="h-[528px] w-[766px]"></img>
          <div className="rounded-[12px] bg-[#7F7DF9] mt-5 px-6 py-3 flex flex-col justify-between w-[766px]">
            <div className="flex flex-row">
              <div className="flex flex-col w-1/2">
                <p className="text-white">Choose your pebble to bet</p>
                <div className="mt-2">
                  <button className="mr-2 mb-2 font-bold bg-gradient-to-b from-[#4EAF90] to-[#B2D5B2] rounded-[12px] px-2 py-1 text-white">Moscow</button>
                  <button className="mr-2 mb-2 bg-black font-bold bg-opacity-20 f rounded-[12px] px-2 py-1 text-[#3B3B3B]">New York</button>
                  <button className="mr-2 mb-2 bg-black font-bold bg-opacity-20 f rounded-[12px] px-2 py-1 text-[#3B3B3B]">Paris</button>
                  <button className="mr-2 mb-2 bg-black font-bold bg-opacity-20 f rounded-[12px] px-2 py-1 text-[#3B3B3B]">Cape Town</button>
                  <button className="mr-2 mb-2 bg-black font-bold bg-opacity-20 f rounded-[12px] px-2 py-1 text-[#3B3B3B]">Rio de Janeiro</button>
                  <button className="mr-2 mb-2 bg-black font-bold bg-opacity-20 f rounded-[12px] px-2 py-1 text-[#3B3B3B]">Sydney</button>
                  <button className="mr-2 mb-2 bg-black font-bold bg-opacity-20 f rounded-[12px] px-2 py-1 text-[#3B3B3B]">Cairo</button>
                </div>
              </div>

              <div className="w-[2px] bg-[#A2A1E5] mx-10 my-5"></div>

              <div className="flex flex-col w-1/2">
                <p className="text-white">Enter your bet</p>
                <div className="flex flex-row mt-2">
                  <div className="flex flex-row justify-center gap-2 items-center sol-input">
                    <div className="rounded-full bg-black p-1 h-fit">
                      <img src="/images/solana.png" style={{ width: '24px', height: '24px'}}></img>
                    </div>
                    <input className="py-1 px-2 text-white font-bold text-2xl bg-transparent active:bg-transparent w-16 text-center" value={solValue} onChange={onInputSol}></input>
                    <p className="font-bold text-md text-white">sol</p>
                  </div>

                  <div className="bg-white rounded-[16px] flex flex-row p-3 gap-3 ml-10">
                    <img onClick={onClickPlus} className="cursor-pointer" src="/images/ic_round-plus.png" style={{width: '24px', height: '24px'}}></img>
                    <img onClick={onClickMinus} className="cursor-pointer" src="/images/ph_minus-bold.svg" style={{width: '24px', height: '24px'}}></img>
                  </div>
                </div>

                <div className="flex flex-row mt-2 items-center">
                  <img src="/images/ion_wallet.png" style={{width: '30px', height: '30px'}}></img>
                  <div className="flex flex-col mx-2">
                    <p className="text-sm text-white">Your balance</p>
                    <p className="text-white">Wallet</p>
                  </div>

                  <div className="bg-black rounded-[16px] flex flex-row p-3 gap-1 ml-10 items-center">
                    <img src="/images/solana.png" style={{width: '36px', height: '20px'}}></img>
                    <p className="font-bold text-white">{walletBalance}</p>
                  </div>
                </div>
              </div>

            </div>
            <div className="flex justify-center items-center my-7">
              <div className="flex flex-row bg-white rounded-[12px] justify-center items-center py-3 px-7 cursor-pointer">
                <img src="/icons/check.svg" style={{ width: '22px', height: '22px' }}></img>
                <p className="text-[#7F7DF9] ml-3 font-bold">Place Bet</p>
              </div>
            </div>

            <div className="flex flex-col w-full">
              <div className="bg-[#A2A1E5] h-[1px] mx-10 mb-3"></div>
              <p className="text-[#DCDCFD] text-sm">*Lorem ipsum dolor sit amet consectetur. Purus scelerisque habitasse eu scelerisque faucibus proin odio odio. </p>
              <p className="text-[#DCDCFD] text-sm">Porttitor turpis orci consequat ipsum. Et molestie nunc odio amet nisl. Non adipiscing  consequat ipsum ipsum. </p>
              <p className="text-[#DCDCFD] text-sm">mauris iaculis euismod. Lorem ipsum dolor sit amet consectetur. *Lorem ipsum dolor sit amet sit amet consec</p>
              <p className="text-[#DCDCFD] text-sm">scelerisque habitasse eu scelerisque faucibus proin odio. Porttitor turpis orci consequat ipsum faucibus fauci</p>
              <p className="text-[#DCDCFD] text-sm">odio amet nisl. Non adipiscing fermentum arcu varius mauris iaculis euismod. Lorem ipsum dolor dolor dolor </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Bet;