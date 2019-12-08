var bar=app.controller('promoController', function($scope){
  angular.element(document).ready(function () {
        $('.modal').modal({
                dismissible: false, // Modal can be dismissed by clicking outside of the modal
                opacity: .7, // Opacity of modal background
                inDuration: 300, // Transition in duration
                outDuration: 200, // Transition out duration
                startingTop: '4%', // Starting top style attribute
                endingTop: '10%', // Ending top style attribute
                ready: function (modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
                    // alert("Ready");
                    //console.log(modal, trigger);
                },
                complete: function () { /*alert('Closed');*/ } // Callback for Modal close
            });
		$('.datepicker').datepicker({
                firstDay: true, 
                format: 'dd/mm/yyyy',
                i18n: {
                    cancel: 'Cancelar',
                    done: 'Ok',
                    months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
                    monthsShort: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Set", "Oct", "Nov", "Dic"],
                    weekdays: ["Domingo","Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
                    weekdaysShort: ["Dom","Lun", "Mar", "Mie", "Jue", "Vie", "Sab"],
                    weekdaysAbbrev: ["D","L", "M", "M", "J", "V", "S"]
                }
            });
      
        
    }); 
});

var bar=app.controller('productoController', function($scope){
   angular.element(document).ready(function () {
        var table = $('#getproductos');
        table.DataTable({scrollY: "220px",scrollCollapse: true, paging: false, columnDefs: [{ "orderable": false, "targets": [0],className: "removeClass", "targets": [0] }]});
        $("#getproductos_filter").hide();
        $("#getproductos_info").hide();
    });
});

var bar=app.controller('barraController', function($scope){
   angular.element(document).ready(function () {
        $('.sidenav').sidenav();
    });
});

var bar=app.controller('sedeController', function($scope){
   angular.element(document).ready(function () {
        $('.modal').modal({
                dismissible: false, // Modal can be dismissed by clicking outside of the modal
                opacity: .7, // Opacity of modal background
                inDuration: 300, // Transition in duration
                outDuration: 200, // Transition out duration
                startingTop: '4%', // Starting top style attribute
                endingTop: '10%', // Ending top style attribute
                complete: function () { /*alert('Closed');*/ } // Callback for Modal close
            });
    });
    $scope.txtVeterinariaIni="Veterinaria Patitas";
    $scope.txtSedeIni = "Lima";
    
});

var bar=app.controller('campanhaController', function($scope){
   angular.element(document).ready(function () {
       var table = $('#getcampanas');
        table.DataTable({scrollY: "220px",scrollCollapse: true, paging: false, columnDefs: [{ "orderable": false, "targets": [0],className: "removeClass", "targets": [0] }]});
        $("#getcampanas_filter").hide();
        $("#getcampanas_info").hide();
    });
    });



var controlador = app.controller('MyController',function($scope,$http){
    
   $scope.mostrarBarraVeterinaria=true;
    $scope.mostrarDatosSede=false;
    $scope.mostrarPromociones=false;
    $scope.mostrarProductos=false;
    $scope.mostrarServicios=false;
    
    
    $scope.irDatosSede = function(){
        $scope.mostrarBarraVeterinaria=true;
        $scope.mostrarDatosSede=true;
        $scope.mostrarPromociones=false;
        $scope.mostrarProductos=false;
        $scope.mostrarServicios=false;
    };
    $scope.irPromociones = function(){
        $scope.mostrarBarraVeterinaria=true;
        $scope.mostrarDatosSede=false;
        $scope.mostrarPromociones=true;
        $scope.mostrarProductos=false;
        $scope.mostrarServicios=false;
    };
    
    $scope.irProductos = function(){
        $scope.mostrarBarraVeterinaria=true;
        $scope.mostrarDatosSede=false;
        $scope.mostrarPromociones=false;
        $scope.mostrarProductos=true;
        $scope.mostrarServicios=false;
    }
    
    $scope.irServicios = function(){
        $scope.mostrarBarraVeterinaria=true;
        $scope.mostrarDatosSede=false;
        $scope.mostrarPromociones=false;
        $scope.mostrarProductos=false;
        $scope.mostrarServicios=true;
    }
});
var controlador = app.controller('MyController2',function($scope,$http){                                 
    $scope.mostrarBarraDueno=true;
    $scope.mostrarCampanaEsteril=false;
    
    $scope.irCampanaEster = function(){
        $scope.mostrarBarraDueno=true;
        $scope.mostrarCampanaEsteril=true;
    }
    
    // CONFIGURACION DE CONEXION

    $scope.config_json = {
        headers : {
            'Content-Type': 'application/json;charset=utf-8;'
        }
    };
    $scope.config_form = {
        headers : {
            'Content-Type': ' application/x-www-form-urlencoded;'
        }
    };


});

//funciones extra sacadas del gugel por si te sirven xdxd
    function soloNumeros(e){
        var keynum = window.event ? window.event.keyCode : e.which;
        if ((keynum == 8) || (keynum == 46))
            return true;
        return /\d/.test(String.fromCharCode(keynum));
    }

    function soloLetras(e){
        var keynum = window.event ? window.event.keyCode : e.which;
        if ((keynum == 8) || (keynum == 46))
            return true;
        return !/\d/.test(String.fromCharCode(keynum));
    }