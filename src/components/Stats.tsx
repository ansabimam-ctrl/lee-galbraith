import styles from './Stats.module.css';

const Stats = () => {
  const data = [
    { label: 'AGE', val: '51' },
    { label: 'HEIGHT', val: '5\'10"' },
    // { label: 'CHEST', val: '36"' },
    { label: 'WAIST', val: '32"' },
    // { label: 'HIPS', val: '42"' },
    // { label: 'BUST', val: '44"' },
    // { label: 'WEIGHT', val: '10 STONE' },
    { label: 'DRIVE', val: 'YES' },
    { label: 'GENDER', val: 'MALE' },
    { label: 'ETHNICITY', val: 'ENGLISH' },
    { label: 'LOCATION', val: 'Manchester' },
    { label: 'ACCENT', val: 'British' },
    { label: 'HAIR', val: 'Brown/Grey' },
    { label: 'EYES', val: 'Blue/Green' },
  ];

  return (
    <section id="profile" className={styles.stats}>
      <h2 className={styles.sectionTitle}>STATS</h2>
      <div className={styles.grid}>
        {data.map((item, index) => (
          <div key={index} className={styles.card}>
            <span className={styles.value}>{item.val}</span>
            <span className={styles.label}>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
