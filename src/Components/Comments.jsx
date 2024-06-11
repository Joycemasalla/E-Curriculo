import styles from './comments.module.css'

export function Comments(){
    return(
        <div className={styles.comments}>
            <img src="https://cdn-icons-png.flaticon.com/512/5672/5672174.png" alt="icone" />
            <div>
                <div className={styles.commentsContent}>
                    <header>
                        <div>
                            <strong> Experiência 1</strong>
                        </div>
                    </header>
                    <p>Insira sua experiência</p>
                </div>
            </div>
        </div>
    
    )
}