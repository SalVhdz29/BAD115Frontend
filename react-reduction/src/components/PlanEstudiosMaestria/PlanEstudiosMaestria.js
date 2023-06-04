import React, {Fragment, useState, useEffect} from 'react';
import {
    Row, Col,
    Container,
    Card,CardBody,
    Label, FormGroup,
    Button,
    ButtonToggle
} from 'reactstrap';
import {MdSchool} from 'react-icons/md';
import {
    AvForm, AvField
} from 'availity-reactstrap-validation';
import {FiEye, 
    FiTrash2,
    FiEdit3} from 'react-icons/fi';
import Select from 'react-select';
import swal from 'sweetalert';
import { useHistory, useLocation } from 'react-router-dom';
//Component
import DataTable from '../DataTable/DataTable';
import ModalVerPlanEstudio from './ModalVerPlanEstudio/ModalVerPlanEstudio';
import ModalCrearPlanEstudio from './ModalCrearPlanEstudio/ModalCrearPlanEstudio';
//Json
import { columnas_tabla, datos_maestria } from './Json/columnas_tabla';
//Model
const generalidadesModel={
    nombre_maestria:"",
    codigo_maestria:"",
    descripcion:"",
}
const PlanEstudiosMaestria = props =>{
    const [generalidades, setGeneralidades] = useState(generalidadesModel);
    const [listaPlanEstudio, setListaPlanEstudio] = useState([]);
    const [modalesPlanEstudio, setModalesPlanEstudio] =useState({modalVer:false, modalEditar:false, modalCrear:false})
    const [planEstudioModal, setPlanEstudioModal] = useState(null);
    const [enableEdit, setEnableEdit] = useState(false);
    const [creacionMaestriaflg, setCreacionMaestriaFlg] = useState(false);

    const location = useLocation();
    const history = useHistory();

    useEffect(()=>{
        _inicializar();
    },[]);

    const _inicializar=()=>{
        try{
            //llamada a un servicio.
            const codigo_maestria = location.state.codigo_maestria;
            const {
                nombre_maestria,
                descripcion,
                planes_estudio
            } = datos_maestria;

            const bandera_servicio_edit = true;

            setGeneralidades({
                nombre_maestria,
                codigo_maestria,
                descripcion
            });
            
            const n_planes_estudio=[];

            for(let iterador of planes_estudio){
                const n_plan_estudio = {...iterador};
                n_plan_estudio.operaciones=<Fragment>
                    <ButtonToggle
                        color="success"
                        size="sm"
                        outline
                        title="Ver Plan de Estudio"
                        style={{marginLeft:"5px"}}
                        onClick={()=>{
                            setModalesPlanEstudio({modalVer:true, modalEditar:false});
                            setPlanEstudioModal(iterador.id_plan_estudio)
                        }}
                    >
                        <FiEye />
                    </ButtonToggle>
                </Fragment>

                //agregar un boton de copiar para el director.
                n_planes_estudio.push(n_plan_estudio)
            }

            setEnableEdit(bandera_servicio_edit);
            setListaPlanEstudio(n_planes_estudio);
            console.log("location state: ",location.state);
            let bandera_creacion_maestria = location.state.bandera_creacion_maestria;
            if(bandera_creacion_maestria == null){
                bandera_creacion_maestria=false;
            }
            setCreacionMaestriaFlg(bandera_creacion_maestria);

        }catch(e){
            console.log("Error: ", e);
            swal({
                title:"Error",
                icon:"error",
                text:"Ha ocurrido un error, informar al equipo de informática",
                button:"Aceptar"
            })
        }
    }

    const _continueCreacionMaestria=()=>{
       if(generalidades.nombre_maestria != generalidadesModel.nombre_maestria){
        if(listaPlanEstudio.length > 0){
            swal({
                title:"Siguiente Paso: Malla Curricular",
                icon:"warning",
                text:"¿Desea seguir a la creación de la malla curricular?",
                buttons:["Cancelar","Aceptar"]
              }).then(async respuesta =>{
                if(respuesta){
                  
                  history.push({
                    pathname: "/maya_curricular",
                    state:{
                      codigo_maestria: generalidades.codigo_maestria,
                      bandera_creacion_maestria:true,
                    }
                  });
                }
            });
    
           }else{
            swal({
                title:"Requerido",
                icon:"error",
                text:"Es necesario crear al menos solo 1 plan de estudio antes de continuar",
                button:"Aceptar"
            });
           }
       }else{
        swal({
            title:"Requerido",
            icon:"error",
            text:"Es necesario establecer la información general de la maestria",
            button:"Aceptar"
        });
       }
       
    }


    return(
        <Fragment>
            <div className="page-content">
                <Container fluid={true}>
                    <Card>
                        <CardBody>
                        <h4> <MdSchool /> &nbsp;&nbsp;<b> Maestria - Plan de Estudios</b> </h4><br/>

                        <Row>
                            <Col>
                                <Card>
                                    <CardBody>
                                        <Label style={{textDecoration:"underline"}}><b>Generalidades</b></Label>
                                        <AvForm>
                                            <Row>
                                                <Col>
                                                    <div className="generalidadesDivRow" style={{display:"flex", flexDirection:"column"}}>
                                                        <FormGroup>
                                                            <Label>Nombre Maestria:</Label>
                                                            <AvField
                                                                id="nombreMaestriaIpx"
                                                                name="nombreMaestriaIpx"
                                                                value={generalidades.nombre_maestria}
                                                                onChange={(v)=>{
                                                                    setGeneralidades({...generalidades,nombre_maestria:v })
                                                                }}
                                                                disabled={!enableEdit}
                                                            />
                                                        </FormGroup>
                                                        <FormGroup>
                                                            <Label>Codigo Maestria:</Label>
                                                            <AvField
                                                                id="codigoMaestriaIpx"
                                                                name="codigoMaestriaIpx"
                                                                value={generalidades.codigo_maestria}
                                                                onChange={(v)=>{
                                                                    setGeneralidades({...generalidades,codigo_maestria:v })
                                                                }}
                                                                disabled={!enableEdit}
                                                            />
                                                        </FormGroup>
                                                    </div>
                                                    
                                                </Col>
                                                <Col>
                                                    <div>
                                                        <FormGroup>
                                                            <Label>
                                                                Descripción:
                                                            </Label>
                                                            <AvField 
                                                                id="descripcionIpx" 
                                                                name="descripcionIpx"
                                                                value={generalidades.descripcion}
                                                                onChange={(v)=>{
                                                                    setGeneralidades({...generalidades,descripcion:v })
                                                                }}
                                                                disabled={!enableEdit}
                                                                type="textarea"></AvField>
                                                        </FormGroup>
                                                    </div>
                                                    <br />
                                                    {enableEdit?(
                                                        <center><Button color="warning" outline> Solicitar Actualización</Button></center>
                                                    ):(
                                                        <div></div>
                                                    )}
                                                </Col>
                                            </Row>
                                        </AvForm>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                        {/* END DE GENERALIDADES */}
                        <br />
                        <Row>
                            <Col>
                                <Card>
                                    <CardBody>
                                        <Label style={{textDecoration:"underline"}}><b>Planes de estudio</b></Label> <br />
                                        <div style={{display:"flex", flexDirection:"row-reverse", marginBottom:"3%"}}>
                                                {enableEdit?(
                                                    <Button 
                                                    color="success"
                                                    onClick={()=>{setModalesPlanEstudio({modalVer:false, modalEditar:false, modalCrear:true})}} 
                                                    outline>
                                                    Nuevo Plan de Estudios
                                                </Button>
                                                ):(
                                                    <div></div>
                                                )}
                                        </div>
                                        <DataTable
                                            columnasTabla={columnas_tabla}
                                            datosTabla={listaPlanEstudio} 
                                        />
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                        <br />
                       {creacionMaestriaflg === true?(
                         <div style={{display:"flex", flexDirection:"row-reverse"}}>
                            <Button className="btn" color="success" outline onClick={()=>_continueCreacionMaestria()}>
                                Siguiente paso: Malla Curricular
                            </Button>
                        </div>
                       ):(
                        <div></div>
                       )}
                        <br/>


                        {/* END del MAIN CONTENT */}
                        </CardBody>
                    </Card>
                </Container>
                <ModalVerPlanEstudio modalOpen={modalesPlanEstudio.modalVer} idPlanEstudio={planEstudioModal} recargarPadre={()=>{
                    setModalesPlanEstudio({modalVer:false, modalEditar:false});
                    setPlanEstudioModal(null);
                }} />
                <ModalCrearPlanEstudio modalOpen={modalesPlanEstudio.modalCrear}
                    recargarPadre={()=>{
                        setModalesPlanEstudio({modalCrear:false, modalVer:false, modalEditar:false});
                        setPlanEstudioModal(null);
                        _inicializar();
                    }}
                />
            </div>
        </Fragment>
    );
}

export default PlanEstudiosMaestria;