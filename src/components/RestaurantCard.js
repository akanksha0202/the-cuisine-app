const RestaurantCard = (props) => {
  console.log(props);
  const { resData } = props;

  const styleCard = {
    backgroundColor: '#f0f0f0',
  };
  return (
    //  {/* Way 1 to write inline styling  */}
    <div className="res-card" style={styleCard}>
      {/* Way 2 to write inline styling */}
      {/* <div className="res-container" style={{backgroundColor: "#f0f0f0"}}> */}
      <img
        className="res-image"
        width="100%"
        height="180px"
        src={resData?.src}
        alt="Food Banner"
      />
      <h3>{resData.resName}</h3>
      <h4>{resData.cuisine.join(', ')}</h4>
      <h4>{resData.rating}</h4>
      <h4>{resData.deliveryTime}</h4>
    </div>
  );
};
export default RestaurantCard;
