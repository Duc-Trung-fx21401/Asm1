import searchItem from "./SearchItem.module.css";

const SearchItem = (props) => {
  return (
    <div className={searchItem.containers}>
      <img src={props.image_url} className={searchItem.img} />
      <div className={searchItem.items}>
        <div className={searchItem.display}>
          <h2 className={searchItem.name}>{props.name}</h2>
          <div>{props.rate_text}</div>
          <div className={searchItem.rate}>{props.rate}</div>
        </div>
        <div className={searchItem.display_formation}>
          <div className={searchItem.item}>
            <div>{props.distance} from center</div>
            <div className={searchItem.tag}>{props.tag}</div>
            <div className={searchItem.description}>{props.description}</div>
            <div>{props.type}</div>
            <div className={searchItem.free_cancel}>
              {props.free_cancel ? (
                <div className={searchItem.bolean}>
                  <b>Free cancellation</b>
                  <div>
                    You can cancel later, so lock in this grat price today!
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className={searchItem.display_price}>
            <div className={searchItem.price}>${props.price}</div>
            <div className={searchItem.includes}>Includes taxes and fees</div>
            <button className={searchItem.bnt}>See availability</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SearchItem;
