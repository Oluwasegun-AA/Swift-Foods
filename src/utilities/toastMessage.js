/* global Toast:true */

const toastMessage = ({
  type,
  message,
  routeMessage,
  route
}) => {
  if ((type === 'success') && message && routeMessage && route) {
    return new Toast({
      message: `${message}`,
      type: 'success',
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
  if ((type === 'danger') && message && routeMessage && route) {
    return new Toast({
      message: `${message}`,
      type: 'danger',
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
