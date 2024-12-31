import styles from "./CountryCard.module.css";

type CountryFlagProps = {
  imageSrc: string;
};

export default function CountryFlag({ imageSrc }: CountryFlagProps) {
  return (
    <div className={styles.flagContainer}>
      <img src={imageSrc} className={styles.flagImage} />
    </div>
  );
}
