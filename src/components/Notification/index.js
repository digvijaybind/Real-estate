import { Button, Divider, notification, Space } from "antd";
import React, { useEffect } from "react";


const Notification = ({ onClose, message, show, type }) => {
  const [api, contextHolder] = notification.useNotification();

  useEffect(() => {
    if (show) {
      openNotification("topRight");
    }
  }, [show]);

  const openNotification = (placement) => {
    api[type]({
      message: message,
      //   description: "description",
      placement,
      onClose: onClose,
    });
  };

  return <>{contextHolder}</>;
};

export default Notification;
