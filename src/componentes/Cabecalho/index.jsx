import logo from './logo.png'
import search from './search.png'
import styles from './Cabecalho.module.scss'

export default function Cabecalho(){
    return (
        <header className={styles.cabecalho}>
            <img src={logo} alt="Logo do Alura Space" />
            <div className={styles.cabecalho__container}>
                <input clasName={styles.cabecalho__input} type="text" placeholder="O que Você procura?"/>
                <img src={search} alt="Icone de lupa" />
            </div>
        </header>
    )
}