import citystyle from "./CityList.module.css";
import CityItems from "./CityItems";

const CityList = () => {
  const CityData = [
    {
      name: "Dublin",
      subText: "123 properties",
      image: "./images/city_1.webp",
    },
    {
      name: "Reno",
      subText: "533 properties",
      image: "./images/city_2.webp",
    },
    {
      name: "Austin",
      subText: "532 properties",
      image: "./images/city_3.webp",
    },
  ];
  return (
    <div className={citystyle.display}>
      {CityData.map((CityData, index) => {
        return (
          <CityItems
            key={index}
            name={CityData.name}
            subText={CityData.subText}
            image={CityData.image}
          />
        );
      })}
    </div>
  );
};
export default CityList;
