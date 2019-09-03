import React from 'react';
import Noticia from './Noticia';

const ListaNoticias = ({noticias}) => (
    <div className="row">
        {/* Con el objeto .map se itera en la API u objetos */}
        {noticias.map(noticia => (
            <Noticia 
                key={noticia.url}
                noticia={noticia}
            />

        ))}
    </div>
   
);

export default ListaNoticias;