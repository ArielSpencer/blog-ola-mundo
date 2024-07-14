import styles from './SobreMim.module.css';
import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.jpg";
import fotoSobreMim from "assets/sobre_mim_foto.jpg";

function SobreMim() {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo="Sobre Mim">
      <h3 className={styles.subtitulo}>
        Olá, sou Ariel Spencer.
      </h3>
      <img src={fotoSobreMim} alt='Foto astronauta' className={styles.fotoSobreMim} />

      <p className={styles.paragrafo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.</p>

      <p className={styles.paragrafo}>Vivamus malesuada orci eget imperdiet porttitor. Praesent venenatis rutrum nibh. Nulla facilisi. Integer quis nulla vitae nisl ornare pharetra a eu dolor. Vestibulum dictum, ligula sit amet ultrices lacinia, nunc ligula pharetra odio, in hendrerit metus lectus a justo. Suspendisse dignissim ultricies risus, at facilisis orci efficitur non.</p>

      <p className={styles.paragrafo}>Curabitur cursus felis ac augue vehicula, vel convallis augue eleifend. Mauris ut libero nec tortor posuere sodales. Vivamus at arcu ut urna tincidunt tempor. Aenean sollicitudin risus ut dui vehicula, et dictum magna cursus. Vestibulum scelerisque libero eu risus sollicitudin tincidunt. Aenean vel fringilla risus. Nulla luctus feugiat quam. Sed lobortis, quam non tempor vehicula, metus nunc tristique nisi, id convallis mauris neque vel leo.</p>

      <p className={styles.paragrafo}>In non nisl eget risus condimentum convallis. Donec euismod, nunc nec elementum interdum, nisi quam lacinia tortor, in dictum felis quam et erat. Integer et nulla sed justo consectetur commodo. Curabitur fringilla augue sit amet massa pretium, eget interdum libero ultrices. Aliquam erat volutpat. Cras volutpat neque at consectetur tempus.</p>

      <p className={styles.paragrafo}>Quisque elementum elit at est aliquet, in tristique lectus gravida. Vivamus vitae leo at velit pharetra gravida. Duis in mauris libero. Sed a dui ut nulla varius pretium. Maecenas vitae magna elit. Donec venenatis vehicula diam a laoreet. Phasellus sed felis eu erat ultricies porttitor nec in mauris. Donec non vestibulum nunc. Nam ac pretium metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>

    </PostModelo>
  );
}

export default SobreMim;