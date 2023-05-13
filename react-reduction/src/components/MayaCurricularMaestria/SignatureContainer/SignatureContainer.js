import React, {Fragment, useState, useEffect} from 'react';
import {Container,
Row, Col, Label, Card, CardBody} from 'reactstrap';

const datosAsignaturaModel={
    correlativo:"",
    codigo_asignatura:"",
    nombre_asignatura:"",
    unidades_valorativas:"",
    prerequisitos:""
}

const SignatureContainer = ({correlativo, codigo_asignatura, nombre_asignatura, unidades_valorativas, prerequisitos}) =>{

    const [datosAsignatura, setDatosAsignatura] = useState(datosAsignaturaModel)

    useEffect(()=>{
    setDatosAsignatura({
        correlativo,
        codigo_asignatura,
        nombre_asignatura,
        unidades_valorativas,
        prerequisitos
    })
    },[correlativo, codigo_asignatura, nombre_asignatura, unidades_valorativas, prerequisitos])


    return(
        <Fragment>
            <div className="signatureMainContainer" style={{fontSize:"10px"}}>
                <Row>
                    <Col>

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
                    </Col>
                </Row>
            </div>   
        </Fragment>
    )
}

export default SignatureContainer;