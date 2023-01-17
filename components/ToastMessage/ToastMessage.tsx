import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { closeToast } from "../../store/toast";
import styles from "./ToastMessage.module.css";

const ToastMessage = () => {
  const dispatch = useAppDispatch();
  const toastOn = useAppSelector((state) => state.toast.toastOn);
  const message = useAppSelector((state) => state.toast.message);

  useEffect(() => {
    if (!toastOn) return;
    setTimeout(() => {
      dispatch(closeToast());
    }, 1300);
  }, [dispatch, toastOn]);

  return (
    <div
      className={`${styles.toast} ${
        toastOn ? `${styles.on}` : `${styles.off}`
      }`}
    >
      <p>{message}</p>
    </div>
  );
};

export default ToastMessage;
