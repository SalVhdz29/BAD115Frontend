import React, {Fragment, useState, useEffect} from 'react';
import {
    Row, Col,
    Container,
    Card, CardBody,
    Label, FormGroup,
    Button
} from 'reactstrap';
import {MdSchool} from 'react-icons/md';
import {
    AvField,
    AvForm
} from 'availity-reactstrap-validation';
import Select from 'react-select'
import DataTable from '../DataTable/DataTable';
//Json
import { 
    columnas_tabla_objetivos, 
    columnas_tabla_bibliografia 
} from './Json/columna_tabla';

const ProgramaEstudioAsignatura = props =>{

    return(
        <Fragment>
            <div className="page-container">
                <Container fluid={true}>
                    <Card>
                        <CardBody>
                            <h4> <MdSchool /> &nbsp;&nbsp;<b> Asignatura - Programa de Asignatura</b> </h4><br/>
                            <AvForm>
                            <Row>
                                <Col>
                                    <Card>
                                        <CardBody>
                                            <Label style={{textDecoration:"underline"}}><b>Generalidades</b></Label>
                                            <Row>
                                                <Col>
                                                    <div
                                                        style={{display:"flex", flexDirection:"column"}}
                                                    >
                                                        <FormGroup>
                                                            <Label>Correlativo:</Label>
                                                            <AvField
                                                                id="correlativoIpx"
                                                                name="correlativoIpx" 
                                                            />
                                                        </FormGroup>
                                                        <FormGroup>
                                                            <Label>Duracion:</Label>
                                                            <AvField
                                                                id="duracionIpx"
                                                                name="duracionIpx" 
                                                            />
                                                        </FormGroup>
                                                        <FormGroup>
                                                            <Label>Numero horas/ciclo:</Label>
                                                            <AvField
                                                                id="numeroHorasIpx"
                                                                name="numeroHorasIpx" 
                                                            />
                                                        </FormGroup>
                                                    </div>
                                                </Col>
                                                <Col>
                                                    <FormGroup>
                                                        <Label>Prerequisitos: </Label>
                                                        <Select
                                                            id="prerequisitosSelect"
                                                            name="prerequisitosSelect"
                                                            value={null}
                                                            options={[]} 
                                                        />
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                            {/*FIN GENERALIDADES */}
                            <br />
                            <Row>
                                <Col>
                                    <Card>
                                        <CardBody>
                                            <div style={{paddingLeft:"1%", paddingTop:"2%"}}>
                                                <Row>
                                                    <Col>          
                                                        <FormGroup row>
                                                            <Label><b>I. Introducción:</b> </Label>
                                                            <Col>
                                                                <AvField
                                                                    id="introduccionIpx"
                                                                    name="introduccionIpx"
                                                                    type="textarea"
                                                                />
                                                            </Col>
                                                        </FormGroup>                                             
                                                    </Col>
                                                    <Col>
                                                        <FormGroup row>
                                                            <Label><b>II. Descripción:</b> </Label>
                                                            <Col>
                                                                <AvField
                                                                    id="descripcionIpx"
                                                                    name="descripcionIpx"
                                                                    type="textarea"
                                                                />
                                                            </Col>
                                                        </FormGroup> 
                                                    </Col>
                                                </Row>
                                                </div>

                                                <Row>
                                                    <Col>
                                                        <div style={{display:"flex", flexDirection:"column"}}>
                                                            <Label><b>III. Objetivos</b></Label> <br />

                                                            <div style={{marginLeft:"1%", marginTop:"1%"}}>
                                                                <FormGroup row>
                                                                    <Label>Nuevo Objetivo</Label>
                                                                    <Col>
                                                                        <AvField
                                                                            id="nuevoObjetivoIpx"
                                                                            name="nuevoObjetivoIpx" 
                                                                        />
                                                                    </Col>
                                                                    <Col>
                                                                        <Button className="btn btn-success">
                                                                            Agregar
                                                                        </Button>
                                                                    </Col>
                                                                </FormGroup>
                                                            </div>
                                                            <DataTable
                                                                columnasTabla={columnas_tabla_objetivos}
                                                                datosTabla={[]} 
                                                            />
                                                        </div>
                                                    </Col>
                                                </Row>
                                                <br /> <br />
                                                <Row>
                                                    <Col>
                                                        <div style={{marginLeft:"1%", width:"50%"}}>
                                                            <FormGroup row>
                                                                <Label><b>IV. Metodología enseñanza</b></Label>
                                                                <Col>
                                                                    <Select
                                                                        id="metodologiaSelect"
                                                                        name="metodologiaSelect"
                                                                        value={null}
                                                                        options={[]}
                                                                        placeholder="Seleccione una o más de una." 
                                                                    />
                                                                </Col>
                                                            </FormGroup>
                                                        </div>
                                                    </Col>
                                                </Row>
                                                <br /> <br />
                                                <Row>
                                                    <Col>
                                                        <div style={{display:"flex", flexDirection:"column"}}>
                                                            <Label><b>VII. Bibliografia</b></Label> <br />

                                                            <div style={{marginLeft:"1%", marginTop:"1%"}}>
                                                                <FormGroup row>
                                                                    <Label>Nuevo fuente bibliografica</Label>
                                                                    <Col>
                                                                        <AvField
                                                                            id="nuevaBibliografiaIpx"
                                                                            name="nuevaBibliografiaIpx" 
                                                                        />
                                                                    </Col>
                                                                    <Col>
                                                                        <Button className="btn btn-success">
                                                                            Agregar
                                                                        </Button>
                                                                    </Col>
                                                                </FormGroup>
                                                            </div>
                                                            <DataTable
                                                                columnasTabla={columnas_tabla_bibliografia}
                                                                datosTabla={[]} 
                                                            />
                                                        </div>
                                                    </Col>
                                                </Row>
                                                <br />
                                                <Row>
                                                    <Col>
                                                        <div style={{display:"flex", flexDirection:"row-reverse"}}>
                                                            <Button className="btn btn-success">
                                                                Siguiente: Sistema de Evaluación
                                                            </Button>

                                                        </div>
                                                    </Col>
                                                </Row>
                                        
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                            </AvForm>
                        </CardBody>
                    </Card>
                </Container>
            </div>
        </Fragment>
    );
}

export default ProgramaEstudioAsignatura;