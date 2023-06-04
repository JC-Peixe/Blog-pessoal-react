import BotaoPrincipal from 'componentes/BotaoPrincipal'
import styles from './NaoEncontrado.module.css'
import erro404 from 'assets/erro_404.png'
import { Link, useNavigate } from 'react-router-dom'

export default function NaoEncontrado() {
    const navegar = useNavigate();
    
    return (
        <>
        <div className={styles.conteudoContainer}>
            <span className={styles.texto404}>404</span>
            <h1 className={styles.titulo}>
                Ops! Página não encontrada.
            </h1>
            <p className={styles.paragrafo}>
                Tem certeza de que era isso que você estava procurando? Aguarde uns instantes e recarregue a página, ou volte para a página inicial.
            </p>
            <p className={styles.paragrafo}>
                 Aguarde uns instantes e recarregue a página, ou volte para a página inicial.
            </p>
            <div 
            className={styles.botaoContainer}
            onClick={()=>navegar(-1)}
            >

            <BotaoPrincipal tamanho="lg">Voltar</BotaoPrincipal>

                {/* <Link to={`/`}>
                <BotaoPrincipal tamanho="lg">Voltar</BotaoPrincipal>
                </Link> */}
                <img 
                className={styles.imagemCachorro}
                src={erro404}
                alt='Cachoro de óculos vestido como humano'
                />
            </div>
        </div>
        <div className={styles.espacoEmBranco}></div>
        </>
    )

}