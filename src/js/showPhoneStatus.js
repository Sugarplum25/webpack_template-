const showPhoneStatus = () => {
  const phone = document.querySelector('.header__phone-status');
  const green = '#29cc5f';
  const gray = '#b3b7c6';
  // 3 - gap between GMT and Moscow Time Zone
  const mskHours = new Date().getUTCHours() + 3;
  const minutes = new Date().getMinutes();
  const outOfWork = (mskHours < 19 && minutes <= 59);
  const workingHours = (mskHours >= 10 && outOfWork);
  if (workingHours) {
    return phone.style.background = green;
  }
  return phone.style.background = gray;
};
export default showPhoneStatus;
