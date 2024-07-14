import styles from "./PostsRecomendados.module.css";
import PostCard from "componentes/PostCard";
import posts from "json/posts.json";
import { useParams } from "react-router-dom";

export default function PostsRecomendados() {
  const parametros = useParams();

  const listaFiltrada = posts
    .filter((post) => post.id !== Number(parametros.id))
    .sort(() => Math.random() - 0.5)
    .slice(0, 4);

  return (
    <section>
      <h2 className={styles.titulo}>Outros posts que você pode gostar:</h2>
      <ul className={styles.posts}>
        {listaFiltrada.map((postFiltrado) => (
          <li key={postFiltrado.id}>
            <PostCard post={postFiltrado} />
          </li>
        ))}
      </ul>
    </section>
  );
}