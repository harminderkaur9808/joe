const FaqBanner: React.FC = () => {
  return (
    <div className="banner relative">
      <img src="/images/FAQImages/Rectangle96.png" alt="Banner" className="w-full h-72 object-cover" />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-black">
        <h1 className="text-4xl font-bold text-white">Frequently Asked Questions</h1>
        <p className="mt-2 text-white">In this FAQ section you can find all the information about our services</p>
      </div>
    </div>
  );
};

export default FaqBanner;
