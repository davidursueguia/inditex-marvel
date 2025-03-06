import logo from "../assets/marvel.svg";
import heart from "../assets/heart_selected.svg";
const TopBar = () => {
  return (
    <div className={"grid grid-cols-[1fr_auto_auto] items-center justify-between bg-black h-[84px] w-full pt-[16px] pr-[48px] pb-[16px] pl-[48px]"}>
      <img src={logo} alt="Logo" className="w-[130px] h-[52px]" />
      <img src={heart} alt={'favourites'}/>
      <p className={"text-white ml-2 mr-4"}>{3}</p>
    </div>
  );
}

export default TopBar;
