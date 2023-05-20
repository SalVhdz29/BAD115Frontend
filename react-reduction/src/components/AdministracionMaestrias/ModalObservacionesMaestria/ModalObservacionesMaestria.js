import React, {Fragment, useState, useEffect} from 'react';
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
import {MdCached, MdDone} from 'react-icons/md';

//model
const observacionesStateModel={
    listaObservaciones:[],
    nombreMaestria:""
};

const ModalObservacionesMaestria =( {modalOpen, listaObservaciones, nombreMaestria, recargarPadre}) =>{
    const[observacionesState, setObservacionesState] = useState(observacionesStateModel);
    const[modal, setModal] = useState(false);
    useEffect(()=>{
       if(modalOpen != null && modalOpen != false){
        _toggleModal();
       }
    },[modalOpen])

    useEffect(()=>{
        let n_lista=[];
        let n_nombre="";

        if(listaObservaciones != null){
            n_lista = listaObservaciones;
        }
        if(nombreMaestria != null){
            n_nombre = nombreMaestria;
        }
        
        setObservacionesState({
            listaObservaciones: n_lista,
            nombreMaestria: n_nombre
        });
    },[listaObservaciones, nombreMaestria]);

    const _toggleModal=()=>{
        setModal(!modal);
        if(!modal == false){
            setObservacionesState({
                listaObservaciones:[],
                nombreMaestria:""
            });
            if(recargarPadre != null){
                recargarPadre();
            }
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
                    <h4 className="modal-title mt-0">Observaciones</h4>
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
                                <div style={{marginBottom:"1%"}}>
                                    <Label>Maestria: <b>{observacionesState.nombreMaestria}</b></Label>
                                </div>
                                <div style={{backgroundColor:"#dadada", maxHeight:"50VH", overflowY:"scroll", padding:"2%"}}>
                                    {observacionesState.listaObservaciones.map(observacionIt =>{
                                            return(
                                                <Fragment>
                                                    <Card style={{margin:"2%"}}>
                                                        <CardHeader>
                                                            {/* <Row>
                                                                <Col cols={2}>
                                                                    {observacionIt.id_estado_observacion == 1?(
                                                                        <MdDone/>
                                                                    ):(
                                                                        <MdCached />
                                                                    )}
                                                                </Col>
                                                                <Col cols={2}>
                                                                    <Label>ID: <b>{observacionIt.id_observacion}</b></Label>
                                                                </Col>
                                                                <Col>
                                                                    <Label><b>{observacionIt.estado_observacion}</b></Label>
                                                                </Col>
                                                            </Row> */}
                                                            <div  style={{display:"flex", flexDirection:"row"}}>

                                                                <div style={{ width:"15%"}}>
                                                                    <Label>ID: <b>{observacionIt.id_observacion}</b></Label>
                                                                </div>

                                                                <div className="iconContainer" style={{ width:"15%"}}>
                                                                    {observacionIt.id_estado_observacion == 1?(
                                                                        <MdDone/>
                                                                    ):(
                                                                        <MdCached />
                                                                    )}
                                                                </div>

                                                                <div>
                                                                    <Label><b>{observacionIt.estado_observacion}</b></Label>  
                                                                </div>
                                                            </div>
                                                        </CardHeader>
                                                        <CardBody>
                                                            <Row>
                                                                <Col>
                                                                {observacionIt.observacion}
                                                                </Col>
                                                            </Row>
                                                        </CardBody>
                                                    </Card>
                                                </Fragment>
                                            );
                                    })}
                                </div>
                            </CardBody>
                        </Card>
                    </Container>
                </div>
            
            </Modal>
        </Fragment>
    );
}

export default ModalObservacionesMaestria;