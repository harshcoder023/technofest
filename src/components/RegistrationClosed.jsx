import React from "react";

const RegistrationClosed = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="w-full h-screen flex justify-center mt-[7vh] px-6">
      <h1 className="text-black mt-8 lg:mt-16 text-lg">
        Oops! 🙊 The registration game is over for our college fest! 🎉 But hey,
        keep an eye out for future adventures! 🚀
      </h1>
    </div>
  );
};

export default RegistrationClosed;
