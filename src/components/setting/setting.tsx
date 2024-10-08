import styles from "./setting.module.scss";
import AvatarImage from "../../shared/assets/images/avatar.jpg";
import EditAvatarLogo from "../../shared/assets/icons/edit-avatar.svg";
import clsx from "clsx";
import { Calendar } from "../calendar/calendar";

export const Setting = () => {
  const handleSubmitForm = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    console.log("test submit form");
  };

  return (
    <section className={styles.setting}>
      <nav className={styles.setting__menu}>
        <ul className={styles.setting__menuItems}>
          <li className={clsx(styles.setting__menuItem, styles.setting__menuItem_active)}>
            <button className={styles.setting__menuButton}>Edit&nbsp;Profile</button>
            <div className={styles.setting__itemStick} />
          </li>
          <li className={styles.setting__menuItem}>
            <button className={styles.setting__menuButton}>Preferences</button>
          </li>
          <li className={styles.setting__menuItem}>
            <button className={styles.setting__menuButton}>Security</button>
          </li>
        </ul>
      </nav>
      <div className={styles.setting__data}>
        <button
          className={styles.setting__avatar}
          type="button"
          onClick={() => console.log("edit avatar")}
        >
          <img
            className={styles.setting__avatarImage}
            src={AvatarImage}
            alt="Avatar Image"
          />
          <img
            className={styles.setting__avatarEditIcon}
            src={EditAvatarLogo}
            alt="Edit Logo"
          />
        </button>
        <form className={styles.setting__form} onSubmit={handleSubmitForm}>
          <div className={styles.setting__fields}>
            <label className={styles.setting__field}>
              <span
                className={clsx(
                  styles.setting__subtitle,
                  styles.setting__subtitleYourName
                )}
              >
                Your Name
              </span>
              <input
                className={clsx(
                  styles.setting__input,
                  styles.setting__inputYourName
                )}
                type="text"
                placeholder="Charlene Reed"
              />
            </label>
            <label className={styles.setting__field}>
              <span
                className={clsx(
                  styles.setting__subtitle,
                  styles.setting__subtitleUserName
                )}
              >
                User Name
              </span>
              <input
                className={clsx(
                  styles.setting__input,
                  styles.setting__inputUserName
                )}
                type="text"
                placeholder="Charlene Reed"
              />
            </label>
            <label className={styles.setting__field}>
              <span
                className={clsx(
                  styles.setting__subtitle,
                  styles.setting__subtitleEmail
                )}
              >
                Email
              </span>
              <input
                className={clsx(
                  styles.setting__input,
                  styles.setting__inputEmail
                )}
                type="email"
                placeholder="charlenereed@gmail.com"
              />
            </label>
            <label className={styles.setting__field}>
              <span
                className={clsx(
                  styles.setting__subtitle,
                  styles.setting__subtitlePassword
                )}
              >
                Password
              </span>
              <input
                className={clsx(
                  styles.setting__input,
                  styles.setting__inputPassword
                )}
                type="password"
                placeholder="1234567"
              />
            </label>
            <label className={styles.setting__field}>
              <span
                className={clsx(
                  styles.setting__subtitle,
                  styles.setting__subtitleDate
                )}
              >
                Date of Birth
              </span>
              <Calendar />
              {/* <input
                className={clsx(
                  styles.setting__input,
                  styles.setting__inputDate
                )}
              /> */}
            </label>
            <label className={styles.setting__field}>
              <span
                className={clsx(
                  styles.setting__subtitle,
                  styles.setting__subtitlePresentAddress
                )}
              >
                Present Address
              </span>
              <input
                className={clsx(
                  styles.setting__input,
                  styles.setting__inputPresentAddress
                )}
                type="text"
                placeholder="San Jose, California, USA"
              />
            </label>
            <label className={styles.setting__field}>
              <span
                className={clsx(
                  styles.setting__subtitle,
                  styles.setting__subtitlePermanentAddress
                )}
              >
                Permanent Address
              </span>
              <input
                className={clsx(
                  styles.setting__input,
                  styles.setting__inputPermanentAddress
                )}
                type="text"
                placeholder="San Jose, California, USA"
              />
            </label>
            <label className={styles.setting__field}>
              <span
                className={clsx(
                  styles.setting__subtitle,
                  styles.setting__subtitleCity
                )}
              >
                City
              </span>
              <input
                className={clsx(
                  styles.setting__input,
                  styles.setting__inputCity
                )}
                type="text"
                placeholder="San Jose"
              />
            </label>
            <label className={styles.setting__field}>
              <span
                className={clsx(
                  styles.setting__subtitle,
                  styles.setting__subtitlePostalCode
                )}
              >
                Postal Code
              </span>
              <input
                className={clsx(
                  styles.setting__input,
                  styles.setting__inputPostalCode
                )}
                type="text"
                placeholder="45962"
              />
            </label>
            <label className={styles.setting__field}>
              <span
                className={clsx(
                  styles.setting__subtitle,
                  styles.setting__subtitleCountry
                )}
              >
                Country
              </span>
              <input
                className={clsx(
                  styles.setting__input,
                  styles.setting__inputCountry
                )}
                type="text"
                placeholder="USA"
              />
            </label>
          </div>
          <button className={styles.setting__submitButton}>Save</button>
        </form>
      </div>
    </section>
  );
};
