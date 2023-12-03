import { GoChevronDown } from "react-icons/go";

type Props = {}

const HotelSearch = (props: Props) => {
	
	// const handleClick = (event: React.MouseEvent<HTMLElement>) => {
	// 	console.log(event.target);
    // console.log(event.currentTarget);
	// }
	return (<>
		<div className="border-b-[0.5px] border-solid border-gray-500 flex h-[56px] w-[170px] ">
			<input className=" pt-[4px] pb-[4px] w-[137px]"></input>
			<button onClick={event => console.log(event)} type="button" className="w-[24px] m-[5px]"><GoChevronDown /></button>

		</div>
		<p className="text-[#CAC4D0] text-[12px] ml-[16px] mt-[4px] mb-[42px]">Введіть назву</p>
	</>
  )
}

export default HotelSearch