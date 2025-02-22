import Slider from "react-slick";

const carouselItems = [
    {
      image: '',
      title: 'Summer Collection',
      subtitle: 'Up to 50% off on selected items',
    },
    {
      image: 'https://via.placeholder.com/1200x500',
      title: 'New Arrivals',
      subtitle: 'Check out our latest products',
    },
    {
      image: 'https://via.placeholder.com/1200x500',
      title: 'Best Deals',
      subtitle: 'Grab amazing offers now',
    },
  ];

const Carousel = () => {
    const sliderSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
    };
  
    return (
      <Slider {...sliderSettings}>
        {carouselItems.map((item, index) => (
          <div key={index} className="relative h-[500px]">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-center">
              <div className="text-white">
                <h2 className="text-5xl font-display font-bold mb-4">
                  {item.title}
                </h2>
                <p className="text-xl">{item.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    );
  };
  
  export default Carousel;