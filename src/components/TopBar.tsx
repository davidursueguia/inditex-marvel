import logo from "../assets/marvel.svg";
import heart from "../assets/heart_selected.svg";
import { useNavigate } from "react-router-dom";
const TopBar = () => {
  const navigate = useNavigate();
  return (
    <div className={"grid grid-cols-[1fr_auto_auto] items-center justify-between bg-black h-21 w-full pt-4 pr-12 pb-4 pl-12"}>
      <img src={logo} alt="Logo" className="w-32 h-13 hover:cursor-pointer" onClick={() => {
        navigate('/');
      }} />
      <img className={'hover:cursor-pointer'} onClick={() => {
        navigate('/favorites');
      }} src={heart} alt={'favourites'}/>
      <p className={"text-white ml-2 mr-4"}>{3}</p>
    </div>
  );
}

export default TopBar;
