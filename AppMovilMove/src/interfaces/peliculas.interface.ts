/**
 * Created by Diego Villavicencio on 20/8/2017.
 */
export interface Pelicula {
  titulo: string;
  sinopsis: string;
  imgen: string;
  fechaLanzamiento: string;
  financiero: {
    presupuesto: string,
    ingresos
  };
  origen:{
    idioma: string,
    pais: any
  };
  popularidad:{
    votos :number,
    views: number
  }
  genero: any;
  companias:any;
  id:string;
  idPeli:string;

}
