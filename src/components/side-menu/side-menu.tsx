import clsx from "clsx";
import styles from "./side-menu.module.scss";
import Logo from "../../shared/assets/images/Logo.svg";
import HomeLogo from "../../shared/assets/icons/home.svg?react";
import TransactionLogo from "../../shared/assets/icons/transfer.svg?react";
import UserLogo from "../../shared/assets/icons/user.svg?react";
import InvestmentLogo from "../../shared/assets/icons/economic-investment.svg?react";
import CreditCardLogo from "../../shared/assets/icons/credit-card.svg?react";
import LoanLogo from "../../shared/assets/icons/loan.svg?react";
import ServiceLogo from "../../shared/assets/icons/service.svg?react";
import EconometricsLogo from "../../shared/assets/icons/econometrics.svg?react";
import SettingsLogo from "../../shared/assets/icons/settings-solid.svg?react";

export const SideMenu = () => {
  return (
    <nav className={styles.sideMenu}>
      <div className={styles.sideMenu__logoWrapper}>
        <img className={styles.sideMenu__logo} src={Logo} alt="Logo BankDash" />
      </div>
      <ul className={styles.sideMenu__items}>
        <li className={styles.sideMenu__item}>
          <div className={styles.sideMenu__itemStick} />
          <HomeLogo className={styles.sideMenu__icon} />
          <span className={styles.sideMenu__text}>Dashboard</span>
        </li>
        <li className={styles.sideMenu__item}>
          <div className={styles.sideMenu__itemStick} />
          <TransactionLogo className={styles.sideMenu__icon} />
          <span className={styles.sideMenu__text}>Transactions</span>
        </li>
        <li className={styles.sideMenu__item}>
          <div className={styles.sideMenu__itemStick} />
          <UserLogo className={styles.sideMenu__icon} />
          <span className={styles.sideMenu__text}>Accounts</span>
        </li>
        <li className={styles.sideMenu__item}>
          <div className={styles.sideMenu__itemStick} />
          <InvestmentLogo className={styles.sideMenu__icon} />
          <span className={styles.sideMenu__text}>Investments</span>
        </li>
        <li className={styles.sideMenu__item}>
          <div className={styles.sideMenu__itemStick} />
          <CreditCardLogo className={styles.sideMenu__icon} />
          <span className={styles.sideMenu__text}>Credit Cards</span>
        </li>
        <li className={styles.sideMenu__item}>
          <div className={styles.sideMenu__itemStick} />
          <LoanLogo className={styles.sideMenu__icon} />
          <span className={styles.sideMenu__text}>Loans</span>
        </li>
        <li className={styles.sideMenu__item}>
          <div className={styles.sideMenu__itemStick} />
          <ServiceLogo className={styles.sideMenu__icon} />
          <span className={styles.sideMenu__text}>Services</span>
        </li>
        <li className={styles.sideMenu__item}>
          <div className={styles.sideMenu__itemStick} />
          <EconometricsLogo className={styles.sideMenu__icon} />
          <span className={styles.sideMenu__text}>My Privileges</span>
        </li>
        <li
          className={clsx(styles.sideMenu__item, styles.sideMenu__item_active)}
        >
          <div className={styles.sideMenu__itemStick} />
          <SettingsLogo className={styles.sideMenu__icon} />
          <span className={styles.sideMenu__text}>Setting</span>
        </li>
      </ul>
    </nav>
  );
};
