import styles from './HamburgerMenu.module.css';

const HamburgerMenuButton = ({ onClick }) => {
  return (
    <div className={styles.toggleButton} onClick={onClick}>
      <span className={styles.bar}></span>
      <span className={styles.bar}></span>
      <span className={styles.bar}></span>
    </div>
  );
};

const HamburgerMenu = ({ onClick }) => {
  return <HamburgerMenuButton onClick={onClick} />;
};

export default HamburgerMenu;
