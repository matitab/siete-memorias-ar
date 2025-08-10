let marcadorActivo = 0; //Marcador por defecto
export const setMarcadorActivo = (indice) => {
    marcadorActivo = indice;
    console.log('El marcador activo es: ', marcadorActivo); //para test
}
export const getMarcadorActivo = () => {
    return marcadorActivo;
}