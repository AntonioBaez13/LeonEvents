import DatesList from "./DateHolderComponent";

function MainContent(props:object){
    return(
        <div className="main-page-content ">
            <div className="long-list-section">
                <h1>Leon - Eventos</h1>
                <DatesList></DatesList>
            </div>
            <div className="filters-and-adds">
                Aqui Iran los filtros y Anuncios
            </div>
        </div>
    );
}

export default MainContent;