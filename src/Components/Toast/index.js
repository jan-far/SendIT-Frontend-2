import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure({
  position: 'bottom-left',
  autoClose: 5000,
  closeButton: true,
  draggable: false,
  hideProgressBar: true,
});

const NotificationToast = toast
export default NotificationToast;