import FeaturedCategories from "./Components/MainSlider/FeaturedCategories/FeaturedCategories";
import MainSlider from "./Components/MainSlider/MainSlider";

const Home = () => {
  return (
    <div className="py-6">
      <div className="container">
        <MainSlider />
        <FeaturedCategories/>
      </div>
    </div>
  );
};

export default Home;
