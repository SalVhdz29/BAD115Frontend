import React, {Fragment, useState, useEffect} from 'react';
import{
    Row,Col,
    Container,
    Modal,Label,
    Card,CardBody,CardHeader, FormGroup,
    Button
} from 'reactstrap';
import swal from 'sweetalert';
import {
    AvForm,
    AvField
} from 'availity-reactstrap-validation';
import Select from 'react-select';
//model
const datosPlanEstudiosModel={
    modalidad:null,
    cum_minimo_exigible:0,
    nota_minima_aprobacion:0,
    total_asignaturas:0,
    total_de_unidades_valorativas:0,
    duracion_carrera_ciclos:0,
    duracion_carrera_anios:0,
    titulo_otorgar:"",
}
const ModalCrearPlanEstudio = ({modalOpen, recargarPadre, codigoMaestria, nombreMaestria}) =>{
    const [modal, setModal] = useState(false);
    const [listaModalidades, setListaModalidades] = useState([]);
    const [datosPlanEstudio, setDatosPlanEstudio]= useState(datosPlanEstudiosModel);

    useEffect(()=>{
        if(modalOpen != null && modalOpen != false){
            _toggleModal();
        }
        if(modalOpen == true){
            _inicializar();
        }
    },[modalOpen]);

    const _inicializar=()=>{
        //llamada servicio
        setListaModalidades([
            {
                id_modalidad:1,
                value:1,
                label:"Presencial"
            },
            {
                id_modalidad:2,
                value:2,
                label:"Virtual"
            },
            {
                id_modalidad:3,
                value:3,
                label:"Semipresencial"
            }
        ])
       
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
                    <h4 className="modal-title mt-0">Crear Plan de Estudio</h4>
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
                                        <h6>Maestria: <b>{nombreMaestria}</b></h6>
                                    </Col>
                                    <Col>
                                        <h6>Codigo: <b>{codigoMaestria}</b></h6>
                                    </Col>
                                </Row>
                            </CardHeader>
                            <CardBody>
                            <div style={{maxHeight:"50VH", overflowY:"scroll", overflowX:"hidden"}}>
                                <AvForm>
                                    <Row>
                                        <Col>
                                            <FormGroup>
                                                <Label>Modalidad de entrega: </Label>
                                                <Select
                                                    id="modalidadSelect"
                                                    name="modalidadSelect"
                                                    value={datosPlanEstudio.modalidad}
                                                    onChange={(v)=>{
                                                        setDatosPlanEstudio({
                                                            ...datosPlanEstudio,
                                                            modalidad:v
                                                        });
                                                    }}
                                                    options={listaModalidades}
                                                    placeholder="Seleccione una opción"
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col>
                                            <FormGroup>
                                                <Label>CUM Minimo exigible: </Label>
                                                <AvField
                                                    id="cumMinimoIpx"
                                                    name="cumMinimoIpx"
                                                    value={datosPlanEstudio.cum_minimo_exigible}
                                                    onChange={(v)=>{
                                                        setDatosPlanEstudio({
                                                            ...datosPlanEstudio,
                                                            cum_minimo_exigible: v
                                                        });
                                                    }}
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                    <Col>
                                        <FormGroup>
                                            <Label>Nota Minima de Aprobación: </Label>
                                            <AvField
                                                    id="notaMinimaIpx"
                                                    name="notaMinimaIpx"
                                                    value={datosPlanEstudio.nota_minima_aprobacion}
                                                    onChange={(v)=>{
                                                        setDatosPlanEstudio({
                                                            ...datosPlanEstudio,
                                                            nota_minima_aprobacion: v
                                                        });
                                                    }}
                                                />
                                        </FormGroup>
                                    </Col>
                                    <Col>
                                        <FormGroup>
                                            <Label>Total de asignaturas: </Label>
                                            <AvField
                                                    id="totalAsignaturasIpx"
                                                    name="totalAsignaturasIpx"
                                                    value={datosPlanEstudio.total_asignaturas}
                                                    onChange={(v)=>{
                                                        setDatosPlanEstudio({
                                                            ...datosPlanEstudio,
                                                            total_asignaturas: v
                                                        });
                                                    }}
                                                />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <FormGroup>
                                            <Label>Total de Unidades Valorativas(UV): </Label>
                                            <AvField
                                                id="totalAsignaturasIpx"
                                                name="totalAsignaturasIpx"
                                                value={datosPlanEstudio.total_de_unidades_valorativas}
                                                onChange={(v)=>{
                                                    setDatosPlanEstudio({
                                                        ...datosPlanEstudio,
                                                        total_de_unidades_valorativas: v
                                                    });
                                                }}
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col>
                                        <FormGroup>
                                            <Label>Duración de Carrera(Ciclos): </Label>
                                            <AvField
                                                id="duracionCarreraCiclosIpx"
                                                name="duracionCarreraCiclosIpx"
                                                value={datosPlanEstudio.duracion_carrera_ciclos}
                                                onChange={(v)=>{
                                                    setDatosPlanEstudio({
                                                        ...datosPlanEstudio,
                                                        duracion_carrera_ciclos: v
                                                    });
                                                }}
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <FormGroup>
                                            <Label>Duración de Carrera(Años): </Label>
                                            <AvField
                                                id="duracionCarreraAniosIpx"
                                                name="duracionCarreraAniosIpx"
                                                value={datosPlanEstudio.duracion_carrera_anios}
                                                onChange={(v)=>{
                                                    setDatosPlanEstudio({
                                                        ...datosPlanEstudio,
                                                        duracion_carrera_anios: v
                                                    });
                                                }}
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col>
                                        <FormGroup>
                                            <Label>Titulo a otorgar: </Label>
                                            <AvField
                                                id="tituloOtorgarIpx"
                                                name="tituloOtorgarIpx"
                                                value={datosPlanEstudio.titulo_otorgar}
                                                onChange={(v)=>{
                                                    setDatosPlanEstudio({
                                                        ...datosPlanEstudio,
                                                        titulo_otorgar: v
                                                    });
                                                }}
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                            <Button className="btn btn-block" color="success" outline>
                                                Crear Plan de Estudios
                                            </Button>
                                    </Col>
                                </Row>
                                </AvForm>
                            </div>
                            </CardBody>
                        </Card>
                    </Container>
                </div>

            </Modal>
        </Fragment>
    )
}

export default ModalCrearPlanEstudio;