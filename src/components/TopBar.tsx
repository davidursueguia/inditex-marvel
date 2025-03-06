import logo from "../assets/marvel.svg";
const TopBar = () => {
  return (
    <div className={"bg-black h-[84px] w-full pt-[16px] pr-[48px] pb-[16px] pl-[48px] flex"}>
      <img src={logo} alt="Logo" className="w-[130px] h-[52px]" />
      <h1>TopBar</h1>
    </div>
  );
}

export default TopBar;
