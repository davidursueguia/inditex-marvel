import heart_unselected from "../assets/heart_unselected.svg";
import heart_selected from "../assets/heart_selected.svg";

const HeartIcon = ({ filled }: { filled?: boolean }) => {
  return (filled ? <img className={"h-[10px] w-[12px]"} src={heart_selected} alt={"liked"}/> : <img className={"h-[10px] w-[12px]"} src={heart_unselected} alt={'unliked'}/>)
};

export default HeartIcon;
