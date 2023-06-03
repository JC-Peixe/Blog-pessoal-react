import styles from './Banner.module.css'
import circuloColorido from 'assets/circulo_colorido.png'
import minhaFoto from 'assets/foto_minha.png'

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, Mundo!
                </h1>

                <p className={styles.paragrafo}>
                    Olá, me chamo Peixe, Atualmente personal Trainer, mas um futuro Dev Front-End! Seja Bem-vindo(a)!
                </p>
            </div>
            <div className={styles.imagens}>
                <img
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    aria-hidden={true}
                    alt="círculo gradiente"
                />
                <img
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt="foto de Peixe Araújo"
                />
                
            </div>
        </div>
    )
}