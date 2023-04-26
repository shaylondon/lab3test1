import { useCallback } from "react";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./Desktop2.module.css";
const Desktop2 = () => {
  const navigate = useNavigate();

  const onRectangle1Click = useCallback(() => {
    navigate("/desktop-3");
  }, [navigate]);

  const onRectangle2Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.desktop2}>
      <div className={styles.desktop2Child} />
      <div className={styles.shay}>Shay</div>
      <div className={styles.desktop2Item} onClick={onRectangle1Click} />
      <div className={styles.desktop2Inner} onClick={onRectangle2Click} />
      <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
      <Button
        className={styles.rectangleButton}
        sx={{ width: 160 }}
        variant="contained"
        color="secondary"
        href="/desktop-3"
        target="_top"
      >
        William's Page
      </Button>
      <Button
        className={styles.desktop2Child1}
        sx={{ width: 160 }}
        variant="contained"
        color="secondary"
        href="/desktop-3"
      >
        Mitchell's Page
      </Button>
      <div className={styles.aboutUs}>About Us</div>
      <div className={styles.williamsPage}>William’s Page</div>
      <div className={styles.mitchellsPage}>Mitchell’s Page</div>
      <TextField
        className={styles.rectangleTextfield}
        sx={{ width: 606 }}
        color="secondary"
        variant="standard"
        type="text"
        label="Leave a Comment"
        size="medium"
        margin="none"
      />
      <section className={styles.rectangleSection} />
      <Button
        className={styles.desktop2Child2}
        sx={{ width: 99 }}
        variant="contained"
        color="secondary"
      >
        Send
      </Button>
      <div className={styles.rectangleDiv} />
      <div className={styles.send}>Send</div>
      <div className={styles.messageBoard}>Message Board</div>
    </div>
  );
};

export default Desktop2;
