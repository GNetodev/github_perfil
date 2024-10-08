import { useEffect, useState } from "react";
import styles from "./ReposList.module.css";

const ReposList = ({nomeUsuario}) => {

const [repos, setRepos] = useState([]);
const [estaCarregando, setEstaCarregando] = useState(true);
const [deuErro, setDeuErro] = useState(true);

useEffect(() => {
    setEstaCarregando(true);
    fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
    .then(respota => respota.json())
    .then(respostaJson => {

        setTimeout(() => {

            setEstaCarregando(false);
            setRepos(respostaJson);
        },1500);
    })

    .catch(e => {
        setDeuErro(true);
    })
},[nomeUsuario])

    return (
        <div className="container">
            {estaCarregando ? (
                <h1>Carregando...</h1>   
            ) : (
                <ul className={styles.list}>
                {repos.map(({id, name, language, html_url}) => (
                    <li className={styles.listItem} key={id}>
                        <div className={styles.itemName}>
                            <b>Nome:</b> 
                            {name}
                        </div>
                        <div className={styles.itemLanguage}>
                            <b>Linguagem:</b> 
                            {language}
                        </div>
                        <a className={styles.itemLink} target="_blank" href={html_url}>Visitar no Github</a>
                    </li>
                ))}
            </ul>
            )}
        </div>
    )
}

export default ReposList;