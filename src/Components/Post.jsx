import styles from './post.module.css'
import { Comments} from './Comments'
export  function Post() {
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://images.vexels.com/media/users/3/147101/isolated/preview/b4a49d4b864c74bb73de63f080ad7930-instagram-profile-button.png" alt="Perfil"/>                
                <div className={styles. authorInfo}>
                    <strong >Joyce</strong>
                    <br/>
                </div>
                </div>

            </header>
            <div className={styles.content}>
                <h1> Sobre você</h1>
                <p> Estudante dedicada com habilidades sólidas em pensamento crítico e proatividade, buscando oportunidades para aplicar meus conhecimentos acadêmicos e habilidades práticas em um ambiente profissional. Apesar de ainda não ter experiência profissional extensa, estou comprometida em aprender e crescer dentro da área de programação. </p>
                <h1>Formação Acadêmica</h1>
                <strong>Análise e Desenvolvimento de Sistemas</strong>
                <p>Faminas 2024-2026</p>
                <strong>Desenvolvedor FullStack</strong>
                <p>Senai 2023-2024</p>
                <strong>Informática Básica - Office</strong>
                <p>IBR 2022-2023</p>
                <strong>Inglês</strong>
                <p>Bruno Capobiango 2024 -</p>
            </div>
            <form className={styles.commentsForm}>
                <h1>Experiencia Profissional</h1>
            </form>
            <div>
                <Comments/>
            </div>
        </article>
    )

}