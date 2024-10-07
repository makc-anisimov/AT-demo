import clsx from "clsx";
import styles from "./header.module.scss";
export const Header = () => {
  return (
    <header className={styles.header}>
      <button className={styles.header__mobMenuBtn} />
      <h1 className={styles.header__title}>Setting</h1>
      <div className={styles.header__menu}>
        <div className={styles.header__personal}>
          <input
            className={styles.header__searchInput}
            placeholder="Search for something"
          />
          <button className={styles.header__button}>
            <div
              className={clsx(
                styles.header__buttonImage,
                styles.header__buttonImage_settings
              )}
            />
          </button>
          <button className={styles.header__button}>
            <div
              className={clsx(
                styles.header__buttonImage,
                styles.header__buttonImage_notification
              )}
            />
          </button>
        </div>
        <button
        className={styles.header__avatar}
      />
      </div>

    </header>
  );
};
