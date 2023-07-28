import { useState } from "react";

// This is a react component that will be used to display a card with information about a specific experience
interface ExperienceCardProps {
  title: string;
  description: string;
  company: string;
  startDate: string;
  endDate: string;
}

const ExperienceCard = (props: ExperienceCardProps) => {
  const { title, description, company, startDate, endDate } = props;
  const [isHidden, setIsHidden] = useState(true);
  const onClickHandler = () => {
    console.log("clicked");
    // setIsHidden(prev => !prev);
  };
  return (
    <div className="flex mt-10 mb-5 font-medium">
      <div className="flex flex-col flex-grow basis-0">
        <span className="text-xl">
          {title}
        </span>
        <div className="flex">
          <span className="flex-grow flex-basis-0">{company} {startDate}-{endDate}</span>
        </div>
        <p className={isHidden ? "hidden": ""}>{description}</p>
      </div>
      <div className="flex my-auto text-lg px-5" onClick={onClickHandler}>
        <img src="circle-plus.svg" alt="plus" />
      </div>
    </div>
  );
};

export default ExperienceCard;
