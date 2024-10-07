import styles from "./app.module.scss";
import { Header } from "../header/header";
import { SideMenu } from "../side-menu/side-menu";
import { Setting } from "../setting/setting";

export const App = () => {
  return (
    <div className={styles.root}>
      <Header />
      <Setting />
      <SideMenu />
    </div>
  );
};
