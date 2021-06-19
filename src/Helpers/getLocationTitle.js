export default (pathname) => {
  switch (pathname) {
    case "/videos":
      return `Air Benders  Videos`;
    case "/announcements":
      return `Air Benders Announcements`;
    case "/contactus":
      return `Air Benders Contact us`;
    default:
      break;
  }
};
