import styles from './app.module.scss';
import { Header } from '../header/header';
import { SideMenu } from '../side-menu/side-menu';

export const App = () => {
  return (
    <div className={styles.root}>
      <Header />

      <SideMenu />
    </div>
  );
}
