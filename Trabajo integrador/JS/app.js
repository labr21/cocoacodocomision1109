
function resumen()
{
    var cant = document.getElementById("cantidadEntradas").value;
    var cant=parseInt(cant);
    var operation = document.getElementById("inputSelect").value;
    var monto=200;
    var resultado = 0;
    if (operation=="estudiante" ){
       resultado = cant *((80 * 200)/100);  
    }else if (operation=="trainee" ){
        resultado = cant * ((50 * 200)/100);
    }else{
        resultado =cant * ((15 * 200)/100);
    }
    document.getElementById("result").innerHTML="Cantidad a pagar: $ "+ resultado;
}

let container = document.getElementById("seccion");
const comprarTicket=()=>{
    container.innerHTML=`
    <div class=container>
        <div class="row">
            <div class="col col.md-10 offset-md-1 col-lg-8 offset-lg-2 pt-2">
                <div class="card-group">
                    <div class ="card">
                        <div class="card-body border border-primary mr-1">
                            <h5 class="card-title text-center">Estudiantes</h5>
                            <p class="card-text text-center">Tienen un descuento</p> 
                            <p class="card-title text-center font-weight-bold">80%</p>
                            <p class="card-text text-center">
                                <small class= "text-muted">
                                    *presentar documentación
                                </small>
                            </p>
                        </div>
                    </div>
                    <div class ="card">
                        <div class="card-body border border-primary mr-1">
                            <h5 class="card-title text-center">Trainee</h5>
                            <p class="card-text text-center">Tienen un descuento</p> 
                            <p class="card-title text-center font-weight-bold">50%</p>
                            <p class="card-text text-center">
                                <small class= "text-muted">
                                    *presentar documentación
                                </small>
                            </p>
                        </div>
                    </div>
                    <div class ="card">
                        <div class="card-body border border-primary mr-1">
                            <h5 class="card-title text-center">Junior</h5>
                            <p class="card-text text-center">Tienen un descuento</p> 
                            <p class="card-title text-center font-weight-bold">15%</p>
                            <p class="card-text text-center">
                                <small class= "text-muted">
                                    *presentar documentación
                                </small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col text-uppercase text-center">
                <small>venta</small>
                <h2>valor del ticket $200</h2>
            </div>
        </div>
        <div class="row">
            <div class="col col.md-10 offset-md-1 col-lg-8 offset-lg-2 pt-2">
               <form id="formTicket"> 
                    <div class="form-row">
                        <div class="d-flex">
                            <div class="form-row col-6 col-md-6 m-1">
                                <input type="text" class="form-control" placeholder="Nombre"/>
                            </div>
                            <div class="form-row col-6 col-md-6 m-1">
                                <input type="text" class= "form-control" placeholder="Apellido"/>
                            </div>
                        </div>
                    </div>
                    <div class= "form-group col-6 col-md-12 m-1">
                        <input type ="email" class="form-control" placeholder="Correo"/>
                    </div>
                    <div class="d-flex">
                        <div class="form-group col-6 col-md-6 m-1">
                            <label for="cantidad">Cantidad</label>
                            <input id="cantidadEntradas" type="text" class="form-control" placeholder="Cantidad"/>
                        </div>
                        <div class="form-group col-6 col-md-6 m-1">
                            <label for="">Categoria</label>
                            <Select class="form-select" id="inputSelect">
                                <option id="estudiante" value="estudiante">Estudiante</option>
                                <option id="trainee" value="trainee">Trainee</option>
                                <option id="junior" value="junior">Junior</option>
                            </Select>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="alert alert-primary m-3" role="alert">                  
                            <label id="result">Cantidad a pagar: $</label>
                        </div>
                    </div>
                    <div class="form-row d-flex">
                        <button class="btn btn-lg btn-success col-6 m-1">Borrar</button>         
                        <input class="btn btn-lg btn-success col-6 m-1" onclick="resumen()" value="Resumen">
                        </div>
                    
                </form>
            </div> 
        </div>    
    </div>

    `;

};
