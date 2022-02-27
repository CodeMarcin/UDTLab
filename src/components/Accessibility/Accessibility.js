import React from 'react';
import img02 from '../../assets/img/img_02.png';
import img03 from '../../assets/img/img_03.png';
import img04 from '../../assets/img/img_04.png';
import styles from './css/Accessibility.module.css';
import SingleItem from './SingleItem';

const Accessibility = () => {
  return (
    <div className={styles['accessibility']}>
      <SingleItem
        img={img02}
        title="Gdziekolwiek chcesz"
        text={[
          'Mazurska plaża, górskie hale, a może molo w Sopocie? To bez znaczenia!',
          <strong> UDT Lab </strong>,
          'działa gdziekolwiek jesteś.',
        ]}
      />
      <SingleItem
        img={img03}
        title="Kiedykolwiek chcesz"
        text={[
          'Przerwa w pracy, przejazd metrem czy wieczorny odpoczynek? Każdy moment jest dobry, aby włączyć',
          <strong> UDT Lab </strong>,
          'i rozpocząć naukę. ',
        ]}
      />
      <SingleItem
        img={img04}
        title="Na czymkolwiek chcesz"
        text={[
          'Komputer, laptop, tablet czy telefon? Dla',
          <strong> UDT Lab </strong>,
          'to bez znaczenia. Strona działa na każdym urządzeniu.',
        ]}
      />
    </div>
  );
};

export default Accessibility;
