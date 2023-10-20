import { useEffect, useState } from "react";

import styles from './ReposList.module.css';

const ReposList = ({nomeUsuario}) => {
    const [repos, setRepos] = useState([]);

    useEffect (() => {
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
        .then(res => res.json())
        .then(resJson => {
            setRepos(resJson);
        })
    }, [nomeUsuario]);
    return (
        <div className="container">
        <ul className={styles.list}>
            {repos.map(repositorio => (
                <li className={styles.item} key={repositorio.id}>
                    <div className={styles.name}>
                    <b>Nome:</b> {repositorio.name} 
                    </div>
                    <div className={styles.language}>
                    <b>Linguagem:</b> {repositorio.language} 
                    </div>
                    <a className={styles.link} target="_blank" href={repositorio.html_url}>Visitar no GitHub</a>
                </li>
            ))}
            <li>Repositórios</li>
        </ul>
        </div>
    )
}

export default ReposList;