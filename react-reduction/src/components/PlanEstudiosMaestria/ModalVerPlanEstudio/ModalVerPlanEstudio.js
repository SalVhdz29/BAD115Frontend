import React, {Fragment, useState, useEffect} from 'react';
import{
    Row,Col,
    Container,
    Modal,Label,
    Card,CardBody,CardHeader, FormGroup
} from 'reactstrap';
import swal from 'sweetalert';
//Component
import DataTable from '../../DataTable/DataTable';
//json
import { datos_maestria_prueba } from './Json/datos_prueba';
//model
const datosPlanEstudiosModel={
    nombre_maestria:"",
    anio:0,
    autor:"",
    modalidad:"",
    cum_minimo_exigible:0,
    nota_minima_aprobacion:0,
    total_asignaturas:0,
    total_de_unidades_valorativas:0,
    duracion_carrera_ciclos:0,
    duracion_carrera_anios:0,
    titulo_otorgar:"",
    estado:""
}
const ModalVerPlanEstudio = ({modalOpen, recargarPadre, idPlanEstudio}) =>{
    const [modal, setModal] = useState(false);
    const [datosPlanEstudios, setDatosPlanEstudios] = useState(datosPlanEstudiosModel);

    useEffect(()=>{
        if(modalOpen != null && modalOpen != false){
            _toggleModal();
        }
        if(modalOpen == true && idPlanEstudio != null){
            _inicializar();
        }
    },[modalOpen, idPlanEstudio]);

    const _inicializar=()=>{
        //llamada servicio
        setDatosPlanEstudios(datos_maestria_prueba)
    }

    const _toggleModal=()=>{
        setModal(!modal);

        if(!modal == false && recargarPadre != null){
            recargarPadre();
        }
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
                    <h4 className="modal-title mt-0">Plan de Estudio</h4>
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
                                    <Col md={8}>
                                        <h6>Maestria: <b>{datosPlanEstudios.nombre_maestria}</b></h6>
                                    </Col>
                                    <Col>
                                        <h6>Plan Estudio: <b>{idPlanEstudio}</b></h6>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={8}>
                                        <h6>Autor: <b>{datosPlanEstudios.autor}</b></h6>
                                    </Col>
                                    <Col>
                                        <h6>Estado: <b>{datosPlanEstudios.estado}</b></h6>
                                    </Col>
                                </Row>
                            </CardHeader>
                            <CardBody>
                            <div style={{maxHeight:"50VH", overflowY:"scroll", overflowX:"hidden"}}>
                                <Row>
                                    <Col>
                                        <FormGroup>
                                            <Label>Modalidad de entrega: </Label>
                                            <div>
                                                <b>{datosPlanEstudios.modalidad}</b>
                                            </div>
                                        </FormGroup>
                                    </Col>
                                    <Col>
                                        <FormGroup>
                                            <Label>CUM Minimo exigible: </Label>
                                            <div>
                                                <b>{datosPlanEstudios.cum_minimo_exigible}</b>
                                            </div>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <FormGroup>
                                            <Label>Nota Minima de Aprobación: </Label>
                                            <div>
                                                <b>{datosPlanEstudios.nota_minima_aprobacion}</b>
                                            </div>
                                        </FormGroup>
                                    </Col>
                                    <Col>
                                        <FormGroup>
                                            <Label>Total de asignaturas: </Label>
                                            <div>
                                                <b>{datosPlanEstudios.total_asignaturas}</b>
                                            </div>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <FormGroup>
                                            <Label>Total de Unidades Valorativas(UV): </Label>
                                            <div>
                                                <b>{datosPlanEstudios.total_de_unidades_valorativas}</b>
                                            </div>
                                        </FormGroup>
                                    </Col>
                                    <Col>
                                        <FormGroup>
                                            <Label>Duración de Carrera(Ciclos): </Label>
                                            <div>
                                                <b>{datosPlanEstudios.duracion_carrera_ciclos}</b>
                                            </div>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <FormGroup>
                                            <Label>Duración de Carrera(Años): </Label>
                                            <div>
                                                <b>{datosPlanEstudios.duracion_carrera_anios}</b>
                                            </div>
                                        </FormGroup>
                                    </Col>
                                    <Col>
                                        <FormGroup>
                                            <Label>Titulo a otorgar: </Label>
                                            <div>
                                                <b>{datosPlanEstudios.titulo_otorgar}</b>
                                            </div>
                                        </FormGroup>
                                    </Col>
                                </Row>

                            </div>
                            </CardBody>
                        </Card>
                    </Container>
                </div>
                
            </Modal>
        </Fragment>
    )
}

export default ModalVerPlanEstudio;