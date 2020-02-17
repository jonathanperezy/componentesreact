import React from 'react';

import Pelicula from './Pelicula';
import Descripcion from './Descripcion';

export default function Principal(){
	return (
	   <div>
	     <Pelicula titulo={"Bad Boys 3"}></Pelicula>
		 <Descripcion></Descripcion>
	   </div>
		);
}
