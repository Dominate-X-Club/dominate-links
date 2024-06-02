import React from "react";
import { CardBody, CardContainer, CardItem } from "./card";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
}) => {
  return (
    <CardContainer containerClassName="w-64 h-70 flex items-center p-2 sm:p-5">
      <CardItem
        translateX={20}
        translateY={20}
        rotateX={5}
        rotateY={5}
        translateZ={30}
      >
        <CardBody className="p-2 rounded-xl shadow-md sm:p-10 flex items-center bg-purple-50">
          <div className="flex items-start">
            <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-500/80 mr-4">
              {icon}
            </div>
            <div>
              <h2 className="text-base font-bold text-2xl text-gray-900">
                {title}
              </h2>
              <p className="text-gray-600 text-xl">{description}</p>
            </div>
          </div>
        </CardBody>
      </CardItem>
    </CardContainer>
  );
};

export default FeatureCard;
