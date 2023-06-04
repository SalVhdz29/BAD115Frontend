import React, {Fragment, useState, useEffect} from 'react';
import {
    Row, Col,
    Container,
    FormGroup,
    Button,
    Modal,
    Label,
    Input,
    Card, CardBody, CardHeader, ButtonToggle
} from 'reactstrap';
import { 
    FiTrash2} from 'react-icons/fi';
import Select from 'react-select';
//Component
import DataTable from '../../DataTable/DataTable';
//json
import { columnas_tabla_editar } from './Json/data_muestra';

const ModalEditarCiclo = ({modalOpen, datosCiclo, recargarPadre}) =>{
    const [modal, setModal] = useState(false);
    const [filasAsignatura, setFilasAsignatura] = useState([]);
    const [ciclo, setCiclo] = useState();
    const [listaPrerequisitos, setListaPrerequisitos] = useState([]);
    const [listaModalidades, setListaModalidades] = useState([]);
    const [listaAreasConocimiento, setListaAreaConocimiento] = useState([]);
    const [listaAsignaturas, setListaAsignaturas] = useState([]);


    useEffect(()=>{
        if(modalOpen != null && modalOpen != false){
            _toggleModal();
        }
    },[modalOpen]);

    useEffect(()=>{
        if(datosCiclo != null){
            setCiclo(datosCiclo);
        }
    },[datosCiclo]);

    useEffect(()=>{
       if(ciclo != null){
        _formarFilas();
       }
    },[ciclo]);


    const _formarFilas=()=>{
        const {lista_asignaturas} = ciclo;
        let numero_fila=1;
        let n_lista =[];
        for(let iterador of lista_asignaturas){
            
            const prerequisitos=<Fragment>
                <Select
                    id={'selectPrerequisitos'+numero_fila}
                    name={'selectPrerequisitos'+numero_fila}
                    options={listaPrerequisitos}
                    placeholder="Seleccione uno o más de uno"
                />
            </Fragment>
            const metodologias=<Fragment>
            <Select
                id={'selectMetodologia'+numero_fila}
                name={'selectMetodologia'+numero_fila}
                options={listaModalidades}
                placeholder="Seleccione uno o más de uno"
            />
        </Fragment>
         const area_conocimiento=<Fragment>
         <Select
             id={'selectAreaConocimiento'+numero_fila}
             name={'selectAreaConocimiento'+numero_fila}
             options={listaAreasConocimiento}
             placeholder="Seleccione una área de conocimiento"
         />
     </Fragment>

        const operaciones =<Fragment>
            <ButtonToggle className="btn" color="danger" outline>
                <FiTrash2 />
            </ButtonToggle>
        </Fragment>
            const asignatura = {...iterador,prerequisitos, metodologias, area_conocimiento,operaciones, numero_fila};
            numero_fila++;
            n_lista.push(asignatura)
        }
        setFilasAsignatura(n_lista);
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
                size="xl"
                isOpen={modal}
                toggle={()=>{
                    _toggleModal();
                }}
                centered={true}
            >
                <div className="modal-header">
                    <h4 className="modal-title mt-0">Actualizar Ciclo</h4>
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
                                            <Label>Ciclo: <b>{datosCiclo != null?(datosCiclo.numero_ciclo):("")}</b></Label>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Select
                                            id={'selectAsignatura'}
                                            name={'selectAsignatura'}
                                            options={listaAsignaturas}
                                            placeholder="Seleccione una asignatura" 
                                        />
                                    </Col>
                                    <Col>
                                        <ButtonToggle className="btn" color="primary" outline>
                                            Agregar
                                        </ButtonToggle>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <DataTable
                                            columnasTabla={columnas_tabla_editar}
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
    )


}

export default ModalEditarCiclo;