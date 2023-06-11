import React, {Fragment, useState, useEffect} from 'react';
import { Container,
    Row, Col,
    ButtonToggle,
    Label,FormGroup,
    Card,
    CardHeader,CardBody,Button
 } from "reactstrap";
 import Select from 'react-select';
import swal from "sweetalert";
import {
    MdSchool,
    MdWarningAmber,
    MdViewHeadline
} from 'react-icons/md';
import{
    AvForm,
    AvField
} from 'availity-reactstrap-validation';
import {FiEdit3} from 'react-icons/fi';
import {FaSave} from 'react-icons/fa';
import {MdOutlineCancel} from 'react-icons/md';
import { DateTime } from 'luxon';
//Component
import DataTable from '../DataTable/DataTable';
import DateSelector from '../DateSelector/DateSelector';
//json
import { columnas_tabla, columnas_tabla_laboral, datos_usuario } from './Json/columnas_tabla';


const CohorteAspiranteProfesor= props =>{
    const [enableEdit, setEnableEdit] = useState(true);
    const [editFlg, setEditFlg] = useState(false);
    const [editExpedienteAcademicoFlg, setEditExpedienteAcademicoFlg] = useState(false);
    const [editLaboralFlg, setEditLaboralFlg] = useState(false);
    const [extranjeroFlg, setExtranjeroFlg] = useState("");

    const [datosUsuario, setDatosUsuario] = useState(null);
    const [defaultValues, setDefaultValues] = useState({});

    const [selectPais, setSelectPais] = useState({pais_seleccionado:null, lista_pais:[]});
    const [selectDepartamento, setSelectDepartamento] = useState({depto_seleccionado:null, lista_departamentos:[]});
    const [selectMunicipio, setSelectMunicipio] = useState({muni_seleccionado:null, lista_municipios:[]});
    const [fechaNacimiento, setFechaNacimiento] = useState();
    const [fechaCreacionDocumento, setFechaCreacionDocumento] = useState();

    const [listaGradosAcademicos, setListaGradosAcademicos] = useState();
    const [filasGradosAcademicos, setFilasGradosAcademicos] = useState();

    const [listaExperienciaLaboral, setListaExperienciaLaboral] = useState();
    const [filasExperienciaLaboral, setFilasExperienciaLaboral] = useState();

    //botones deben de dependet del editFlg para poner el de subir documento por ejemplo, y enable edit si es que puede cambiar el editFlg

    useEffect(()=>{
        _inicializar();
    },[])

    useEffect(()=>{
        if(selectPais.pais_seleccionado != null && selectPais.pais_seleccionado.value === 1){
            setExtranjeroFlg(false);
        }else{
            if(selectPais.pais_seleccionado != null){
                setExtranjeroFlg(true);
            setSelectDepartamento({
                ...selectDepartamento,
                depto_seleccionado:null
            });
            setSelectMunicipio({
                ...selectMunicipio,
                muni_seleccionado: null
            });
            }
        }
    },[selectPais])
    
    const _inicializar=()=>{
        try{
            let {
                datos_personales,
                lista_pais,
                lista_departamentos,
                lista_municipios,
                lista_expediente_academico,
                lista_experiencia_laboral,
                bandera_edicion
            } = datos_usuario;
            setDatosUsuario(datos_usuario);

            setEnableEdit(bandera_edicion);
            setSelectPais({
                pais_seleccionado: datos_personales.pais,
                lista_pais,
            });
            setSelectDepartamento({
                depto_seleccionado: datos_personales.departamento,
                lista_departamentos
            });

            lista_municipios = lista_municipios.filter(it=>it.id_departamento === datos_personales.departamento.id_departamento);
            setSelectMunicipio({
                muni_seleccionado: datos_personales.municipio,
                lista_municipios
            })

            //PARA EL SERVICIO
            // setFechaNacimiento(DateTime.fromJSDate(datos_personales.fecha_nacimiento));
            //en el JSON ya viene como Luxon
            setFechaNacimiento(datos_personales.fecha_nacimiento);
            setDefaultValues({
                ...datos_personales       
            })


        }catch(e){
            console.log("Error: ",e)
            swal({
                title:"Error al obtener los datos",
                icon:"error",
                text:"Ha ocurrido un error al obtener los datos, informar al equipo de desarrollo",
                button:"Aceptar"
            })
        }
    }

    const _formarFilasExpedienteAcademico=()=>{
        
    }

    const _actualizarDatosPersonales=(values)=>{
        console.log("VALORES: ", values)
    }

    const _reestablecer=()=>{
        const {datos_personales} = datosUsuario;
        setDefaultValues({
            ...datos_personales       
        })
        setEditFlg(false);
    }

    return(
        <Fragment>
            <div className="page-content">
                <Container fluid={true}>
                    <Card>
                        <CardHeader>
                            <h4><MdSchool /> &nbsp;&nbsp;<b> Aspirante a Profesor</b></h4>
                        </CardHeader>
                        <CardBody>
                            <Card>
                                <CardHeader>
                                    <h4>Datos Personales</h4>
                                </CardHeader>
                                <CardBody>
                                   <AvForm
                                    onValidSubmit={(e,v) =>{_actualizarDatosPersonales(v)}}
                                    model={defaultValues}>
                                        <Row>
                                            <Col>
                                                <FormGroup>
                                                    <Label>Primer Nombre: </Label>
                                                    <AvField
                                                        id="primerNombreIpx"
                                                        name="primerNombreIpx"
                                                        className="form-control"
                                                        type="text"
                                                        value={defaultValues.primer_nombre}
                                                        validate={{
                                                            required: { value: true, errorMessage: "Obligatorio."},
                                                          }}
                                                        disabled={
                                                            !editFlg
                                                        }
                                                        
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col>
                                                <FormGroup>
                                                    <Label>Segundo Nombre: </Label>
                                                    <AvField
                                                        id="segundoNombreIpx"
                                                        name="segundoNombreIpx"
                                                        value={defaultValues.segundo_nombre}
                                                        disabled={
                                                            !editFlg
                                                        }
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col>
                                                <FormGroup>
                                                    <Label>Tercer Nombre: </Label>
                                                    <AvField
                                                        id="tercerNombreIpx"
                                                        name="tercerNombreIpx"
                                                        value={defaultValues.tercer_nombre}
                                                        disabled={
                                                            !editFlg
                                                        }
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <FormGroup>
                                                    <Label>Primer Apellido: </Label>
                                                    <AvField
                                                        id="primerApellidoIpx"
                                                        name="primerApellidoIpx"
                                                        value={defaultValues.primer_apellido}
                                                        validate={{
                                                            required: { value: true, errorMessage: "Obligatorio."},
                                                          }}
                                                          disabled={
                                                            !editFlg
                                                        }
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col>
                                                <FormGroup>
                                                    <Label>Segundo Apellido: </Label>
                                                    <AvField
                                                        id="segundoApellidoIpx"
                                                        name="segundoApellidoIpx"
                                                        value={defaultValues.segundo_apellido}
                                                        validate={{
                                                            required: { value: true, errorMessage: "Obligatorio."},
                                                          }}
                                                          disabled={
                                                            !editFlg
                                                        }
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col>
                                                <FormGroup>
                                                    <Label>Dirección: </Label>
                                                    <AvField
                                                        id="direccionIpx"
                                                        name="direccionIpx"
                                                        type="textarea"
                                                        value={defaultValues.direccion}
                                                        style={{fontSize:"12px"}}
                                                        validate={{
                                                            required: { value: true, errorMessage: "Obligatorio."},
                                                        }}
                                                        disabled={
                                                           !editFlg
                                                        }
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <FormGroup>
                                                    <Label>Fecha de Nacimiento</Label>
                                                    <DateSelector
                                                        id="fechaNacimientoDate"
                                                        name="fechaNacimientoDate"
                                                        fechaSeleccionada={fechaNacimiento}
                                                        cambioFecha={({fecha})=>{
                                                            setFechaNacimiento(fecha);
                                                        }}
                                                        deshabilitar={
                                                            !editFlg
                                                        }
                                                        
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col>
                                                <FormGroup>
                                                    <Label>Correo Electrónico: </Label>
                                                    <AvField
                                                        id="correoElectronicoIpx"
                                                        name="correoElectronicoIpx"
                                                        value={defaultValues.correo_electronico}
                                                        validate={{
                                                            required: { value: true, errorMessage: "Obligatorio."},
                                                            email: { value: true, errorMessage: "Debe escribir un correo válido"},
                                                        }}
                                                        disabled={
                                                            !editFlg
                                                        }
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col>
                                                <FormGroup>
                                                    <Label>Correo Electrónico Institucional: </Label>
                                                    <AvField
                                                        id="correoElectronicoInstitucionalIpx"
                                                        name="correoElectronicoInstitucionalIpx"
                                                        value={defaultValues.correo_eletronico_institucional}
                                                        validate={{
                                                            required: { value: true, errorMessage: "Obligatorio."},
                                                            email: { value: true, errorMessage: "Debe escribir un correo válido"},
                                                        }}
                                                        disabled={
                                                            !editFlg
                                                        }
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <FormGroup>
                                                    <Label>Pais: </Label>
                                                    <Select
                                                        id="paisSelect"
                                                        name="paisSelect"
                                                        options={selectPais.lista_pais}
                                                        value={selectPais.pais_seleccionado}
                                                        onChange={(v)=>{setSelectPais({...selectPais, pais_seleccionado: v})}}
                                                        placeholder="Seleccione una opción"
                                                        isDisabled={
                                                            editFlg == false
                                                        }
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col>
                                                <FormGroup>
                                                    <Label>Departamento Residencia: </Label>
                                                    <Select
                                                        id="departamentoResidencia"
                                                        name="departamentoResidencia"
                                                        options={selectDepartamento.lista_departamentos}
                                                        value={selectDepartamento.depto_seleccionado}
                                                        onChange={(v)=>{setSelectDepartamento({...selectDepartamento, depto_seleccionado: v})}}
                                                        placeholder="Seleccione una opción"
                                                        isDisabled={
                                                            extranjeroFlg === true || editFlg == false
                                                        }
                                                         
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col>
                                                <FormGroup>
                                                    <Label>Municipio Residencia: </Label>
                                                    <Select
                                                        id="municipioResidencia"
                                                        name="municipioResidencia"
                                                        options={selectMunicipio.lista_municipios}
                                                        value={selectMunicipio.muni_seleccionado}
                                                        onChange={(v)=>{setSelectMunicipio({...selectMunicipio, muni_seleccionado: v})}}
                                                        placeholder="Seleccione una opción"
                                                        isDisabled={
                                                            extranjeroFlg === true || editFlg == false
                                                        }
                                                         
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <FormGroup>
                                                    <Label>DUI: </Label>
                                                    <AvField
                                                        id="duiIpx"
                                                        name="duiIpx"
                                                        value={defaultValues.dui}
                                                        validate={{
                                                            required: { value: true, errorMessage: "Obligatorio."},
                                                          }}
                                                        disabled={
                                                            extranjeroFlg === true || editFlg == false
                                                        }
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col>
                                                <FormGroup>
                                                    <Label>NIT: </Label>
                                                    <AvField
                                                        id="nitIpx"
                                                        name="nitIpx"
                                                        value={defaultValues.nit}
                                                        validate={{
                                                            required: { value: true, errorMessage: "Obligatorio."},
                                                          }}
                                                          disabled={
                                                            extranjeroFlg === true || editFlg == false
                                                        }
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col>
                                                <FormGroup>
                                                    <Label>NUP: </Label>
                                                    <AvField
                                                        id="nupIpx"
                                                        name="nupIpx"
                                                        value={defaultValues.nup}
                                                        validate={{
                                                            required: { value: true, errorMessage: "Obligatorio."},
                                                          }}
                                                          disabled={
                                                            extranjeroFlg === true || editFlg == false
                                                        }
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <FormGroup>
                                                    <Label>Numero Pasaporte: </Label>
                                                    <AvField
                                                        id="numeroPasaporteIpx"
                                                        name="numeroPasaporteIpx"
                                                        value={defaultValues.numero_pasaporte}
                                                        validate={{
                                                            required: { value: true, errorMessage: "Obligatorio."},
                                                          }}
                                                          disabled={
                                                            extranjeroFlg === true || editFlg == false
                                                        }
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col>
                                                <FormGroup>
                                                    <Label>Documento Personal: </Label>
                                                    <AvField
                                                        id="documentoPersonalIpx"
                                                        name="documentoPersonalIpx"
                                                        value={defaultValues.documento_personal}
                                                        disabled={
                                                            extranjeroFlg === true || editFlg == false
                                                        }
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col>
                                                <FormGroup>
                                                    <Label>Telefono Personal: </Label>
                                                    <AvField
                                                        id="telefonoPersonalIpx"
                                                        name="telefonoPersonalIpx"
                                                        value={defaultValues.telefono_personal}
                                                        validate={{
                                                            required: { value: true, errorMessage: "Obligatorio."},
                                                        }}
                                                        disabled={
                                                            !editFlg
                                                        }
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col>
                                                <FormGroup>
                                                    <Label>Telefono Oficina: </Label>
                                                    <AvField
                                                        id="telefonoOficinaIpx"
                                                        name="telefonoOficinaIpx"
                                                        value={defaultValues.telefono_oficina}
                                                        validate={{
                                                            required: { value: true, errorMessage: "Obligatorio."},
                                                        }}
                                                        disabled={
                                                            !editFlg
                                                        }
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                       
                                        <Row>
                                            <Col>
                                                {enableEdit === true && editFlg === false?(
                                                    <div style={{display:"flex", flexDirection:"row-reverse"}}>
                                                        <div style={{margin:"1%"}}>
                                                            <Button className="btn" color="warning" outline onClick={()=>{setEditFlg(true)}}>
                                                                <FiEdit3 />&nbsp;Actualizar Campos
                                                            </Button>
                                                        </div>
                                                    </div>
                                                ):(
                                                    <div>

                                                    </div>
                                                )}
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                            {enableEdit === true && editFlg === true?(
                                                   <Button className="btn btn-block" color="success" outline >
                                                        <FaSave />&nbsp;Guardar Cambios
                                                    </Button>
                                                ):(
                                                    <div>

                                                    </div>
                                                )}
                                            </Col>
                                            <Col>
                                            {enableEdit === true && editFlg === true?(
                                                   <Button className="btn btn-block" color="danger" outline onClick={()=>{_reestablecer()}} >
                                                        <MdOutlineCancel />&nbsp;Cancelar
                                                    </Button>
                                                ):(
                                                    <div>

                                                    </div>
                                                )}
                                            </Col>
                                        </Row> 
                                   </AvForm>
                                </CardBody>
                            </Card>
                            <br /><br />
                            <Card>
                                <CardHeader>
                                    <h4>Expediente Académico</h4>
                                </CardHeader>
                                <CardBody>
                                    <Row>
                                        <Col>
                                            <DataTable
                                                id="expedienteAcademicotbl"
                                                name="expedienteAcademicotbl"
                                                columnasTabla={columnas_tabla}
                                                datosTabla={filasGradosAcademicos} 
                                            />
                                        </Col>
                                    </Row>
                                    <Row>
                                            <Col>
                                                {enableEdit === true && editExpedienteAcademicoFlg === false?(
                                                    <div style={{display:"flex", flexDirection:"row-reverse"}}>
                                                        <div style={{margin:"1%"}}>
                                                            <Button className="btn" color="warning" outline onClick={()=>{setEditExpedienteAcademicoFlg(true)}}>
                                                                <FiEdit3 />&nbsp;Actualizar Campos
                                                            </Button>
                                                        </div>
                                                    </div>
                                                ):(
                                                    <div>

                                                    </div>
                                                )}
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                            {enableEdit === true && editExpedienteAcademicoFlg === true?(
                                                   <Button className="btn btn-block" color="success" outline >
                                                        <FaSave />&nbsp;Guardar Cambios
                                                    </Button>
                                                ):(
                                                    <div>

                                                    </div>
                                                )}
                                            </Col>
                                            <Col>
                                            {enableEdit === true && editExpedienteAcademicoFlg === true?(
                                                   <Button className="btn btn-block" color="danger" outline onClick={()=>{setEditExpedienteAcademicoFlg(false)}} >
                                                        <MdOutlineCancel />&nbsp;Cancelar
                                                    </Button>
                                                ):(
                                                    <div>

                                                    </div>
                                                )}
                                            </Col>
                                        </Row> 
                                </CardBody>
                            </Card>

                            
                            <br /><br />
                            <Card>
                                <CardHeader>
                                    <h4>Experiencia Laboral</h4>
                                </CardHeader>
                                <CardBody>
                                    <Row>
                                        <Col>
                                            <DataTable
                                                id="experienciaLaboraltbl"
                                                name="experienciaLaboraltbl"
                                                columnasTabla={columnas_tabla_laboral}
                                                datosTabla={filasExperienciaLaboral} 
                                            />
                                        </Col>
                                    </Row>
                                    <Row>
                                            <Col>
                                                {enableEdit === true && editLaboralFlg === false?(
                                                    <div style={{display:"flex", flexDirection:"row-reverse"}}>
                                                        <div style={{margin:"1%"}}>
                                                            <Button className="btn" color="warning" outline onClick={()=>{setEditLaboralFlg(true)}}>
                                                                <FiEdit3 />&nbsp;Actualizar Campos
                                                            </Button>
                                                        </div>
                                                    </div>
                                                ):(
                                                    <div>

                                                    </div>
                                                )}
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                            {enableEdit === true && editLaboralFlg === true?(
                                                   <Button className="btn btn-block" color="success" outline >
                                                        <FaSave />&nbsp;Guardar Cambios
                                                    </Button>
                                                ):(
                                                    <div>

                                                    </div>
                                                )}
                                            </Col>
                                            <Col>
                                            {enableEdit === true && editLaboralFlg === true?(
                                                   <Button className="btn btn-block" color="danger" outline onClick={()=>{setEditLaboralFlg(false)}} >
                                                        <MdOutlineCancel />&nbsp;Cancelar
                                                    </Button>
                                                ):(
                                                    <div>

                                                    </div>
                                                )}
                                            </Col>
                                        </Row> 
                                </CardBody>
                                                    
                            </Card>
                            <br /><br />
                            <Card>
                                <CardHeader>
                                    <h4>Documentacion Profesor</h4>
                                </CardHeader>
                                <CardBody>
                            <Row> 
                                             <Col>
                                                <FormGroup>
                                                    <Label>Ponga CV PRRO!!!:</Label>

                                                </FormGroup>
                                            </Col>    
                                            </Row> 
                            <Row>
                                            <Col>
                                                <FormGroup>
                                                    <Label>Fecha:</Label>
                                                    <DateSelector
                                                        id="fechaCreacionDocumeentoDate"
                                                        name="fechaCreacionDocumeentoDate"
                                                        fechaSeleccionada={fechaCreacionDocumento}
                                                        cambioFecha={({fecha})=>{
                                                            setFechaCreacionDocumento(fecha);
                                                        }}
                                                        deshabilitar={
                                                            !editFlg
                                                        }
                                                        
                                                    />
                                                </FormGroup>
                                            </Col>    
                                            </Row>            
                                    <Row>
                                            <Col>
                                                {enableEdit === true && editExpedienteAcademicoFlg === false?(
                                                    <div style={{display:"flex", flexDirection:"row-reverse"}}>
                                                        <div style={{margin:"1%"}}>
                                                            <Button className="btn" color="warning" outline onClick={()=>{setEditExpedienteAcademicoFlg(true)}}>
                                                                <FiEdit3 />&nbsp;Actualizar Campos
                                                            </Button>
                                                        </div>
                                                    </div>
                                                ):(
                                                    <div>

                                                    </div>
                                                )}
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                            {enableEdit === true && editExpedienteAcademicoFlg === true?(
                                                   <Button className="btn btn-block" color="success" outline >
                                                        <FaSave />&nbsp;Guardar Cambios
                                                    </Button>
                                                ):(
                                                    <div>

                                                    </div>
                                                )}
                                            </Col>
                                            <Col>
                                            {enableEdit === true && editExpedienteAcademicoFlg === true?(
                                                   <Button className="btn btn-block" color="danger" outline onClick={()=>{setEditExpedienteAcademicoFlg(false)}} >
                                                        <MdOutlineCancel />&nbsp;Cancelar
                                                    </Button>
                                                ):(
                                                    <div>

                                                    </div>
                                                )}
                                            </Col>
                                        </Row> 
                                </CardBody>
                            </Card>


                        </CardBody>
                    </Card>
                </Container>
            </div>
        </Fragment>
    )
}

export default CohorteAspiranteProfesor;