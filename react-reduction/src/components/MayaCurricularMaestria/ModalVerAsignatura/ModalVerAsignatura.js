import React,{ Fragment, useState, useEffect} from 'react';
import {
    Row, Col,
    Container,
    FormGroup,
    Button,
    Modal,
    Label,
    Input,
    Card, CardBody, CardHeader
} from 'reactstrap';
import swal from 'sweetalert';
import {useHistory, useLocation} from 'react-router-dom';
//Component
import DataTable from '../../DataTable/DataTable';
//Json
import { columnas_tabla_areas_conocimiento, columnas_tabla_prerequisitos, data_asignatura } from './Json/data_muestra';

const ModalVerAsignatura = ({modalOpen, recargarPadre, codigoAsignatura}) => {
    const [modal, setModal] = useState(false);
    const [nombreAsignatura, setNombreAsignatura] = useState("");
    const [listaAreasConocimiento, setListaAreasConocimiento] = useState([]);
    const [listaPrerequisitos, setListaPrerequisitos] = useState([]);
    const history = useHistory();

    useEffect(()=>{
        if(modalOpen != null && modalOpen != false){
            _toggleModal();
        }
        if(modalOpen == true && codigoAsignatura != null){
            _inicializar();
        }
    },[modalOpen, codigoAsignatura]);

    const _inicializar=()=>{
        try{
        //llamada
        const {prerequisitos, areas_conocimiento, nombre_asignatura, codigo_asignatura} = data_asignatura;
        const n_prerequisitos =[];
        const n_areas_conocimiento=[];

        let i = 1;
        for(let iterador of prerequisitos){
            const n_prerequisito ={...iterador};
            n_prerequisito.numero_fila = i;
            n_prerequisitos.push(n_prerequisito);
            i++;
        }

        i = 1;
        for(let iterador of areas_conocimiento){
            const n_area_conocimiento ={...iterador};
            n_area_conocimiento.numero_fila = i;
            n_areas_conocimiento.push(n_area_conocimiento);
            i++;
        }

        setListaAreasConocimiento(n_areas_conocimiento);
        setListaPrerequisitos(n_prerequisitos);
        setNombreAsignatura(nombre_asignatura);

        }catch(e){
            console.log("Error: ",e);
            swal({
                title:"Error",
                icon:"error",
                text:"Ha ocurrido un error al obtener los datos de la asignatura, comunicar al equipo de desarrollo",
                button:"Aceptar"
            });
        }
    }

    const _toggleModal=()=>{
        setModal(!modal);

        if(!modal == false && recargarPadre != null){
            recargarPadre();
        }
    }

    const _verProgramaAsignatura=()=>{
        history.push({
            pathname: "/programa_asignatura",
            state:{
                codigo_asignatura: codigoAsignatura,
            }
        });
    }

    return(
        <Fragment>
            <Modal
                size="lg"
                isOpen={modal}
                toggle={()=>{
                    _toggleModal();
                }}
                centered={true}
            >
                <div className="modal-header">
                    <h4 className="modal-title mt-0">Detalles Asignatura</h4>
                    <button
                        type="button"
                        onClick={() => {
                            _toggleModal()
                        }}
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>

                </div>

                <div className="modal-body">
                    <Container fluid={true}>
                        <Card>
                            <CardHeader>
                                <Row>
                                    <Col>
                                        <h5>Asignatura: <b>{nombreAsignatura}</b></h5>
                                    </Col>
                                    <Col>
                                        <h5>Codigo: <b>{codigoAsignatura}</b></h5>
                                    </Col>
                                </Row>
                            </CardHeader>
                            <CardBody>
                                <div style={{maxHeight:"50VH", overflowY:"scroll", overflowX:"hidden"}}>
                                    <Row>
                                        <Col>
                                            <div style={{textDecotarion:"underline", fontWeight:"bold"}}>
                                                <Label>Prerequisitos</Label>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            {/*Tabla prerequisitos. */}
                                            <DataTable
                                                columnasTabla={columnas_tabla_prerequisitos}
                                                datosTabla={listaPrerequisitos} 
                                            />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                        <div style={{textDecotarion:"underline", fontWeight:"bold"}}>
                                                <Label>Areas de Conocimiento</Label>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            {/*Tabla Areas de conocimiento. */}
                                            <DataTable
                                                columnasTabla={columnas_tabla_areas_conocimiento}
                                                datosTabla={listaAreasConocimiento} 
                                            />
                                        </Col>
                                    </Row>
                                    {/* Poner boton que redirija a ver programa de asignatura, aqui ver dependencias y areas de conocimiento. */}
                                    <Button className="btn btn-block" color="info" outline onClick={()=>_verProgramaAsignatura()}>
                                        Programa de Asignatura
                                    </Button>
                                    <br />
                                </div>
                            </CardBody>
                        </Card>
                    </Container>
                </div>

            </Modal>
        </Fragment>
    );
}

export default ModalVerAsignatura;