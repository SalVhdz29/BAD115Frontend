import React, {Fragment, useState, useEffect} from 'react';
import {
    Row, Col,
    Container,
    Card, CardBody, CardHeader,
    Label, FormGroup, Input,
    Button, ButtonToggle
} from 'reactstrap';
import {MdSchool} from 'react-icons/md';
import { FaPlus, FaTrashAlt } from 'react-icons/fa';
import Select from 'react-select';
import swal from 'sweetalert';
import { DateTime } from 'luxon';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { useHistory, useLocation } from 'react-router-dom';
//Component
import DataTable from '../DataTable/DataTable';
import DateSelector from '../DateSelector/DateSelector';
//Json
import { 
    columnas_tabla,
    lista_tipos_evaluacion,
    lista_unidades_evaluacion,
    lista_evaluaciones
 } from './Json/columnas_tabla';

//css
import './css/estilos.css';


const SistemaEvaluacion = props =>{
    
    const [idProgramaAsignatura, setIdProgramaAsignatura] = useState(null);
    const [listaEvaluaciones, setListaEvaluaciones] = useState([]);
    const [filasEvaluaciones, setFilasEvaluaciones] = useState([]);
    const [listaTipoEvaluacion, setListaTipoEvaluacion] = useState([]);
    const [listaUnidadesEvaluacion, setListaUnidadesEvaluacion] = useState([]);
    const [identificadorLocalSiguiente, setIdentificadorLocalSiguiente] = useState(0);
    const [sumaPorcentaje, setSumaPorcentaje] = useState(0);

    const history = useHistory();
    const location = useLocation();

    useEffect(()=>{
        _inicializar();
    },[]);

    useEffect(()=>{
        if(listaTipoEvaluacion!= null && listaUnidadesEvaluacion != null){
            _inicializarListaEvaluaciones();
        }
    },[listaTipoEvaluacion, listaUnidadesEvaluacion])

    useEffect(()=>{
        if(listaEvaluaciones != null){
            _formarFilasEvaluaciones()
        }
    },[listaEvaluaciones])

    const _inicializar=()=>{
        try{
            //const id_programa_asignatura = location.state.id_programa_asignatura;
            //llamada de generales.
            setListaUnidadesEvaluacion(lista_unidades_evaluacion);
            setListaTipoEvaluacion(lista_tipos_evaluacion);

        }catch(e){
            console.log("Error: ",e)
            swal({
                title:"Error",
                icon:"error",
                text:"Error al inicializar la pantalla, contactar con el departamento de informática."
            });
        }
    }

    const _inicializarListaEvaluaciones=()=>{
        try{
            let n_lista=[]
            let identificador_local=1;
            for(let it of lista_evaluaciones){
                if(it != null){
                    n_lista.push({...it, identificador_local});
                    identificador_local++;
                }
            }
            setListaEvaluaciones(n_lista);
            setIdentificadorLocalSiguiente(identificador_local);

        }catch(e){
            console.log("Error: ",e)
            swal({
                title:"Error al obtener datos",
                icon:"error",
                text:"Ha ocurrido un error al obtener las evaluaciones, informar al equipo de desarrollo",
                button:"Aceptar"
            });
        }
    }

    const _formarFilasEvaluaciones=()=>{

        const n_filas=[];
        const contenidos_ocupados=[];
        let suma_porcentaje=0;
        

        let i=1;
        for(let iterador_evaluaciones of listaEvaluaciones){
            if(iterador_evaluaciones != null){
                for(let iterador_contenidos of iterador_evaluaciones.contenidos){
                    contenidos_ocupados.push(iterador_contenidos);
                }

                let porcentaje_iterador = 0;
                if(isNaN(iterador_evaluaciones.porcentaje) == false){
                    porcentaje_iterador = Number(iterador_evaluaciones.porcentaje);
                }
                suma_porcentaje = suma_porcentaje + porcentaje_iterador;
            }
        }



        for(let iterador_evaluaciones of listaEvaluaciones){
            if(iterador_evaluaciones != null){
    

                const unidades_disponibles=[];
               

                //obteniendo unidades disponibles.
                for(let it_unidades of listaUnidadesEvaluacion){
                    const {contenidos} = it_unidades;
                    let disponibles = false;

                    for(let it of contenidos){
                        if(contenidos_ocupados.includes(it.id_contenido) == false){
                            disponibles = true;
                        }
                    }

                    if(disponibles == true){
                        unidades_disponibles.push(it_unidades);
                    }

                }//for unidades disponibles

                const unidades_escogidas=[];
                const contenidos_escogidos=[];
                const contenidos_disponibles=[];
                for(let it_unidades of iterador_evaluaciones.unidades){
                    if(it_unidades != null){
                
                        let correspondiente = listaUnidadesEvaluacion.find(it=>it.id_unidad === it_unidades);
                        unidades_escogidas.push(correspondiente);
    
                        const {contenidos} = correspondiente;
                        for(let iterador_contenidos of contenidos){
                            if(contenidos_ocupados.includes(iterador_contenidos.id_contenido) == false){
                                contenidos_disponibles.push(iterador_contenidos);
                            }
                        }
                    }
                }

                for(let it_contenidos of iterador_evaluaciones.contenidos){
                    if(it_contenidos != null){
                        for(let unidad of listaUnidadesEvaluacion){
                            let correspondiente = unidad.contenidos.find(ite=>ite.id_contenido === it_contenidos);
                            if(correspondiente != null){
                                contenidos_escogidos.push(correspondiente);
                            }
                        }
                    }
                }

                const unidades_evaluacion=<Fragment>
                    <Select
                        id={"SelectUnidades"+i}
                        name={"SelectUnidades"+i}
                        value={unidades_escogidas}
                        options={unidades_disponibles}
                        isMulti
                        onChange={(val)=>{_actualizarUnidadesEvaluacion(val, iterador_evaluaciones.identificador_local)}}
                        placeholder="Seleccione una unidad o más de una"

                    />
                    {unidades_escogidas.length == 0?(
                        <p style={{color:"red"}}>Error</p>
                    ):(<span></span>)}
                </Fragment>

                const contenidos_evaluacion =<Fragment>
                    <Select
                        id={"SelectContenidos"+i}
                        name={"SelectContenidos"+i}
                        value={contenidos_escogidos}
                        options={contenidos_disponibles}
                        isMulti
                        onChange={(val)=>{_actualizarContenidosEvaluacion(val, iterador_evaluaciones.identificador_local)}}
                        placeholder="Seleccione un contenido o más de uno"
                    />
                    {contenidos_escogidos.length == 0?(
                        <p style={{color:"red"}}>Error</p>
                    ):(<span></span>)}
                </Fragment>
                let fechaEva='';
                if(typeof iterador_evaluaciones.fecha_evaluacion === 'string'){
                    fechaEva= DateTime.fromISO(iterador_evaluaciones.fecha_evaluacion);
                }else{
                    fechaEva = DateTime.fromJSDate(iterador_evaluaciones.fecha_evaluacion);
                }
                
                const fecha = <Fragment>
                    <DateSelector
                        fechaSeleccionada={fechaEva}
                        cambioFecha={(val)=>{_actualizarFechaEvaluacion(val, iterador_evaluaciones.identificador_local)}}
                    />
                </Fragment>
                const tipo_evaluacion_correspondiente = listaTipoEvaluacion.find(it=>it.id_tipo_evaluacion === iterador_evaluaciones.id_tipo_evaluacion);
                const tipo_evaluacion = <Fragment>
                    <Select
                        id={"SelectTipoEvalucion"+i}
                        name={"SelectTipoEvalucion"+i}
                        options={listaTipoEvaluacion}
                        value={tipo_evaluacion_correspondiente}
                        onChange={(val)=>{_actualizarTipoEvaluacion(val, iterador_evaluaciones.identificador_local)}}
                        placeholder="Seleccione un tipo de evaluación"
                    />
                    {tipo_evaluacion_correspondiente === null?(
                        <p style={{color:"red"}}>Error</p>
                    ):(<span></span>)}
                </Fragment>

                const porcentaje_eva=<Fragment>
                    <Input
                        value={iterador_evaluaciones.porcentaje}
                        type="number"
                        onChange={(e)=>{_actualizarPorcentajeEvaluacion(e.target.value, iterador_evaluaciones.identificador_local)}}
                    />
                    {iterador_evaluaciones.porcentaje === null || iterador_evaluaciones.porcentaje === "" || isNaN(iterador_evaluaciones.porcentaje) == true || suma_porcentaje > 100?(
                        <p style={{color:"red"}}>Error</p>
                    ):(<span></span>)}
                </Fragment>

                const operaciones =<Fragment>
                    <ButtonToggle color="danger" outline onClick={()=>{
                        swal({
                            title:"Eliminar Evaluación",
                            icon:"warning",
                            text:"¿Desea eliminar la evaluación?",
                            buttons:["Cancelar","Aceptar"]
                        }).then(async respuesta =>{
                            if(respuesta){
                                _eliminarEvaluacion(iterador_evaluaciones.identificador_local);
                            }
                        })
                    }}>
                        <FaTrashAlt />
                    </ButtonToggle>
                </Fragment>

                let n_fila={
                    ...iterador_evaluaciones,
                    unidades_evaluacion,
                    contenidos_evaluacion,
                    numero_fila:i,
                    porcentaje_eva,
                    fecha,
                    tipo_evaluacion,
                    operaciones
                }
                i++;

                n_filas.push(n_fila);
            }
        }

        setFilasEvaluaciones(n_filas);
        setSumaPorcentaje(suma_porcentaje)

    }

    const _actualizarTipoEvaluacion = (value, identificador_local) =>{
        const n_lista=[];
        for(let iterador of listaEvaluaciones){
            if(iterador != null){
                let n_item = {...iterador};
                if(n_item.identificador_local === identificador_local){
                    n_item.id_tipo_evaluacion = value.value;
                }
                n_lista.push(n_item);
            }
        }

        setListaEvaluaciones(n_lista);
    }

    const _actualizarUnidadesEvaluacion=(value, identificador_local)=>{
        const n_lista=[];
        for(let iterador of listaEvaluaciones){
            if(iterador != null){
                let n_item = {...iterador};
                if(n_item.identificador_local === identificador_local){
                    let n_unidades =[];
                    let n_contenidos=[];
                    if(value != null){
                        for(let i of value){
                            n_unidades.push(i.value);
                            let correspondiente = listaUnidadesEvaluacion.find(ite=>ite.id_unidad === i.value);
                            let {contenidos} = correspondiente;
                            for(let j of contenidos ){
                                if(n_item.contenidos.find(k=>k === j.id_contenido)){
                                    n_contenidos.push(j.id_contenido);
                                }
                            }
                        }
                    }
                    n_item.unidades=n_unidades;
                    n_item.contenidos = n_contenidos;
                }
                n_lista.push(n_item);
            }
        }
        setListaEvaluaciones(n_lista);
    }

    const _actualizarContenidosEvaluacion=(value, identificador_local)=>{
        const n_lista=[];
        for(let iterador of listaEvaluaciones){
            if(iterador != null){
                let n_item = {...iterador};
                if(n_item.identificador_local === identificador_local){
                    let n_unidades =[];
                    let n_contenidos=[];
                    if(value != null){
                        for(let i of value){
                            n_contenidos.push(i.value);
                            for(let iterador_unidades of listaUnidadesEvaluacion){
                                let coincidencia = iterador_unidades.contenidos.find(j => j.id_contenido === i.value);
                                console.log("COINCIDENCIA: ",coincidencia)
                                if(coincidencia != null && n_unidades.includes(iterador_unidades.id_unidad) == false){
                                    n_unidades.push(iterador_unidades.id_unidad);
                                }
                            }
                            // n_unidades.push(i.value);
                            // let correspondiente = listaUnidadesEvaluacion.find(ite=>ite.id_unidad === i.value);
                            // let {contenidos} = correspondiente;
                            // for(let j of contenidos ){
                            //     if(n_item.contenidos.find(k=>k === j.id_contenido)){
                            //         n_contenidos.push(j.id_contenido);
                            //     }
                            // }
                        }
                    }
                    n_item.unidades=n_unidades;
                    n_item.contenidos = n_contenidos;
                }
                n_lista.push(n_item);
            }
        }
        setListaEvaluaciones(n_lista);
    }

    const _actualizarPorcentajeEvaluacion=(value, identificador_local)=>{
        const n_lista=[];
        for(let iterador of listaEvaluaciones){
            if(iterador != null){
                let n_item = {...iterador};
                if(n_item.identificador_local === identificador_local){
                    n_item.porcentaje = value;
                }
                n_lista.push(n_item);
            }
        }

        setListaEvaluaciones(n_lista);
    }

    const _actualizarFechaEvaluacion=(value, identificador_local)=>{
        const n_lista=[];
        for(let iterador of listaEvaluaciones){
            if(iterador != null){
                let n_item = {...iterador};
                if(n_item.identificador_local === identificador_local){
                    console.log("value: ", value)
                    let fecha = value.fecha;
                    n_item.fecha_evaluacion = fecha;
                }
                n_lista.push(n_item);
            }
        }
        setListaEvaluaciones(n_lista);
    }
    const _eliminarEvaluacion=(identificador_local)=>{
        const n_lista=[];
        for(let iterador of listaEvaluaciones){
            if(iterador != null){
                let n_item = {...iterador};
                if(n_item.identificador_local !== identificador_local){
                    n_lista.push(n_item);
                }
               
            }
        }

        setListaEvaluaciones(n_lista);
    }

    const _agregarEvaluacion=()=>{
        const contenidos_ocupados=[];
        const unidades_disponibles=[];
        

        let i=1;
        for(let iterador_evaluaciones of listaEvaluaciones){
            if(iterador_evaluaciones != null){
                for(let iterador_contenidos of iterador_evaluaciones.contenidos){
                    contenidos_ocupados.push(iterador_contenidos);
                }
            }
        }
        for(let iterador_evaluaciones of listaEvaluaciones){
            if(iterador_evaluaciones != null){
               

                //obteniendo unidades disponibles.
                for(let it_unidades of listaUnidadesEvaluacion){
                    const {contenidos} = it_unidades;
                    let disponibles = false;

                    for(let it of contenidos){
                        if(contenidos_ocupados.includes(it.id_contenido) == false){
                            disponibles = true;
                        }
                    }

                    if(disponibles == true){
                        unidades_disponibles.push(it_unidades);
                    }

                }//for unidades disponibles
            }
        }

        if(unidades_disponibles.length > 0){
            const n_lista =[...listaEvaluaciones];
            const n_item={
                identificador_local:identificadorLocalSiguiente,
                id_tipo_evaluacion:1,
                unidades:[],
                contenidos:[],
                fecha_evaluacion: new Date(),
                porcentaje:0
            }

            n_lista.push(n_item);
            setListaEvaluaciones(n_lista);
            setIdentificadorLocalSiguiente(identificadorLocalSiguiente+1);
        }else{
            swal({
                title:"Unidades de Estudio Cubiertas",
                icon:"error",
                text:"No quedan unidades de evaluación disponibles.",
                button:"Aceptar"
            })
        }
    }

    return(
        <Fragment>
            <div className="page-content">
                <Container fluid={true}>
                    <Card>
                        <CardHeader>
                            <Row>
                                <Col>
                                    <h4> <MdSchool /> &nbsp;&nbsp;<b> Sistema de Evaluación</b> </h4>
                                </Col>
                            </Row>
                        </CardHeader>
                        <CardBody>
                            <Row>
                                <Col>
                                        <Button color="success" outline onClick={()=>{_agregarEvaluacion()}}>
                                           <FaPlus />&nbsp;Agregar Evaluación
                                           
                                        </Button>
                                </Col>
                            </Row>
                            <br />
                            <Row>
                                <Col>
                                    {sumaPorcentaje > 100?(<p style={{color:"red"}}>*Error: los porcentajes suman mayor a 100</p>):(<span></span>)}
                                </Col>
                            </Row>
                            <br />
                            <Row>
                                <Col>
                                    <DataTable
                                        columnasTabla={columnas_tabla}
                                        datosTabla={filasEvaluaciones} 
                                    />
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Container>
            </div>
        </Fragment>
    );

}

export default SistemaEvaluacion;