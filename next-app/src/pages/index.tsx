import Head from 'next/head';
import Image from 'next/image';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css'

class Sondage {
  is_interested_by_initiation: Boolean;
  why_r_u_interested: string;
  time_to_learn: string;
  writed_content: Number;
  audio_content: Number;
  video_content: Number;
  main_reason_to_take_initiation: string;
  consulting: string;
  why_immersion: string;
  immersion: string;
  time_for_immersion: string;
  custom_time_for_immersion: string;
  want_to_know: string;
  lead_email: string;
}

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
    if ('no_immersion' === sondage.immersion) {
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

        Redécouverte des rapports intérieurs/extérieurs de chacun.

        Davantage d’autonomie dans son rapport au réel, décoder les messages que la vie nous envoie.

        Installer une guidance pérenne, évoluer en conscience.

        Casser les voiles et les mirages des masques, victimisation, sauveur, barreau, en finir avec le triangle de Kartmann.

        Cesser d’alimenter les blessures de l’égo sur des dynamiques mal comprises.

        Intégrer les mémoires et comprendre son expérience de vie.

        Restaurer la souveraineté de l’Être, transformer le monde et les relations humaines pour enfin vivre avec quiétude.

        Bien vivre d’une activité lucrative passive/active.
        </p>

        <div className={styles.grid}>
          <Form action="https://localhost/api/sondage" id={'sondageForm'} className={styles.card}>
            <Form.Group className="mb-3 form-group" controlId="">
              <Form.Label>Seriez-vous intéressé par une initiation au 3ieme oeil et à certains concepts multidimensionnels ?</Form.Label>
              <Form.Check type={'radio'} label={"Oui"} value={'yes'} name={"is_interested_by_initiation"} onChange={handleChange} />
              <Form.Check type={'radio'} label={"Non"} value={'no'} name={"is_interested_by_initiation"} onChange={handleChange} />
              <Form.Label>Pourquoi ?</Form.Label>
              <Form.Control as="textarea" rows={3} name={'why_r_u_interested'} onChange={handleChange} required={true} />
            </Form.Group>
            <Form.Group className="mb-3 form-group" controlId="">
              <Form.Label>En sachant que chacun a son rythme d'apprentissage, quelle serait pour vous la durée idéale de l'initiation ?</Form.Label>
              <Form.Select name={'time_to_learn'} onChange={handleChange} required={true}>
                <option value="1 semaine">1 semaine</option>
                <option value="1 mois">1 mois</option>
                <option value="3 mois ou plus">3 mois ou plus</option>
                <option value="no_idea">Aucune idée</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3 form-group" controlId="">
              <Form.Label>Quel serait pour vous le bon équilibre entre contenus écrit, audio et vidéo ?</Form.Label><br/>
              <Form.Text className="text-muted">
                Ecrit
              </Form.Text>
              <Form.Range name={'writed_content'} onChange={handleChange} />
              <Form.Text className="text-muted">
                Audio
              </Form.Text>
              <Form.Range name={'audio_content'} onChange={handleChange} />
              <Form.Text className="text-muted">
                Vidéo
              </Form.Text>
              <Form.Range name={'video_content'} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3 form-group" controlId="">
              <Form.Label>Quelle est la raison principale qui vous donnerait envie de prendre cette initiation ?</Form.Label>
              <Form.Control as="textarea" rows={10} name={'main_reason_to_take_initiation'} onChange={handleChange} required={true} />
            </Form.Group>
            <Form.Group className="mb-3 form-group" controlId="">
              <Form.Label>Pensez-vous avoir besoin d'un suivi individuel ou groupé pendant la durée de l'initiation ?</Form.Label>
              <Form.Check type={'radio'} name={'consulting'} value={'individual_consulting'} label={"Individuel de préférence"} onChange={handleChange} />
              <Form.Check type={'radio'} name={'consulting'} value={'grouped_consulting'} label={"Groupé de préférence"} onChange={handleChange} />
              <Form.Check type={'radio'} name={'consulting'} value={'both_consulting'} label={"Les deux"} onChange={handleChange} />
              <Form.Check type={'radio'} name={'consulting'} value={'no_consulting'} label={"Je ne pense pas en avoir besoin"} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3 form-group" controlId="">
              <Form.Label>A la fin de cette initiation, seriez-vous intéressé par une immersion de groupe ?</Form.Label>
              <Form.Check type={'radio'} name={'immersion'} value={'yes_immersion'} label={"Oui"} onChange={handleChange} />
              <Form.Check type={'radio'} name={'immersion'} value={'no_immersion'} label={"Non"} onChange={handleChange} />
              <Form.Label>Pourquoi ?</Form.Label>
              <Form.Control as="textarea" rows={10} name={'why_immersion'} onChange={handleChange} />
            </Form.Group>
            {showTimeForImmersionField() ? <>
              <Form.Group className="mb-3 form-group" controlId="">
                <Form.Label>Quelle serait pour vous la durée idéale de l'immersion ?</Form.Label>
                <Form.Select name={'time_for_immersion'} onChange={handleChange} required={true}>
                  <option value="1 week-end">1 week-end</option>
                  <option value="3 days">3 jours</option>
                  <option value="1 week">1 semaine</option>
                  <option value="other">Autre</option>
                </Form.Select>
                {showTimeForImmersionOtherField() ? <>
                  <Form.Control type="number" name={'custom_time_for_immersion'} onChange={handleChange} />
                  <Form.Text className="text-muted">
                    durée en jours
                  </Form.Text>
                </> : <></> }
              </Form.Group>
            </> : <></>}
            <Form.Group className="mb-3 form-group" controlId="">
              <Form.Label>Qu'aimeriez-vous apprendre ?</Form.Label>
              <Form.Control as="textarea" rows={10} name={'want_to_know'} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3 form-group" controlId="">
              <Form.Label>Votre email</Form.Label>
              <Form.Control type="text" name={'lead_email'} onChange={handleChange} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Envoyer mes réponses
            </Button>
          </Form>
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
