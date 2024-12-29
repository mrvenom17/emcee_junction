
import CustomImage from './ui/CustomImage';

export default function TopLogos() {
  const logos = [
    { src: '/images/logos/logo1.png', alt: "Logo 1" },
    { src: '/images/logos/logo2.png', alt: "Logo 2" },
    { src: '/images/logos/logo3.png', alt: "Logo 3" },
    { src: '/images/logos/logo4.png', alt: "Logo 4" }
  ];

  return (
    <div className="bg-black py-2">
      <div className="flex justify-center items-center space-x-12">
        {logos.map((logo, index) => (
          <div key={index} className="flex items-center">
            <CustomImage
              src={logo.src} 
              alt={logo.alt} 
              className="h-6 w-6 object-contain" 
            />
          </div>
        ))}
      </div>
    </div>
  );
}