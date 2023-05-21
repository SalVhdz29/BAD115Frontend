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
import swal from 'sweetalert';
//Component
import DataTable from '../../DataTable/DataTable';
//json
import { columnas_tabla } from './Json/data_muestra';

const ModalVerCiclo = ({modalOpen, datosCiclo, recargarPadre}) => {
    const [modal, setModal] = useState(false);
    const [filasAsignatura, setFilasAsignatura] = useState([]);

    useEffect(()=>{
        if(modalOpen != null && modalOpen != false){
            _toggleModal();
        }
    },[modalOpen]);

    useEffect(()=>{
        if(datosCiclo != null){
            _obtenerData()
        }
    },[datosCiclo]);

    const _toggleModal=()=>{
        setModal(!modal);

        if(!modal == false && recargarPadre != null){
            recargarPadre();
        }
    }

    const _obtenerData = () =>{
        try{
            const {lista_asignaturas} = datosCiclo;
            //llamada
            let numero_fila=1;
            let n_lista =[];
            for(let iterador of lista_asignaturas){
                const asignatura = {...iterador, numero_fila};
                numero_fila++;
                n_lista.push(asignatura)
            }
            setFilasAsignatura(n_lista);

        }catch(e){
            console.log("Error: ",e);
            swal({
                title:"Error",
                icon:"error",
                text:"Ha ocurrido un error al obtener los datos del ciclo",
                button:"Aceptar"
            });
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
                    <h4 className="modal-title mt-0">Detalles Ciclo</h4>
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
                                        <div style={{marginBottom:"1%"}}>
                                            <Label>Ciclo: <b>{datosCiclo.numero_ciclo}</b></Label>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <DataTable
                                            columnasTabla={columnas_tabla}
                                            datosTabla={filasAsignatura} 
                                        />
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

export default ModalVerCiclo;