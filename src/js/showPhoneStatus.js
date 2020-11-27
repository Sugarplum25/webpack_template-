const showPhoneStatus = () => {
  const phone = document.querySelector('.header__phone-status');
  // 3 - gap between GMT and Moscow Time Zone
  const mskTime = new Date().getUTCHours() + 3;
  const differenceInTime = (mskTime >= 10 && mskTime < 19);
  if (differenceInTime) {
    phone.style.background = '#808080';
  }
  phone.style.background = '#29cc5f';
};
export default showPhoneStatus;
