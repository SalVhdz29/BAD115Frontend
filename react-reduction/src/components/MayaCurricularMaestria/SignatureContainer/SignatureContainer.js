import React, {Fragment, useState, useEffect} from 'react';
import {Container,
Row, Col, Label, Card, CardBody} from 'reactstrap';
import {
    Menu,
    Item,
    useContextMenu,
} from "react-contexify/dist/index.js";
import ModalVerAsignatura from '../ModalVerAsignatura/ModalVerAsignatura';
import {FiEye, 
    FiTrash2,
    FiEdit3} from 'react-icons/fi';
import swal from 'sweetalert';

const datosAsignaturaModel={
    correlativo:"",
    codigo_asignatura:"",
    nombre_asignatura:"",
    unidades_valorativas:"",
    prerequisitos:""
}

const SignatureContainer = ({correlativo, codigo_asignatura, nombre_asignatura, unidades_valorativas, prerequisitos, enableEdit}) =>{

    const [datosAsignatura, setDatosAsignatura] = useState(datosAsignaturaModel)
    const [modalesAsignatura, setModalesAsignatura] = useState({modalVer:false, modalEditar:false});
    //menu
     const MENU_ID = "menu-id-asignatura";
     const {show} = useContextMenu({
         id: MENU_ID,
     });
    
    useEffect(()=>{
    setDatosAsignatura({
        correlativo,
        codigo_asignatura,
        nombre_asignatura,
        unidades_valorativas,
        prerequisitos
    })
    },[correlativo, codigo_asignatura, nombre_asignatura, unidades_valorativas, prerequisitos])

    const _displayOptionMenu=(event)=>{
        console.log("EVENT: ",event)
        event.preventDefault();
        
        show({
            event,
            props: {
                key: 'value',
            }
        });
    }

    const _handleMenuOption=(type)=>{

        if(type == 1){
            // ver detalles
            setModalesAsignatura({modalVer:true, modalEditar:false})
        }else if(type == 2){
            //editar

        }else if(type == 3){
            swal({
                title:"Eliminar Asignatura",
                icon:"warning",
                text:"¿Desea eliminar la asignatura de la configuración de ciclo?",
                buttons:["Cancelar","Aceptar"]
            })
        }
    }


    return(
        <Fragment>
            <div 
                className="signatureMainContainer" 
                style={{fontSize:"10px"}}
               
                >
                <Row>
                    <Col>
                        <div  onContextMenu={_displayOptionMenu}>
                            <div className="headerContainer"
                            style={{
                                display:"flex",
                                flexDirection:"row"}}>

                                <div style={{
                                    borderStyle:"solid", 
                                    width:"15%",
                                    borderRight:"none",
                                    borderBottom:"none"
                                    }}>
                                    <center><Label>{datosAsignatura.correlativo}</Label></center>
                                </div>

                                <div style={{
                                    borderStyle:"solid", 
                                    // backgroundColor:"blue",
                                    marginLeft:"0px",
                                    borderBottom:"none",
                                    width:"30%"}}> 
                                        <center><Label>{datosAsignatura.codigo_asignatura}</Label></center>
                                </div>
                            </div>

                            <div className="signatureMain" 
                                style={{
                                    // backgroundColor:"green", 
                                    width:"45%", 
                                    borderStyle:"solid"}}>
                                <center><Label>{datosAsignatura.nombre_asignatura}</Label></center>
                            </div>

                            <div className="signatureFooter" 
                                style={{ 
                                display:"flex",
                                flexDirection:"row"}}>

                                <div style={{
                                    borderStyle:"solid", 
                                    // backgroundColor:"red",
                                    width:"15%",
                                    borderTop:"none",
                                    borderRight:"none"
                                    }}>
                                    <center><Label>{datosAsignatura.unidades_valorativas}</Label></center>
                                </div>

                                <div style={{
                                    borderStyle:"solid", 
                                    // backgroundColor:"blue",
                                    marginLeft:"0px",
                                    borderTop:"none",
                                    width:"30%"}}> 
                                    <center><Label>{datosAsignatura.prerequisitos}</Label></center>
                                </div>
                                
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
            <Menu id={MENU_ID} style={{fontSize:"12px"}}>
                    {/*Cambiar id_ciclo por el correlativo de asignatura_maestria_ciclo */}
                <Fragment>
                   <Item 
                        onClick={(event)=>{_handleMenuOption(1)}} 
                        key={1}> <div style={{color:"green"}}><FiEye /></div> &nbsp;Detalle
                    </Item>
                    
                    {/* {enableEdit == false?(
                        <Fragment>
                            <Item 
                                onClick={(event)=>{_handleMenuOption(2)}} 
                                key={2}><div style={{color:"orange"}}><FiEdit3 /></div> &nbsp;Editar
                            </Item>
                        </Fragment>
                    ):(
                        <span></span>
                    )} */}
                    {enableEdit == false?(
                        <Fragment>
                            {/*Cambiar id_ciclo por el correlativo de asignatura_maestria_ciclo */}
                            <Item onClick={(event)=>{_handleMenuOption(3)}} key={3}><div style={{color:"red"}}><FiTrash2 /></div> &nbsp;Eliminar</Item>
                        </Fragment>
                    ):(
                        <span></span>
                    )}
                    </Fragment>      
                </Menu>
                <ModalVerAsignatura modalOpen={modalesAsignatura.modalVer} codigoAsignatura={codigo_asignatura} recargarPadre={()=>{setModalesAsignatura({modalVer:false, modalEditar:false})}} />
        </Fragment>
    )
}

export default SignatureContainer;