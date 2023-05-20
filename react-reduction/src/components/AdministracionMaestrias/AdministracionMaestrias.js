import React, { Fragment, useEffect, useState } from "react"
import { Container } from "reactstrap"
import {MdSchool, MdApps, MdDvr, MdPeople, MdPerson, MdAnnouncement} from 'react-icons/md';
import {Row, Col, ButtonToggle, Button, Label, FormGroup} from 'reactstrap';
import { useHistory, useLocation } from 'react-router-dom';
import Select from 'react-select';

//Component
import DataTable from "../DataTable/DataTable";
import ModalObservacionesMaestria from "./ModalObservacionesMaestria/ModalObservacionesMaestria";

//json
import { columnas_tabla } from "./Json/columnasTabla";
import { lista_maestrias_json } from "./Json/datosPrueba";
import swal from "sweetalert";

//model
const maestriaObservacionesModel={
  nombreMaestria: "",
  listaObservaciones:[],
}

const AdministracionMaestrias = props =>{

  const history = useHistory();
  //const location = useLocation();

  const [listaMaestrias, setListaMaestrias] = useState([]);
  const [filasTabla, setFilasTabla] = useState([]);
  const [maestriaObservaciones, setMaestriaObservaciones] = useState(maestriaObservacionesModel);
  const [modalidadflt, setModalidadflt] = useState(null);
  const [opcionesModalidad, setOpcionesModalidad] = useState([
    {
      value:1,
      label:"Presencial"
    },
    {
      value:2,
      label:"Linea"
    },
    {
      value:3,
      label:"Hibrida"
    },
  ])
  

  useEffect(()=>{
    _inicializar();
  },[]);

  useEffect(()=>{
    _formarFilas();
  },[listaMaestrias, modalidadflt]);

  const _inicializar=()=>{
    try{
      //llamado al servicio.
      setListaMaestrias(lista_maestrias_json);
    }catch(e){
      swal({
        title:"Error al inicializar pantalla",
        icon:"error",
        text:"Ha ocurrido un error al inicializar la pantalla, contactar con el equipo de desarrollo",
        button:"Aceptar"
      })
    }
  }

  const _formarFilas=()=>{
    let numero_fila = 1;
    const n_filas=[];
    let modalidades=null;

    if(modalidadflt != null && modalidadflt.length > 0){
      modalidades = [];
      for(let modalidad of modalidadflt){
        modalidades.push(modalidad.value);
      }
    }

    for(let maestria of listaMaestrias) {
      const {codigo_maestria, bandera_editable, id_modalidad, estado: estadoMaestria, observaciones} = maestria;
      if(modalidades == null || modalidades.includes(id_modalidad)) {
        const estado = 
        <Fragment>
          <center><b>{estadoMaestria}</b></center>
          <br />
          {bandera_editable == true && observaciones.length > 0?(
            <ButtonToggle 
              color="info" 
              size="sm" 
              outline
              onClick={()=>{
                setMaestriaObservaciones({
                  nombreMaestria:maestria.nombre_maestria,
                  modalOpen: true,
                  listaObservaciones: observaciones
                });
              }}>
              <MdAnnouncement/>&nbsp; Observaciones
            </ButtonToggle>
          ):(<span></span>)}
        </Fragment>;
  
        //operaciones
        const operaciones = 
        <Fragment>
          <ButtonToggle 
            color="success" 
            size="sm" 
            outline 
            title="Malla Curricular" 
            style={{marginLeft:"5px"}}
            onClick={()=>{
              history.push({
                pathname: "/maya_curricular",
                state:{
                  codigo_maestria
                }
              });
            }}>
            <MdApps />
          </ButtonToggle>
          <ButtonToggle 
            color="primary" 
            size="sm" 
            outline 
            title="Plan de Estudios" 
            style={{marginLeft:"5px"}} 
            onClick={()=>{
              history.push({
                pathname: "/maestria_plan_estudios",
                state:{
                  codigo_maestria
                }
              });
            }}>
            <MdDvr />
          </ButtonToggle>
          <ButtonToggle 
            color="warning" 
            size="sm" 
            outline 
            title="Perfil Aspirante" 
            style={{marginLeft:"5px"}} >
            <MdPerson />
          </ButtonToggle>
          <ButtonToggle 
            color="info" 
            size="sm" 
            outline 
            title="Cohortes" 
            style={{marginLeft:"5px"}} >
            <MdPeople />
          </ButtonToggle>
        </Fragment>;
  
        const n_fila={
          ...maestria,
          estado,
          operaciones,
          numero_fila,
        }
        numero_fila++;
        n_filas.push(n_fila);
      }    
    }

    setFilasTabla(n_filas);

  }

  return(
    <Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <h4> <MdSchool /> &nbsp;&nbsp;<b> Maestrias</b> </h4><br/>
          <div style={{display:"flex", flexDirection:"column"}}>
            <Label style={{fontWeight:"bold", textDecoration:"underline"}}>Filtrar</Label>
            <div style={{width:"25%"}}>
              <FormGroup>
                <Label>Modalidad: </Label>
                <Select
                  id="modalidadSelect"
                  name="modalidadSelect"
                  placeholder="Seleccione uno o más de uno"
                  value={modalidadflt}
                  options={opcionesModalidad}
                  onChange={(option)=>{
                    setModalidadflt(option)
                  }}
                  isMulti
                />
              </FormGroup>
            </div>
          </div>
          <Row>
            <Col>
              <DataTable
                  datosTabla={filasTabla}
                  columnasTabla={columnas_tabla}
               />
            </Col>
          </Row>

          <ModalObservacionesMaestria
            modalOpen={maestriaObservaciones.modalOpen}
            listaObservaciones={maestriaObservaciones.listaObservaciones}
            nombreMaestria={maestriaObservaciones.nombreMaestria}
            recargarPadre={()=>{setMaestriaObservaciones({nombreMaestria:"", listaObservaciones:[], modalOpen:false});}}
           />
        </Container>
      </div>
    </Fragment>
  );
}

export default AdministracionMaestrias;