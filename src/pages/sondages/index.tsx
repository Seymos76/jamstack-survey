import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import { useCreateNewSurvey } from '../../useRequest';
import { instance } from '../../useAxios';

export default function Sondages() {
    const handleSurveyCreationForm = (event) => {
        event.preventDefault();
        console.log('title',event.target[1].value);
        const title = event.target[1].value;
        if (!title) {
            console.error('no title');
        }
        return instance.post('/surveys', {
            title: title,
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    return (
        <div className={styles.container}>
            <Head>
                <title>Sondages enregistrés</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"></link>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Liste des sondages
                </h1>

                <div className={styles.grid}>
                    <form action="https://localhost/api/surveys" className={styles.card} method={"POST"} onSubmit={handleSurveyCreationForm}>
                        <fieldset className={"form-group"}>
                        <label htmlFor="survey_title">Nouveau sondage</label>
                        <input type="text" name="survey_title" id="survey_title" className='form-control' />
                        </fieldset>
                        <button type="submit" className='btn btn-primary'>Créer un nouveau sondage</button>
                    </form>
                </div>

                <div className={styles.grid}>
                    <a href="https://nextjs.org/docs" className={styles.card}>
                        <h3>Documentation &rarr;</h3>
                        <p>Find in-depth information about Next.js features and API.</p>
                    </a>

                    <a href="https://nextjs.org/learn" className={styles.card}>
                        <h3>Learn &rarr;</h3>
                        <p>Learn about Next.js in an interactive course with quizzes!</p>
                    </a>

                    <a
                        href="https://github.com/vercel/next.js/tree/canary/examples"
                        className={styles.card}
                    >
                        <h3>Examples &rarr;</h3>
                        <p>Discover and deploy boilerplate example Next.js projects.</p>
                    </a>

                    <a
                        href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.card}
                    >
                        <h3>Deploy &rarr;</h3>
                        <p>
                            Instantly deploy your Next.js site to a public URL with Vercel.
                        </p>
                    </a>
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

export async function getServerSideProps(context) {
    return {
        props: {}, // will be passed to the page component as props
    }
}
