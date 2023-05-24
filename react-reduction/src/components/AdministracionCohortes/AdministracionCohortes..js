import React, {Fragment, useEffect, useState} from 'react';
import { Container, FormGroup, Label } from "reactstrap"
import {MdSchool} from 'react-icons/md';
import {Row, Col, Button} from 'reactstrap';
import DataTable from "../DataTable/DataTable";
import Select from 'react-select';
import DateSelector from '../DateSelector/DateSelector';

//json
import { columnas_tabla } from "./Json/columnasTabla";
import { DateTime } from 'luxon';

const AdministracionCohortes = props =>{

    const [filasTabla, setFilasTabla]= useState([]);
    return(
<Fragment>
      <div className="page-content">
        <Container fluid={true}>
            <h4> <MdSchool /> &nbsp;&nbsp;<b> Cohortes</b> </h4><br/>
            <div style={{marginLeft:"3%", textDecoration:'underline'}}>
                <Row>
                    <Col>
                        <h5>Filtros</h5>           
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <div style={{marginTop:"6%"}}>
                        <Select
                            id="maestriaSelect"
                            name="maestriaSelect"
                            value={null}
                            options={[]}
                            placeholder="Seleccione la o las maestrias" 
                        />
                        </div>
                    </Col>
                    <Col md={2}>
                        <FormGroup>
                            <Label>Año de Ingreso Promedio</Label>
                            <DateSelector
                            fechaSeleccionada ={DateTime.now()}
                            />
                        </FormGroup>
                    </Col>
                    <Col md={2}>
                        <FormGroup>
                            <Label>Año de Egreso Esperado</Label>
                            <DateSelector
                            fechaSeleccionada ={DateTime.now()}
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={1}>
                        <Button color="success" className="btn btn-block">Filtrar</Button>
                    </Col>
                </Row>
            </div>
           <Row>
            <Col>
              <DataTable
                  datosTabla={filasTabla}
                  columnasTabla={columnas_tabla}
               />
            </Col>
           </Row>
        </Container>
      </div>
    </Fragment>
    );
}

export default AdministracionCohortes;