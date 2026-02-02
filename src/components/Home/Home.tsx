import FeaturedCategories from "./Components/MainSlider/FeaturedCategories/FeaturedCategories";
import MainSlider from "./Components/MainSlider/MainSlider";
import Offers from "./Components/MainSlider/Offers/Offers";

const Home = () => {
  return (
    <div className="py-6">
      <div className="container">
        <MainSlider />
        <FeaturedCategories />
        <Offers />
      </div>
    </div>
  );
};

export default Home;
