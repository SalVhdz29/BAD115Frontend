import React,{Fragment, useState, useEffect} from 'react';
import { Container } from "reactstrap"
import {MdSchool} from 'react-icons/md';
import {Row, Col} from 'reactstrap';
import DataTable from "../DataTable/DataTable";

//json
import { columnas_tabla } from "./Json/columnasTabla";

const AdministracionAsignaturas = props =>{
    const [filasTabla, setFilasTabla] = useState([]);
    return(
    <Fragment>
      <div className="page-content">
        <Container fluid={true}>
            <h4> <MdSchool /> &nbsp;&nbsp;<b> Asignaturas</b> </h4><br/>
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

export default AdministracionAsignaturas;