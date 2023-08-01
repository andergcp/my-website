import { useState } from "react";
import { Backdrop, Text } from "@prismane/core";

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
    setIsHidden(prev => !prev);
  };
  const onBackdropClickHandler = () => {
    setIsHidden(true);
  }
  return (
    <div className="flex font-medium pb-2 hover:text-lg">
      <div className="flex flex-col flex-grow basis-0">
        <h3 className="text-md">
          {title}
        </h3>
        <span>{company} {startDate}-{endDate}</span>
        <p className={isHidden ? "hidden": ""}>{description}</p>
      </div>
      <div className="flex my-auto text-lg px-5 hover:animate-spin animate-once" onClick={onClickHandler}>
        <img src="circle-plus.svg" alt="plus" />
      </div>
      {!isHidden && (
        <Backdrop onClick={onBackdropClickHandler}>
          <Text>This is the backdrop! Click on the backdrop to close it!</Text>
        </Backdrop>
      )}
    </div>
  );
};

export default ExperienceCard;
