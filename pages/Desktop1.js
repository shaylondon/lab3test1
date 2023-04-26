import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Desktop1.module.css";
const Desktop1 = () => {
  const navigate = useNavigate();

  const onRectangle1Click = useCallback(() => {
    navigate("/desktop-2");
  }, [navigate]);

  const onRectangle2Click = useCallback(() => {
    navigate("/desktop-3");
  }, [navigate]);

  const onRectangle3Click = useCallback(() => {
    navigate("/desktop-2");
  }, [navigate]);

  const onRectangle4Click = useCallback(() => {
    navigate("/desktop-2");
  }, [navigate]);

  return (
    <div className={styles.desktop1}>
      <div className={styles.desktop1Child} />
      <div className={styles.desktop1Item} onClick={onRectangle1Click} />
      <div className={styles.desktop1Inner} onClick={onRectangle2Click} />
      <div className={styles.rectangleDiv} onClick={onRectangle3Click} />
      <div className={styles.desktop1Child1} onClick={onRectangle4Click} />
      <div className={styles.mitchell}>Mitchell</div>
      <div className={styles.aboutUs}>About Us</div>
      <div className={styles.team1Portfolio}>Team 1 Portfolio</div>
      <div className={styles.william}>William</div>
      <div className={styles.shay}>Shay</div>
    </div>
  );
};

export default Desktop1;
