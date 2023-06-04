import React,{Fragment, useState, useEffect} from 'react';
import {
    Row, Col,
    Container,
    Label,
    Card, CardBody, ButtonToggle
} from 'reactstrap';
import {SlWrench} from 'react-icons/sl';
import {FiEye, 
    FiTrash2,
    FiEdit3} from 'react-icons/fi';
import {
    Menu,
    Item,
    useContextMenu,
} from "react-contexify/dist/index.js";
import swal from 'sweetalert';
import 'react-contexify/dist/ReactContexify.css';
//Component
import SignatureContainer from '../SignatureContainer/SignatureContainer';
import ModalVerCiclo from '../ModalVerCiclo/ModalVerCiclo';
import ModalEditarCiclo from '../ModalEditarCiclo/ModalEditarCiclo';

//model
const datosCicloModel ={
    id_ciclo:1,
    numero_ciclo:"I",
    lista_asignaturas:[
    ]
}

const  CicloContainer = props => {
    const [datosCiclo, setDatosCiclo] = useState(datosCicloModel);
    const [modales, setModales] = useState({modalVer:false, modalEditar:false});
    //menu
    const MENU_ID = "menu-id" +datosCiclo.id_ciclo;
    const {show} = useContextMenu({
        id: MENU_ID,
    });

    useEffect(()=>{
        props.datosCiclo != null?setDatosCiclo(props.datosCiclo):(()=>{})();
    },[props.datosCiclo])

    const _displayConfigMenu=(event)=>{
        console.log("EVENT: ",event)
        event.preventDefault();
        
        show({
            event,
            props: {
                key: 'value',
            }
        });
    }

    const _handleMenuOption=(type, ciclo)=>{
        // event.preventDefault();
        if(type == 1){
            //Ver
            // setDatosCiclo(ciclo);
            setModales({modalVer:true, modalEditar:false});
        }else if( type == 2){
            //Editar
            setModales({modalVer:false, modalEditar:true});
        }else if(type == 3){
            //Eliminar
            swal({
                title:"Eliminar Ciclo",
                icon:"warning",
                text:"¿Desea Eliminar toda la configuración del ciclo: "+ ciclo.numero_ciclo+" ?.",
                buttons:["Cancelar", "Aceptar"]
            }).then(async respuesta =>{
                if(respuesta){
                   try{
                     //LLAMADA
                     swal({
                        title:"Ciclo Eliminado",
                        icon:"success",
                        text:"Se reacomodarán los números de ciclo",
                        button:"Aceptar"
                    });
                    if(props.recargarPadre !=  null){
                        props.recargarPadre();
                    } //para recargar los servicios.
                   }catch(e){
                    console.log("Error: ",e)
                    swal({
                        title:"Error",
                        icon:"error",
                        text:"Error al eliminar el ciclo, comunica con el equipo de desarrollo",
                        button:"Aceptar"
                    })
                   }
                }
            });

        }


    }

    return(
        <Fragment>
            <div className="cicloCardContainer">
                <Card style={{ marginRight:"1%", marginLeft:"1%", marginBottom:"1%", backgroundColor:"#dadada"}}>
                    <CardBody>
                        <center><h5>Ciclo: <b>{datosCiclo.numero_ciclo}</b></h5></center>
                        <div className="signaturesCicloContainer"
                            style={{
                                display:"flex",
                                flexDirection:"row",
                                gap:"1.5"
                            }}
                        >
                            {datosCiclo.lista_asignaturas.map(asignatura=>(
                                <div style={{width:"19%"}}>
                                    <SignatureContainer
                                        correlativo={asignatura.correlativo}
                                        codigo_asignatura={asignatura.codigo_asignatura}
                                        nombre_asignatura={asignatura.nombre_asignatura}
                                        unidades_valorativas={asignatura.unidades_valorativos}
                                        prerequisitos={asignatura.prerequisitos}
                                        enableEdit={props.enableEdit}
                                    />    
                                </div>
                            ))}
                            <div style={{width:"1%", marginTop:"1%"}} onClick={_displayConfigMenu} >
                                <ButtonToggle 
                                    color="info" 
                                    size="xs"
                                    
                                    outline>
                                    <SlWrench />
                                </ButtonToggle>
                                <Menu id={MENU_ID} style={{fontSize:"12px"}}>
                                    {/*Cambiar id_ciclo por el correlativo de asignatura_maestria_ciclo */}
                                    <Item 
                                        onClick={(event)=>{_handleMenuOption(1, datosCiclo)}} 
                                        key={1}> <div style={{color:"green"}}><FiEye /></div> &nbsp;Detalle
                                    </Item>
                                    
                                    {props.enableEdit == true?(
                                        <div>
                                            {/*Cambiar id_ciclo por el correlativo de asignatura_maestria_ciclo */}
                                            <Item 
                                                onClick={(event)=>{_handleMenuOption(2, datosCiclo)}} 
                                                key={2}><div style={{color:"orange"}}><FiEdit3 /></div> &nbsp;Editar
                                            </Item>
                                            <Item onClick={(event)=>{_handleMenuOption(3, datosCiclo)}} key={3}><div style={{color:"red"}}><FiTrash2 /></div> &nbsp;Eliminar</Item>
                                        </div>
                                    ):(
                                        <span></span>
                                    )}
                                    
                                </Menu>
                            </div>
                        </div>
                        <ModalVerCiclo modalOpen={modales.modalVer} datosCiclo={datosCiclo} recargarPadre={()=>{setModales({modalVer: false, modalEditar: false})}} />
                        <ModalEditarCiclo modalOpen={modales.modalEditar} datosCiclo={datosCiclo} recargarPadre={()=>{setModales({modalVer: false, modalEditar: false})}}  />

                    </CardBody>
                </Card>
            </div>
        </Fragment>
    );
}

export default CicloContainer;