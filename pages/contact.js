import { Button } from "@mui/material";
import style from "../styles/page/Contact.module.scss";

export default function Contact() {
  let _currentYear = new Date().getFullYear();
  let _message = `We made it to the year ${_currentYear} 🎉`;
  return (
    <div className={style.center}>
      <div style={{ fontSize: "3rem", fontWeight: "bold" }}>Juhuuu!!!</div>
      <div style={{ fontSize: "1rem" }}>{_message}</div>

      <Button
        style={{ textAlign: "center", marginTop: "3rem" }}
        variant="contained"
        onClick={() => history.back()}
      >
        back
      </Button>
    </div>
  );
}
