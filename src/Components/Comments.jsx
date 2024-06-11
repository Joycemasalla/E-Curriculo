import styles from './comments.module.css'

export function Comments(){
    return(
        <div className={styles.comments}>
            <img src="https://cdn-icons-png.flaticon.com/512/5672/5672174.png" alt="icone" />
            <div className={styles.commentsBox}>
                <div className={styles.commentsContent}>
                    <header>
                        <div>
                            <strong> Experiência 1</strong>
                        </div>
                    </header>
                    <p>Recepcionista e Auxiliar de treino</p>
                </div>
                <div className={styles.commentsContent}>
                    <header>
                        <div>
                            <strong> Experiência 2</strong>
                        </div>
                    </header>
                    <p>Atendente</p>
                </div>
            </div>
        </div>
    
    )
}