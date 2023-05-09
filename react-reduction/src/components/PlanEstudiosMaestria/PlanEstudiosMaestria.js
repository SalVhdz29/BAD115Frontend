import React, {Fragment, useState, useEffect} from 'react';
import {
    Row, Col,
    Container,
    Card,CardBody,
    Label, FormGroup,
    Button
} from 'reactstrap';
import {MdSchool} from 'react-icons/md';
import {
    AvForm, AvField
} from 'availity-reactstrap-validation';
import DataTable from '../DataTable/DataTable';
import Select from 'react-select';
import swal from 'sweetalert';
//Json
import { columnas_tabla } from './Json/columnas_tabla';

const PlanEstudiosMaestria = props =>{
    const [listaPlanEstudio, setListaPlanEstudio] = useState([]);

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

                                                            />
                                                        </FormGroup>
                                                        <FormGroup>
                                                            <Label>Codigo Maestria:</Label>
                                                            <AvField
                                                                id="codigoMaestriaIpx"
                                                                name="codigoMaestriaIpx"
                                                                
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
                                                                type="textarea"></AvField>
                                                        </FormGroup>
                                                    </div>
                                                    <center><Button className='btn btn-warning'> Solicitar Actualización</Button></center>
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
                                                <Button className="btn btn-success">
                                                    Nuevo Plan de Estudios
                                                </Button>
                                        </div>
                                        <DataTable
                                            columnasTabla={columnas_tabla}
                                            datosTabla={listaPlanEstudio} 
                                        />
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>


                        {/* END del MAIN CONTENT */}
                        </CardBody>
                    </Card>
                </Container>
            </div>
        </Fragment>
    );
}

export default PlanEstudiosMaestria;