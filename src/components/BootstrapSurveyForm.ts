import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function BootstrapSurveyForm() {
    return (
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
              <Form.Check type={'checkbox'} name={'content_type'} value={'more_writing'} label={"Préférence pour l'écrit"}/>
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
    )
}