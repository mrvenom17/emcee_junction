export default function TopLogos() {
  const logos = [
    { photo: '/images/logos/logo2.png'}, // Replace with your photo paths
    { photo: '/images/logos/logo3.jpg'},
    { photo: '/images/logos/logo4.jpg'},
    { photo: '/images/logos/logo5.jpg'}
  ];

  return (
    <div className="bg-black py-2">
      <div className="flex justify-center items-center space-x-7">
        {logos.map(({ photo}, index) => (
          <div key={index} className="flex items-center">
            <img src={photo} className="h-10 w-10 object-cover" />  {/* Use img tag for photos */}
          </div>
        ))}
      </div>
    </div>
  );
}