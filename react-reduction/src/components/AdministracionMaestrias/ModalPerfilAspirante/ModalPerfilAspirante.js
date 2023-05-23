import React, {Fragment, useState, useEffect} from 'react';
import {
    Row, Col,
    Container,
    FormGroup,
    Button,
    Modal,
    Label,
    Card, CardBody, CardHeader
} from 'reactstrap';
import {MdCached, MdDone} from 'react-icons/md';
import swal from 'sweetalert';
//Component
import DataTable from '../../DataTable/DataTable';
//json
import { columnas_tabla } from './Json/datos_prueba';
//model
const datosPerfilModel ={
    lista_requisitos:[]
}

const ModalPerfilAspirante = ({modalOpen, recargarPadre, datosMaestria}) =>{
    const [modal, setModal] = useState(false);
    const [datosPerfil, setDatosPerfil] = useState(datosPerfilModel);
    const [enableEdit, setEnableEdit] = useState(false);

    useEffect(()=>{
        if(modalOpen != null && modalOpen != false){
         _toggleModal();
        }
       
    },[modalOpen])

    useEffect(()=>{
        if(modalOpen == true && datosMaestria != null){
            _inicializar();
        }
    },[datosMaestria])

    const _toggleModal=()=>{
        setModal(!modal);
        if(!modal == false){
            //setDatosPerfil(datosPerfilModel)
            if(recargarPadre != null){
                recargarPadre();
            }
        }
    }

    const _inicializar=()=>{
        try{
            const {codigo_maestria, perfil_aspirante} = datosMaestria;

            const {lista_requisitos} = perfil_aspirante;
            let i = 1;
            const n_requisitos=[];
            for(let iterador of lista_requisitos){
                iterador.numero_fila = i;
                i++;
                n_requisitos.push(iterador);
            }
            setDatosPerfil(n_requisitos)

            //AQUI INCLUIR BANDERA
            setEnableEdit(false);

        }catch(e){
            console.log("EL ERROR QUE BUSCO: ",e)
            swal({
                title:"Error",
                icon:"error",
                text:"Ha ocurrido un error al obtener los datos, informar al equipo de desarrollo",
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
                    <h4 className="modal-title mt-0">Perfil Aspirante</h4>
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
                                        <h5>Maestria: <b>{datosMaestria.nombre_maestria}</b></h5>
                                    </Col>
                                    <Col>
                                        <h5>Codigo: <b>{datosMaestria.codigo_maestria}</b></h5>
                                    </Col>
                                </Row>
                            </CardHeader>
                            <CardBody>
                            <div style={{maxHeight:"50VH", overflowY:"scroll", overflowX:"hidden"}}>
                                <Row>
                                    <Col>
                                        <div style={{textDecotarion:"underline", fontWeight:"bold"}}>
                                            <Label>Requisitos del Aspirante</Label>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <DataTable
                                            columnasTabla={columnas_tabla}
                                            datosTabla={datosPerfil}
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        {enableEdit?(
                                            <Button class="btn btn-block" outline color="warning">
                                            Actualizar Perfil Aspirante
                                        </Button>
                                        ):(<Fragment></Fragment>)}
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

export default ModalPerfilAspirante;
