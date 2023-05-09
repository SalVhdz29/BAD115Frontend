import React,{Fragment, useState, useEffect} from 'react';
import {
    Row, Col,
    Container,
    Label,
    Card, CardBody
} from 'reactstrap';

import SignatureContainer from '../SignatureContainer/SignatureContainer';

const datosCicloModel ={
    numero_ciclo:"I",
    lista_asignaturas:[

    ]
}

const  CicloContainer = props => {
    const [datosCiclo, setDatosCiclo] = useState(datosCicloModel);

    useEffect(()=>{
        props.datosCiclo != null?setDatosCiclo(props.datosCiclo):(()=>{})();
    },[props.datosCiclo])

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
                                <div style={{width:"20%"}}>
                                    <SignatureContainer
                                        correlativo={asignatura.correlativo}
                                        codigo_asignatura={asignatura.codigo_asignatura}
                                        nombre_asignatura={asignatura.nombre_asignatura}
                                        unidades_valorativas={asignatura.unidades_valorativas}
                                        prerequisitos={asignatura.prerequisitos} 
                                    />    
                                </div>
                            ))}
                        </div>

                    </CardBody>
                </Card>
            </div>
        </Fragment>
    );
}

export default CicloContainer;