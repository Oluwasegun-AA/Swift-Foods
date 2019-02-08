/* global Toast:true */

const toastMessage = ({
  type,
  message,
  routeMessage,
  route
}) => {
  if (type && message && routeMessage && route) {
    return new Toast({
      message: `${message}`,
      type: `${type}`,
      customButtons: [
        {
          text: `${routeMessage}`,
          onClick() {
            window.location.href = `${route}`;
          }
        }
      ]
    });
  }
  if (type === 'danger') {
    return new Toast({
      message: `${message}`,
      type: 'danger'
    });
  }
  return new Toast({
    message: `${message}`,
    type: 'success'
  });
};

export default toastMessage;
