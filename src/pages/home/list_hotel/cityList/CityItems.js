import citystyle from "./CityItems.module.css";

const CityItems = (props) => {
  return (
    <div className={citystyle.itmes}>
      <img src={props.image} className={citystyle.image}></img>
      <div className={citystyle.absolute}>
        <h1 className={citystyle.name}>{props.name}</h1>
        <p className={citystyle.p}>{props.subText}</p>
      </div>
    </div>
  );
};

export default CityItems;
