import thankYouIcon from "../assets/images/icon-thank-you.svg";
const ThankYou = () => {
  return (
    <div className="form flex flex-col items-center justify-center">
      <img src={thankYouIcon} alt="thank-you-icon" />
      <div className="text-center space-y-3">
        <h1 className="text-4xl font-bold">Thank you!</h1>
        <p className="text-cool-gray text-lg">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    </div>
  );
};

export default ThankYou;
