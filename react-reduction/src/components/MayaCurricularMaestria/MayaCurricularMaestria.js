import React, {Fragment, useState, useEffect} from 'react';
import{
    Row,Col,
    Container,
    Card, CardBody,
    Label, FormGroup

} from 'reactstrap';
import {MdSchool} from 'react-icons/md';
import DataTable from '../DataTable/DataTable';
import DateSelector from '../DateSelector/DateSelector';
import SignatureContainer from './SignatureContainer/SignatureContainer';
import Select from 'react-select';
import CicloContainer from './CicloContainer/CicloContainer';

//json
import { lista_ciclos_json } from './Json/data_prueba';
import swal from 'sweetalert';

const datosMaestriaModel = {
    nombre_maestria:" Matemática Analítica",
    duracion_ciclos:10,
    coordinador_academico:"Salvador Hernandez"
}

const MayaCurricularMaestria = props =>{

    const [datosMaestria, setDatosMaestria] = useState(datosMaestriaModel);
    const [listaCiclosFiltro, setListaCiclosFiltro] = useState([]);
    const [listaCiclos, setListaCiclos] = useState([]);

    useEffect(()=>{
        _inicializar();
    },[]);

    const _inicializar = async() =>{
        try{
            setListaCiclos(lista_ciclos_json);

        }catch(e){
            console.log("Error: ",e)
            swal({
                title:"Error al inicializar pantalla",
                icon:"error",
                text:"Ha ocurrido un error al inicializar la pantalla",
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
                    <h4> <MdSchool /> &nbsp;&nbsp;<b> Maya Curricular</b> </h4><br/>
                    <Row>
                        <Col md={4}>
                            <div style={{display:"flex", flexDirection:"column"}}>
                                <Label>Maestria: 
                                    <b>{datosMaestria.nombre_maestria}</b> 
                                </Label>
                                <Label>Duración: 
                                    <b>{datosMaestria.duracion_ciclos}</b> 
                                </Label>
                                <Label>Coordinador: 
                                    <b>{datosMaestria.coordinador_academico}</b> 
                                </Label>
                            </div>
                        </Col>

                        <Col md={5}>
                            <div id="signatureExample" name="signatureExample">
                                <Row>
                                    <Col cols={4}>
                                        <div style={{display:"flex", flexDirection:"column",fontSize:"15px"}}>
                                            <Label style={{height:"16px"}}>1. Correlativo</Label>
                                            <Label style={{height:"16px"}}>2. Codigo Asignatura </Label>
                                            <Label style={{height:"16px"}}>3. Nombre Asignatura</Label> 
                                            <Label style={{height:"16px"}}>4. Unidades Valorativas</Label>
                                            <Label style={{height:"16px"}}>5. Prerequisitos</Label>
                                        </div>
                                    </Col>

                                    <Col cols={8}>
                                        <SignatureContainer
                                            correlativo={1}
                                            codigo_asignatura={2}
                                            nombre_asignatura={3}
                                            unidades_valorativas={4}
                                            prerequisitos={5}
                                        />
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col>
                            <div style={{display:"flex", flexDirection:"column"}}>
                                <Label style={{textDecoration:"underline"}}><b>Filtros</b></Label>
                                <FormGroup row>
                                    <Label>Ciclos: </Label>
                                    <Col>
                                        <Select
                                            id="ciclosSelect"
                                            name="ciclosSelect"
                                            value={null}
                                            options={listaCiclosFiltro}
                                            placeholder="seleccione uno o más de uno"
                                        />
                                    </Col>
                                </FormGroup>
                            </div>
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col>
                            <div className="mallaBody"
                                style={{
                                    width:"100%",
                                    // backgroundColor:"red",
                                    height:"50VH",
                                    
                                }}
                            >
                                <div style={{width:"100%",maxHeight:"49VH",  paddingTop:"1%", overflowY:"scroll"}}>
                                    {listaCiclos.map(ciclo =>(
                                        <CicloContainer
                                        datosCiclo={ciclo}
                                        />
                                    ))}
                                </div>
                                
                            </div>
                        </Col>
                    </Row>
                    </CardBody>
                </Card>
            </Container>
        </div>
    </Fragment>
    );

}

export default MayaCurricularMaestria;