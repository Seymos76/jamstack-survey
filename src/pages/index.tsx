import Head from 'next/head';
import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';
import Sondage from '../components/Sondage';

export default function Home() {
  let newSondage = new Sondage();

  const [sondage, setSondage] = useState(newSondage);

  useEffect(() => {
    showTimeForImmersionOtherField();
  }, [sondage]);

  const sendMail = async (data) => {
    try {
      return await fetch("https://sondage-api.herokuapp.com/", {
        "method": "POST",
        "headers": { "content-type": "application/json" },
        "body": JSON.stringify(data)
      });
    } catch (error) {
      // toast error message. whatever you wish
    }
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await sendMail(sondage);
    console.log('response',response);
  }
  const handleChange = ({target}) => {
    const { name, value } = target;
    console.log(name, value);
    if ("subtiles_perceptions" === name) {
      if (!sondage.subtiles_perceptions.includes(value)) {
        sondage.subtiles_perceptions.push(value);
      } else {
        console.log(sondage.subtiles_perceptions);
      }
    }
    let currentSondage: any = {...sondage}
    currentSondage[name] = value;
    setSondage(currentSondage);
    console.log('current sondage ',currentSondage);
  }
  const showTimeForImmersionField = () => {
    return 'no' === sondage.interested_by_immersion;
  }
  const showTimeForImmersionOtherField = () => {
    console.log('showTimeForImmersionOtherField executed');
    return 'other' === sondage.time_for_immersion;
  }
  const isInterestedByInitiation = () => {
    return 'yes' === sondage.is_interested_by_initiation;

  }
  const isFamiliar = () => {
    return 'yes' === sondage.familiar_with_energy;
  }
  const isPratician = () => {
    return 'yes' === sondage.is_pratician;
  }
  const wantsOtherSubjects = () => {
    return 'other' === sondage.subjects;
  }
  console.log('sondage',sondage);
  return (
    <div className={styles.container}>
      <Head>
        <title>Sondage pour une initiation au 3e oeil et à sa multidimension</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Le 3e oeil et sa multidimension.
        </h1>

        <div className={styles.grid}>
          <form action="" method="post" onSubmit={handleSubmit}>
            <fieldset className='mb-3 form-group'>
              <label htmlFor="">Etes-vous familier(ère) avec un ou plusieurs domaines de l'énergétique ?</label>
              <br/>
              <input type="radio" name="familiar_with_energy" value={'yes'} id="" onChange={handleChange} /> Oui
              <br/>
              <input type="radio" name="familiar_with_energy" value={'no'} id="" onChange={handleChange} /> Non
            </fieldset>
            {isFamiliar() && <>
              <fieldset className='mb-3 form-group'>
                <label htmlFor="">Qu'est-ce qui vous a amené(e) à vous intéresser à l'énergétique ?</label>
                <textarea name="what_did_bring_you_to_energetic" id="" cols={30} rows={10} className={'form-control'} onChange={handleChange}></textarea>
              </fieldset>
              <fieldset className='mb-3 form-group'>
                <label htmlFor="">Etes-vous vous-même praticien(ne) (professionnel(le) ou non) ?</label>
                <br/>
                <input type="radio" name="is_pratician" value={'yes'} id="" onChange={handleChange} /> Oui
                <br/>
                <input type="radio" name="is_pratician" value={'no'} id="" onChange={handleChange} /> Non
              </fieldset>
              {isPratician() && <>
                <fieldset className='mb-3 form-group'>
                  <label htmlFor="">Dans quel(s) domaine(s) ?</label>
                  <textarea name="in_which_domains_are_you" id="" cols={30} rows={10} className={'form-control'} onChange={handleChange}></textarea>
                </fieldset>
              </>}
              <fieldset className='mb-3 form-group'>
                <label htmlFor="">Si vous avez déjà des perceptions subtiles, avec lesquelles êtes-vous le plus à l'aise ?</label><br/>
                <input type="checkbox" name="subtiles_perceptions" id="" value={"vision"} /> Vision / clair-voyance<br/>
                <input type="checkbox" name="subtiles_perceptions" id="" value={"audience"} /> Ouïe / clair-audience<br/>
                <input type="checkbox" name="subtiles_perceptions" id="" value={"touch"} /> Toucher / clair-ressenti<br/>
                <input type="checkbox" name="subtiles_perceptions" id="" value={"olfaction"} /> Odorat / clair-olfaction<br/>
                <input type="checkbox" name="subtiles_perceptions" id="" value={"gustative"} /> Goût / clair-gustatif<br/>
                <input type="checkbox" name="subtiles_perceptions" id="" value={"none"} /> Aucune / clair-nada<br/>
                <input type="checkbox" name="subtiles_perceptions" id="" value={"idontknow"} /> Je ne pense pas avoir de perception subtile<br/>
              </fieldset>
            </>}
            <fieldset className='mb-3 form-group'>
              <label htmlFor="">Seriez-vous intéressé(e) par une initiation au 3e oeil et à sa multidimension ?</label>
              <br/>
              <input type="radio" name="is_interested_by_initiation" value={'yes'} id="" onChange={handleChange} /> Oui
              <br/>
              <input type="radio" name="is_interested_by_initiation" value={'no'} id="" onChange={handleChange} /> Non
            </fieldset>
            <fieldset className='mb-3 form-group'>
              <label htmlFor="">Pourquoi ?</label>
              <textarea name="why_are_you_interested_by_initiation" id="" cols={30} rows={10} className={'form-control'} onChange={handleChange}></textarea>
            </fieldset>
            {isInterestedByInitiation()
            ? <>
                <fieldset className='mb-3 form-group'>
                  <label htmlFor="">Quels sujets complémentaires seraient susceptibles de vous intéresser ?</label><br/>
                  <input type="checkbox" name="subjects" id="" /> Vies karmiques<br/>
                  <input type="checkbox" name="subjects" id="" /> Multivers<br/>
                  <input type="checkbox" name="subjects" id="" /> Charkras et corps énergétiques<br/>
                  <input type="checkbox" name="subjects" id="" /> Autres<br/>
                  {wantsOtherSubjects() && <>
                    <textarea name="other_subjects" id="" cols={30} rows={10} className={'form-control'} onChange={handleChange} placeholder={"Merci de faire une liste des sujets que vous aimeriez aborder"}></textarea>
                  </>}
                </fieldset>
                <fieldset className='mb-3 form-group'>
                  <label htmlFor="">Quel serait pour vous le bon équilibre entre contenus écrit, audio et vidéo ?</label>
                  <br/>
                  <input type="checkbox" name="content_type_preference" value={'more_writing'} id="" onChange={handleChange} /> Ecrit de préférence<br/>
                  <input type="checkbox" name="content_type_preference" value={'more_audio'} id="" onChange={handleChange} /> Audio de préférence<br/>
                  <input type="checkbox" name="content_type_preference" value={'more_video'} id="" onChange={handleChange} /> Vidéo de préférence<br/>
                  <input type="checkbox" name="content_type_preference" value={'balanced_mix'} id="" onChange={handleChange} /> Un mix équilibré des trois
                </fieldset>
                <fieldset className='mb-3 form-group'>
                  <label htmlFor="">Pensez-vous avoir besoin d'un suivi pendant la durée de l'initiation ?</label>
                  <br/>
                  <input type="radio" name="need_following" value={'individual'} id="" onChange={handleChange} /> Suivi individuel<br/>
                  <input type="radio" name="need_following" value={'grouped'} id="" onChange={handleChange} /> Suivi groupé<br/>
                  <input type="radio" name="need_following" value={'both'} id="" onChange={handleChange} /> Les deux<br/>
                  <input type="radio" name="need_following" value={'none'} id="" onChange={handleChange} /> Aucun
                </fieldset>
                <fieldset className='mb-3 form-group'>
                  <label htmlFor="">A la fin de cette initiation, seriez-vous intéressé par une immersion de groupe ?</label>
                  <br/>
                  <input type="radio" name="interested_by_immersion" value={'yes'} id="" onChange={handleChange} /> Oui<br/>
                  <input type="radio" name="interested_by_immersion" value={'no'} id="" onChange={handleChange} /> Non
                </fieldset>
                <fieldset className='mb-3 form-group'>
                    <label htmlFor="">Quelle dimension de groupe est la plus confortable pour vous ?</label>
                    <select name="group_size" id="" className={'form-control'} onChange={handleChange}>
                      <option value="1 week-end">Restreint (5 personnes max)</option>
                      <option value="3 days">Moyen (6 à 10 personnes)</option>
                      <option value="1 week">Plus il y a de monde et mieux c'est (10 personnes et plus)</option>
                    </select>
                  </fieldset>
                <fieldset className='mb-3 form-group'>
                  <label htmlFor="">Pourquoi ?</label>
                  <textarea name="why_are_you_interested_by_immersion" id="" cols={30} rows={10} className={'form-control'} onChange={handleChange}></textarea>
                </fieldset>
                  {showTimeForImmersionField()
                  ? <>
                      <fieldset className='mb-3 form-group'>
                        <label htmlFor="">Quelle serait pour vous la durée idéale de l'immersion ?</label>
                        <select name="time_for_immersion" id="" className={'form-control'} onChange={handleChange}>
                          <option value="1 week-end">1 week-end</option>
                          <option value="3 days">3 jours</option>
                          <option value="1 week">1 semaine</option>
                          <option value="other">Autre</option>
                        </select>
                        {showTimeForImmersionOtherField()
                        ? <>
                            <fieldset className='mb-3 form-group'>
                              <label htmlFor="">Quelle durée en jours ?</label>
                              <input type="number" name="custom_time_for_immersion" min={1} id="" className={'form-control'} onChange={handleChange} />
                            </fieldset>
                          </>
                        : <></>}
                      </fieldset>
                    </>
                  : <></>}
                <fieldset className='mb-3 form-group'>
                  <label htmlFor="">Auriez-vous des questions qui concernent l'initiation ?</label>
                  <textarea name="have_you_some_questions" id="" cols={30} rows={10} className={'form-control'} onChange={handleChange}></textarea>
                </fieldset>
                <fieldset className='mb-3 form-group'>
                  <label htmlFor="">Votre email ?</label>
                  <input type="email" name="lead_email" id="" className={'form-control'} onChange={handleChange} />
                </fieldset>
                <fieldset className='mb-3 form-group'>
                  <input type="checkbox" name="agree_for_notification" id="" onChange={handleChange} /> J'accepte d'être prévenu par email à la sortie du guide.
                </fieldset>
              </>
            : <></>}
            <button type="submit" className='btn btn-primary'>Soumettre mes réponses</button>
          </form>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>
          Sondage créé par <a href="mailto:devntech@proton.me" target={'_blank'}>Louis THOMAS</a>
        </p>
      </footer>
    </div>
  )
}
