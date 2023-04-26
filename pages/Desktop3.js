import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Desktop3.module.css";
const Desktop3 = () => {
  const navigate = useNavigate();

  const onRectangle1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onRectangle2Click = useCallback(() => {
    navigate("/desktop-2");
  }, [navigate]);

  const onRectangle3Click = useCallback(() => {
    navigate("/desktop-2");
  }, [navigate]);

  const onRectangle5Click = useCallback(() => {
    navigate("/desktop-2");
  }, [navigate]);

  const onRectangle6Click = useCallback(() => {
    navigate("/desktop-2");
  }, [navigate]);

  const onRectangle7Click = useCallback(() => {
    navigate("/desktop-2");
  }, [navigate]);

  const onRectangle8Click = useCallback(() => {
    navigate("/desktop-2");
  }, [navigate]);

  const onRectangle9Click = useCallback(() => {
    navigate("/desktop-2");
  }, [navigate]);

  const onRectangle10Click = useCallback(() => {
    navigate("/desktop-2");
  }, [navigate]);

  return (
    <div className={styles.desktop3}>
      <div className={styles.aboutTeam1}>About Team 1</div>
      <div className={styles.wereACollection}>
        We’re a collection of two CSEs and an EE blah blah blah blah
      </div>
      <div className={styles.desktop3Child} />
      <div className={styles.desktop3Item} onClick={onRectangle1Click} />
      <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
      <div className={styles.desktop3Inner} onClick={onRectangle2Click} />
      <div className={styles.rectangleDiv} onClick={onRectangle3Click} />
      <div className={styles.williamsPage}>William’s Page</div>
      <div className={styles.mitchellsPage}>Mitchell’s Page</div>
      <div className={styles.desktop3Child1} />
      <div className={styles.shaysPage}>Shay’s Page</div>
      <div className={styles.desktop3Child2} onClick={onRectangle5Click} />
      <div className={styles.desktop3Child3} onClick={onRectangle6Click} />
      <div className={styles.desktop3Child4} onClick={onRectangle7Click} />
      <div className={styles.desktop3Child5} onClick={onRectangle8Click} />
      <div className={styles.desktop3Child6} onClick={onRectangle9Click} />
      <div className={styles.desktop3Child7} onClick={onRectangle10Click} />
      <div className={styles.mitchell}>Mitchell</div>
      <div className={styles.william}>William</div>
      <div className={styles.shay}>Shay</div>
    </div>
  );
};

export default Desktop3;
