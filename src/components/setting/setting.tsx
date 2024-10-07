import styles from "./setting.module.scss";
import AvatarImage from "../../shared/assets/images/avatar.jpg";
import EditAvatarLogo from "../../shared/assets/icons/edit-avatar.svg";
import clsx from "clsx";

export const Setting = () => {
  const handleSubmitForm = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    console.log("test submit form");
  };

  return (
    <section className={styles.setting}>
      <nav className={styles.setting__menu}>
        <ul className={styles.setting__menuItems}>
          <li className={styles.setting__menuItem}>
            <button className={styles.setting__menuButton}>Edit Profile</button>
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
              <input
                className={clsx(
                  styles.setting__input,
                  styles.setting__inputDate
                )}
              />
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
              />
            </label>
          </div>
          <button className={styles.setting__submitButton}>Save</button>
        </form>
      </div>
    </section>
  );
};
