import heaederstyle from "./Heaeder.module.css";
import HeaederInput from "./HeaederInput";

const Heaeder = () => {
  return (
    <div className={heaederstyle.heaeder}>
      <h1 className={heaederstyle.h1}>A lifetime of discounts? It's Genius</h1>
      <div className={heaederstyle.heaeder_border}>
        Get rewarded for travels - unlock instant savings of 10% or more with a
        free account
      </div>
      <button className={heaederstyle.heaeder_btn}>Sign in / Register</button>
      <HeaederInput />
    </div>
  );
};
export default Heaeder;
