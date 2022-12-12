import { Button } from "@mui/material";
import style from "../styles/page/Contact.module.scss";

export default function Contact() {
  // let _message = "Hello world!";
  const _curYear = new Date().getFullYear();
  return (
    <div className={style.center}>
      <div> Hello world, its about to be {_curYear + 1} 🎉</div>

      <Button
        style={{ textAlign: "center" }}
        variant="contained"
        onClick={() => history.back()}
      >
        back
      </Button>
    </div>
  );
}
