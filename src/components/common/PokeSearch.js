import '../../Styles/ComponentsCss/PokeSearch.scss';
const PokeSearch = () => {
    return ( 
        <section class="main">
        <h2 class="main__title">¿Qué Pokemon buscas?</h2>
        <input
          class="input"
          type="text"
          placeholder="Buscar... (Escribe el nombre del Pokemon)"
        />
      </section>
        );
}
 
export default PokeSearch;