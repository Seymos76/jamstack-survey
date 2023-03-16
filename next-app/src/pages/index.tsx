import Head from 'next/head';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css'
import Sondage from '../components/Sondage';

export default function Home() {
  let newSondage = new Sondage();
    
  const [sondage, setSondage] = useState(newSondage);

  useEffect(() => {
    showTimeForImmersionOtherField();
  }, [sondage]);

  const handleChange = ({target}) => {
    const { name, value } = target;
    console.log(name, value);
    let currentSondage: any = {...sondage}
    currentSondage[name] = value;
    setSondage(currentSondage);
    console.log(currentSondage);
  }
  const showTimeForImmersionField = () => {
    if ('no' === sondage.interested_by_immersion) {
      // prévoir la réinitialisation du champ supplémentaire de l'immersion
      return false;
    }
    return true;
  }
  const showTimeForImmersionOtherField = () => {
    console.log('showTimeForImmersionOtherField executed');
    if ('other' === sondage.time_for_immersion) {
      return true;
    }
    return false;
  }
  console.log('sondage',sondage);
  return (
    <div className={styles.container}>
      <Head>
        <title>Sondage pour une initiation au 3e oeil et aux concepts multidimensionnels</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Initiation au <a href="https://nextjs.org">3e oeil</a> et aux concepts multidimensionnels
        </h1>

        <p className={styles.description}>
        Ouverture de canaux de communication intérieure/extérieure pour une lecture de notre vérité/réalité intérieure.
        </p>
        <p className={styles.description}>
        Redécouverte des rapports intérieurs/extérieurs de chacun.
        </p>
        <p className={styles.description}>
        Installer une guidance pérenne, évoluer en conscience.
        </p>
        <p className={styles.description}>
        Casser les voiles et les mirages des masques, victimisation, sauveur, barreau, en finir avec le triangle de Kartmann.
        </p>
        <p className={styles.description}>
        Davantage d’autonomie dans son rapport au réel, décoder les messages que la vie nous envoie.
        </p>
        <p className={styles.description}>
        Cesser d’alimenter les blessures de l’égo sur des dynamiques mal comprises.
        </p>
        <p className={styles.description}>
        Intégrer les mémoires et comprendre son expérience de vie.
        </p>
        <p className={styles.description}>
        Cesser d’alimenter les blessures de l’égo sur des dynamiques mal comprises.
        </p>
        <p className={styles.description}>
        Restaurer la souveraineté de l’Être, transformer le monde et les relations humaines pour enfin vivre avec quiétude.
        </p>

        <div className={styles.grid}>
          <form action="https://localhost/api/sondage" method="post">
            <fieldset className='mb-3 form-group'>
              <label htmlFor="">Seriez-vous intéressé par une initiation au 3ieme oeil et à certains concepts multidimensionnels ?</label>
              <br/>
              <input type="radio" name="is_interested_by_initiation" value={'yes'} id="" /> Oui
              <br/>
              <input type="radio" name="is_interested_by_initiation" value={'no'} id="" /> Non 
            </fieldset>
            <fieldset className='mb-3 form-group'>
              <label htmlFor="">Pourquoi ?</label>
              <textarea name="why_are_you_interested_by_initiation" id="" cols={30} rows={10} className={'form-control'}></textarea>
            </fieldset>
            <fieldset className='mb-3 form-group'>
              <label htmlFor="">En sachant que chacun a son rythme d'apprentissage, quelle serait pour vous la durée idéale de l'initiation ?</label>
              <select name="time_to_learn" id="" className={'form-control'}>
                <option value="1 semaine">1 semaine</option>
                <option value="1 mois">1 mois</option>
                <option value="3 mois ou plus">3 mois ou plus</option>
                <option value="no_idea">Aucune idée</option>
              </select>
            </fieldset>
            <fieldset className='mb-3 form-group'>
              <label htmlFor="">Quel serait pour vous le bon équilibre entre contenus écrit, audio et vidéo ?</label>
              <br/>
              <input type="checkbox" name="content_type_preference" value={'more_writing'} id="" /> Ecrit de préférence<br/>
              <input type="checkbox" name="content_type_preference" value={'more_audio'} id="" /> Audio de préférence<br/>
              <input type="checkbox" name="content_type_preference" value={'more_video'} id="" /> Vidéo de préférence
            </fieldset>
            <fieldset className='mb-3 form-group'>
              <label htmlFor="">Quelle est la raison principale qui vous donnerait envie de prendre cette initiation ?</label>
              <textarea name="main_reason_to_take_initiation" id="" cols={30} rows={10} className={'form-control'}></textarea>
            </fieldset>
            <fieldset className='mb-3 form-group'>
              <label htmlFor="">Pensez-vous avoir besoin d'un suivi individuel ou groupé pendant la durée de l'initiation ?</label>
              <br/>
              <input type="radio" name="need_following" value={'individual'} id="" /> Suivi individuel<br/>
              <input type="radio" name="need_following" value={'grouped'} id="" /> Suivi groupé<br/>
              <input type="radio" name="need_following" value={'both'} id="" /> Les deux<br/>
              <input type="radio" name="need_following" value={'none'} id="" /> Aucun
            </fieldset>
            <fieldset className='mb-3 form-group'>
              <label htmlFor="">A la fin de cette initiation, seriez-vous intéressé par une immersion de groupe ?</label>
              <br/>
              <input type="radio" name="interested_by_immersion" value={'yes'} id="" /> Oui<br/>
              <input type="radio" name="interested_by_immersion" value={'no'} id="" /> Non
            </fieldset>
            <fieldset className='mb-3 form-group'>
              <label htmlFor="">Pourquoi ?</label>
              <textarea name="why_are_you_interested_by_immersion" id="" cols={30} rows={10} className={'form-control'}></textarea>
            </fieldset>
            {showTimeForImmersionField() ? <>
              <fieldset className='mb-3 form-group'>
                <label htmlFor="">Quelle serait pour vous la durée idéale de l'immersion ?</label>
                <select name="time_for_immersion" id="" className={'form-control'}>
                  <option value="1 week-end">1 week-end</option>
                  <option value="3 days">3 jours</option>
                  <option value="1 week">1 semaine</option>
                  <option value="other">Autre</option>
                </select>
                {showTimeForImmersionOtherField() ? <>
                  <fieldset className='mb-3 form-group'>
                    <label htmlFor="">Quelle durée en jours ?</label>
                    <input type="number" name="custom_time_for_immersion" id="" className={'form-control'} />
                  </fieldset>
                </> : <></>}
              </fieldset>
            </> : <></>}
            <fieldset className='mb-3 form-group'>
              <label htmlFor="">Qu'aimeriez-vous apprendre ?</label>
              <textarea name="want_to_learn" id="" cols={30} rows={10} className={'form-control'}></textarea>
            </fieldset>
            <fieldset className='mb-3 form-group'>
              <label htmlFor="">Votre email ?</label>
              <input type="email" name="lead_email" id="" className={'form-control'} />
            </fieldset>
            <button type="submit" className='btn btn-primary'>Soumettre mes réponses</button>
          </form>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
