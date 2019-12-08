//Se crean directivas del modulo angular asignado a la variable js (app)
//Estas directivas, en este caso son para reemplazar determinadas etiquetas de html con el archivo html de las pantallas
app.directive('barraVeterinaria',function () { //Si se crea la directiva con el nombre 'barraPrincipal', entonces la etiqueta html que se usará será
                                            // <barra-principal> que será colocada en el index.html
    return{
        restrict:'E',
        templateUrl:'pantallas/barraPrincipal.html'
    }
    //esta restricción indica que son templates creo xddd
    //se ingresa la ubicación del archivo html que será reemplazado en la etiqueta html de arriba
});

app.directive('dueno',function () { 
                                            
    return{
        restrict:'E',
        templateUrl:'pantallas/barraPrincipal2.html'
    }
});

app.directive('datosSede',function () { 
    return{
        restrict:'E',
        templateUrl:'pantallas/datosSede.html'
    }
});

app.directive('promociones',function () {
    return{
        restrict:'E',
        templateUrl:'pantallas/promociones.html'
    }
});

app.directive('campanaEsteril',function () {
    return{
        restrict:'E',
        templateUrl:'pantallas/campanaEsteril.html'
    }
});

app.directive('productos',function () {
    return{
        restrict:'E',
        templateUrl:'pantallas/productos.html'
    }
});

app.directive('servicios',function () {
    return{
        restrict:'E',
        templateUrl:'pantallas/servicios.html'
    }
});


