const generateOTPBtn = document.querySelector(".generate-otp");
const seeOtp = document.querySelector(".see-otp");

const generateOTP = () => {
  const length = 6;
  let otp = "";
  // Loop through the length of the otp and add random numbers 0 and 9 to otp string
  for (let i = 0; i < length; i++) {
    otp += Math.floor(Math.random() * 10);
  }
  seeOtp.innerText = otp;
};

generateOTPBtn.addEventListener("click", generateOTP);
