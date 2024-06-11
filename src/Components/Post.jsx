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
                    <span>Estudante</span>
                </div>
                </div>

            </header>
            <div className={styles.content}>
                <p> Sobre você</p>
                <p> onfoengonesdgndngodngds</p>
                <a href="">Link</a>
            </div>
            <form className={styles.commentsForm}>
                <strong>Experiencia Profissional</strong>
                <input type="text" placeholder="Experiencia Profissional"/> 
            </form>
            <div>
                <Comments/>
            </div>
        </article>
    )

}