import { useState } from "react";

const useNotification = (title, message) => {
  const [notification, setNotification] = useState({ title, message });

  // const setNotification = () => {
  //   const notification = document.getElementById("notification");
  //   setNotificationTitle(title);
  //   setNotificationMessage(message);
  //   notification.style.opacity = 1;

  //   setTimeout(() => {
  //     notification.style.opacity = 0;
  //   }, 5000);
  // };

  return [notification, setNotification];
};

export default useNotification;
