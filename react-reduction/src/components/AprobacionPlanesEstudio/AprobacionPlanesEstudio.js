import React, { Fragment, useEffect, useState } from "react";
import { Container,
    Row, Col,
    ButtonToggle,
    Label,FormGroup,
    Card,
    CardHeader,CardBody
 } from "reactstrap";
import Select from 'react-select';
import swal from "sweetalert";
import {
    MdSchool,
    MdWarningAmber,
    MdViewHeadline
} from 'react-icons/md';
import {
    Menu,
    Item,
    useContextMenu,
} from "react-contexify/dist/index.js";
import {FiEye, 
    FiCheck,
    FiEdit3} from 'react-icons/fi';

//Component
import DataTable from "../DataTable/DataTable";
import ModalVerPlanEstudio from '../PlanEstudiosMaestria/ModalVerPlanEstudio/ModalVerPlanEstudio';
import ModalRechazoObservaciones from "./ModalRechazoObservaciones/ModalRechazoObservaciones";
//json
import { columnas_tabla, datos_prueba_json } from "./Json/data_prueba";
//models
const planesEstudioModel={
    lista_planes_estudio:[],
    filas_planes_estudio:[]
}
const filtroMaestriaModel={
    listado_maestrias:[],
    maestria_filtro:null
}
const filtroEstadoModel={
    listado_estado:[],
    estado_filtro:null,
}
const planEstudioVerModel={
    id_plan_estudio:null,
    modal_open:false
}

