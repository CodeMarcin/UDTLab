import React from 'react';

import styles from './css/Offert.module.css';

const Offert = () => {
  return (
    <div className={styles['offert']}>
      <h1>Oferta dla ośrodków szkoleniowych</h1>
      <p>
        Serwis <strong>UDT Lab</strong> w najbliższym czasie udostępni usługę
        kierowaną do wszelkiego rodzaju ośrodków w których ofercie
        znaleźć można szkolenia z zakresu uzyskania uprawnień{' '}
        <strong>UDT</strong>.
      </p>
      <p>
        Jeżeli chcesz być na bieżąco z informacjami na temat nowej
        funkcjonalności serwisu zostaw nam swój email.{' '}
      </p>

      <form>
        
        <input type="email" id="email" defaultValue="Adres email"/>
        <button className='btn-two'>Wyślij</button>
      </form>
    </div>
  );
};

export default Offert;
