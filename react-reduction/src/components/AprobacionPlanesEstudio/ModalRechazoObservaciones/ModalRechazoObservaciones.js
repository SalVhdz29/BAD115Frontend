import React, {Fragment, useState, useEffect} from 'react';
import{
    Row,Col,
    Container,
    Modal,Label,
    Card,CardBody,ButtonToggle, FormGroup,
    Input, Button
} from 'reactstrap';
import swal from 'sweetalert';
import {FaSave} from 'react-icons/fa';
import {FiTrash2} from 'react-icons/fi';
//Component
import DataTable from '../../DataTable/DataTable';
//Json
import { columnas_tabla } from './Json/columnasTabla';

const ModalRechazoObservaciones = ({modalOpen, recargarPadre, idPlanEstudio}) =>{
    const [modal, setModal] = useState(false);
    const [listaObservaciones, setListaObservaciones] = useState([]);
    const [filasObservaciones, setFilasObservaciones] = useState([]);
    const [observacionIpx, setObservacionIpx] = useState("");
    const [errorObservacionIpx, setErrorObservacionIpx] = useState("");


    
    useEffect(()=>{
        if(modalOpen != null && modalOpen != false){
            _toggleModal();
        }
    },[modalOpen]);

    useEffect(()=>{
        if(listaObservaciones != null){
            _formarFilas();
        }
    },[listaObservaciones]);

    const _toggleModal=()=>{
        setModal(!modal);

        if(!modal == false && recargarPadre != null){
            setListaObservaciones([]);
            setObservacionIpx("");
            setErrorObservacionIpx("");
            recargarPadre();
        }
    }

    const _agregarObservacion=()=>{
        
        const coincidencia = listaObservaciones.find(it=>it.observacion === observacionIpx);
        observacionIpx.length > 0 && coincidencia == null?(()=>{
            const n_observaciones =[...listaObservaciones];
            n_observaciones.push({observacion: observacionIpx});
            setListaObservaciones(n_observaciones);
        })():(()=>{
            setErrorObservacionIpx("requerido");
        })()

        if(coincidencia){
            swal({
                title:"Observación duplicada",
                icon:"error",
                text:"Se encuentra ya ingresada una observación identica",
                button:"Aceptar"
            })
            
        }


    }
    const _formarFilas=()=>{
        const n_filas=[];
        let numero_fila = 1;
        for(let iterador of listaObservaciones){
            const operaciones =<Fragment>
                <ButtonToggle 
                    className="btn" 
                    color="danger" 
                    outline
                    onClick={()=>{
                        const n_lista_observaciones = listaObservaciones.filter(it=>it.observacion != iterador.observacion);
                        setListaObservaciones(n_lista_observaciones);
                    }}>
                    <FiTrash2 />
                </ButtonToggle>
            </Fragment>

            iterador.numero_fila = numero_fila;
            iterador.operaciones = operaciones;
            n_filas.push(iterador);
            numero_fila++;
        }
        setFilasObservaciones(n_filas);
    }

    const _guardarObservaciones = () =>{
        try{

           swal({
            title:"Rechazar con Observaciones",
            icon:"warning",
            text:"¿Desea rechazar con observaciones este plan de estudio?",
            buttons:["Cancelar","Aceptar"]
           }).then(async respuesta =>{
            if(respuesta){
                swal({
                    title:"Guardado",
                    icon:"success",
                    text:"Se ha guardado correctamente las observaciones",
                    button:"Aceptar"
                });
                _toggleModal()
            }
           })
        }catch(e){
            console.log("Error: ",e)
            swal({
                title:"Error",
                icon:"error",
                text:"Ha ocurrido un error al guardar las observaciones",
                button:"Aceptar"
            })
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
            centered={true}>
                <div className="modal-header">
                    <h4 className="modal-title mt-0">Rechazar con observaciones</h4>
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
                            <CardBody>
                                <Row>
                                    <Col>
                                        <div style={{fontWeight:"bold",textDecoration:"underline"}}>
                                            <Label style={{textDecoration:"underline"}}>Agregar Observacion</Label>
                                        </div>
                                    </Col>
                                </Row>
                                <br />
                                <Row>
                                    <Col>
                                        <FormGroup>
                                            <Label>Observacion</Label>
                                            <Input
                                                id="observacionIpx"
                                                name="observacionIpx"
                                                value={observacionIpx}
                                                style={{fontSize:"13px"}}
                                                onChange={(e)=>{
                                                    setObservacionIpx(e.target.value);
                                                    setErrorObservacionIpx("");
                                                }}
                                                type="textarea"
                                            />
                                            <div style={{color:"red"}}>
                                                {errorObservacionIpx}
                                            </div>      
                                </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Button
                                            color="info"
                                            outline
                                            className="btn btn-block"
                                            onClick={()=>{
                                                _agregarObservacion()
                                            }}>
                                                Agregar
                                        </Button>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <DataTable
                                            columnasTabla={columnas_tabla}
                                            datosTabla={listaObservaciones}                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Button
                                            color="success"
                                            outline
                                            className="btn btn-block"
                                            onClick={()=>{
                                                if(listaObservaciones.length > 0){
                                                    _guardarObservaciones();
                                                }else{
                                                    swal({
                                                        title:"Sin Observaciones",
                                                        icon:"error",
                                                        text:"Necesita crear al menos una observacion",
                                                        button:"Aceptar"
                                                    })
                                                }
                                            }}
                                        >
                                            <FaSave />&nbsp; Guardar
                                        </Button>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Container>
                </div>
            </Modal>
        </Fragment>
    );

}

export default ModalRechazoObservaciones;