const AprobacionPlanesEstudio = props =>{
    const [planesEstudio, setPlanesEstudio] = useState(planesEstudioModel);
    const [filasPlanesEstudio, setFilasPlanesEstudio] = useState([]);
    const [filtroMaestria, setFiltroMaestria] = useState(filtroMaestriaModel);
    const [filtroEstado, setFiltroEstado] = useState(filtroEstadoModel);
    const [planEstudioVer, setPlanEstudioVer] = useState(planEstudioVerModel);
    const [planEstudioObservaciones, setPlanEstudioObservaciones] = useState(planEstudioVerModel);
    const [planEstudioDesicion, setPlanEstudioDesicion] = useState(null);
    //menu
    const MENU_ID = "menu-id-aprobacion-planes-estudio-options";
    const {show} = useContextMenu({
        id: MENU_ID,
    });
    useEffect(()=>{
        _inicializar();
    },[]);

    useEffect(()=>{
        if(planesEstudio.lista_planes_estudio != null){
            _formarFilas();
        }
    },[planesEstudio.lista_planes_estudio, filtroMaestria.maestria_filtro, filtroEstado.estado_filtro]);

    const _inicializar=()=>{
        try{
            //llamada
            const {planes_estudio, lista_estados, lista_maestrias} = datos_prueba_json;
            setPlanesEstudio({...planesEstudio, lista_planes_estudio: planes_estudio});
            setFiltroEstado({...filtroEstado, listado_estado: lista_estados});
            setFiltroMaestria({...filtroMaestria, listado_maestrias: lista_maestrias});

            
        }catch(e){
            console.log("Error: ",e)
            swal({
                title:"Error al obtener los datos",
                icon:"error",
                text:"Ha ocurrido un error al obtener los datos, informar al equipo de desarrollo",
                button:"Aceptar"
            })
        }
    }
    const _formarFilas=()=>{
        const n_maestria_filtro=[];
        const n_estado_filtro=[];
        const n_filas=[];

        if(filtroMaestria.maestria_filtro != null){
            for(let iterador of filtroMaestria.maestria_filtro){
                console.log("iterador: ", iterador)
                n_maestria_filtro.push(iterador.codigo_maestria);
            }
        }

        if(filtroEstado.estado_filtro != null){
            for(let iterador of filtroEstado.estado_filtro){
                n_estado_filtro.push(iterador.value);
            }
        }
        let i = 1;
        for(let iterador of planesEstudio.lista_planes_estudio){
            if((n_maestria_filtro.length === 0 || n_maestria_filtro.includes(iterador.maestria.codigo_maestria)) === true 
            && (n_estado_filtro.length === 0 || n_estado_filtro.includes(iterador.estado.id_estado)) === true){
                
                const operaciones = <Fragment>
                    <ButtonToggle
                    color="success"
                    size="sm"
                    outline
                    onClick={()=>{
                        setPlanEstudioVer({
                            modal_open:true,
                            id_plan_estudio: iterador.id_plan_estudio
                        })
                    }}
                    style={{margin:"5px"}}>
                        <FiEye />
                    </ButtonToggle>
                    <ButtonToggle
                    color="info"
                    size="sm"
                    outline
                    onClick={
                        (e)=>{
                            _displayOptionMenu(e, iterador.id_plan_estudio)
                        }
                    }>
                        <MdViewHeadline />
                    </ButtonToggle>
                </Fragment>;

                n_filas.push({
                    numero_fila:i,
                    autor: iterador.autor.nombre_autor,
                    nombre_maestria: iterador.maestria.nombre_maestria,
                    estado: iterador.estado.estado,
                    titulo_otorgado: iterador.titulo_otorgado,
                    fecha_creacion: iterador.fecha_creacion,
                    operaciones
                });
                i++;
            }
        }

        setFilasPlanesEstudio( n_filas);

    }

    const _displayOptionMenu=(event, id_plan_estudio)=>{
        event.preventDefault();
        setPlanEstudioDesicion(id_plan_estudio);
        show({
            event,
            props: {
                key: 'value',
            }
        });
    }

    const _handleMenuOption=(type)=>{

        if(type == 1){
            // Aprobar
        }else if(type == 2){
            //Rechazar con Observaciones
            setPlanEstudioObservaciones({modal_open: true, id_plan_estudio: planEstudioDesicion });


        }else if(type == 3){
            //Rechazar
        }
    }


    return(
        <Fragment>
            <div className="page-content">
                <Container fluid={true}>
                    <Card>
                        <CardHeader>
                        <h4> <MdSchool /> &nbsp;&nbsp;<b> Aprobación Plan de Estudio</b> </h4><br/>
                        </CardHeader>
                        <CardBody>
                            <Row>
                                <Col>
                                    <div style={{textDecoration:"underline", fontWeight:"bold"}}>
                                        <Label>Filtros</Label>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <FormGroup>
                                        <Label>Maestria: </Label>
                                        <Select
                                            id="maestriaSelect"
                                            name="maestriaSelect"
                                            options={filtroMaestria.listado_maestrias}
                                            value={filtroMaestria.maestria_filtro}
                                            onChange={(v)=>{setFiltroMaestria({...filtroMaestria, maestria_filtro:v})}}
                                            isMulti
                                            placeholder="Seleccione una o mas de una" 
                                        />
                                    </FormGroup>
                                </Col>
                                <Col>
                                    <FormGroup>
                                        <Label>Estado: </Label>
                                        <Select
                                            id="estadoSelect"
                                            name="estadoSelect"
                                            options={filtroEstado.listado_estado}
                                            value={filtroEstado.estado_filtro}
                                            isMulti
                                            placeholder="Seleccione una o más de una"
                                            onChange={(v)=>{
                                                setFiltroEstado({...filtroEstado, estado_filtro:v});
                                            }}
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <hr />
                            <Row>
                                <Col>
                                    <DataTable
                                        columnasTabla={columnas_tabla}
                                        datosTabla={filasPlanesEstudio}
                                    />
                                </Col>
                            </Row>

                        </CardBody>
                    </Card>
                    <Menu id={MENU_ID} style={{fontSize:"12px"}}>
                        <Fragment>
                            <Item
                                onClick={()=>{_handleMenuOption(1)}}>
                                <div style={{color:'green'}}><FiCheck />&nbsp;Aprobar</div>
                            </Item>
                            <Item
                                onClick={()=>{_handleMenuOption(2)}}>
                                <div style={{color:'orange'}}>
                                    <MdWarningAmber />&nbsp;Rechazar con observaciones
                                </div>
                            </Item>
                            <Item
                                onClick={()=>{_handleMenuOption(3)}}>
                                <div style={{color:'red'}}><FiEdit3 />&nbsp;Rechazar</div>
                            </Item>     
                        </Fragment>
                    </Menu>
                    <ModalVerPlanEstudio
                        idPlanEstudio={planEstudioVer.id_plan_estudio}
                        modalOpen={planEstudioVer.modal_open}
                        recargarPadre={()=>{
                            setPlanEstudioVer(planEstudioVerModel);
                        }} 
                    />
                    <ModalRechazoObservaciones
                        idPlanEstudio={planEstudioObservaciones.id_plan_estudio}
                        modalOpen={planEstudioObservaciones.modal_open}
                        recargarPadre={()=>{
                            setPlanEstudioDesicion(null);
                            setPlanEstudioObservaciones(planEstudioVerModel);
                            _inicializar()
                        }} 
                    />
                </Container>
            </div>
        </Fragment>
    )    
}

export default AprobacionPlanesEstudio;
