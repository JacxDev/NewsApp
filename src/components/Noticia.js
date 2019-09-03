import React from 'react';

const Noticia = ({noticia}) => {

    //Extraer los datos con destructuring 
    const { urlToImage, url, title, description, source } = noticia;

    //Condicional para cargar la imagen si existe

    const imagen = (urlToImage) ? 
        <div>
            <img src={urlToImage} alt={title} />
            <span className="card-title"> {source.name}  </span>
        </div>
    : null;

         

    return (
        <div className="col s12 m6 l4">
            <div className="card">
                <div className="card-image">
                    {imagen}
                </div>

                <div className="card-content">
                    <h3> {title} </h3>
                    <p> {description} </p>

                     <div clasName="card-action">
                        <a href={url}  target="_blank" rel="noopener noreferrer" className="waves-effect waves-light btn">
                        Ver Noticia Completa
                        </a>
                    </div>    
                </div>                
            </div>
        </div>
    );
}

export default Noticia;