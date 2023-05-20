import React,{Fragment} from 'react';
export const columnas_tabla=[
    {
       
        text:
        <Fragment>
            <i class="fa fa-sort-numeric-down"></i>
            &nbsp;
            <label style={{fontSize:10}}>No.</label>
        </Fragment>,
        dataField:"numero_fila",
        style:{
            textAlign:'center', // para celdas.
            fontSize:"13px"
        },
        headerStyle:()=>{
            return{
                width:"2%"
            }
        },
        
    },
    {
       
        text:
        <Fragment>
            <i class="fas fa-sort-numeric-down"></i>
            &nbsp;
            <label style={{fontSize:10}}>Codigo Maestria.</label>
        </Fragment>,
        dataField:"codigo_maestria",
        style:{
            textAlign:'center', // para celdas.
             fontSize:"13px"
        },
        headerStyle:()=>{
            return{
                width:"10%"
            }
        },
        
    },

    {
       
        text:
        <Fragment>
            <i class="fas fa-sort-numeric-down"></i>
            &nbsp;
            <label style={{fontSize:10}}>Nombre Maestria</label>
        </Fragment>,
        dataField:"nombre_maestria",
        style:{
            textAlign:'center', // para celdas.
             fontSize:"13px"
        },
        headerStyle:()=>{
            return{
                width:"15%"
            }
        },
        
    },

    {
       
        text:
        <Fragment>
            <i class="fas fa-sort-numeric-down"></i>
            &nbsp;
            <label style={{fontSize:10}}>Descripción</label>
        </Fragment>,
        dataField:"descripcion",
        style:{
            textAlign:'justify', // para celdas.
             fontSize:"13px"
        },
        headerStyle:()=>{
            return{
                width:"15%"
            }
        },
        
    },

    {
       
        text:
        <Fragment>
            <i class="fas fa-sort-numeric-down"></i>
            &nbsp;
            <label style={{fontSize:10}}>Modalidad</label>
        </Fragment>,
        dataField:"modalidad",
        style:{
            textAlign:'center', // para celdas.
             fontSize:"13px"
        },
        headerStyle:()=>{
            return{
                width:"5%"
            }
        },
        
    },

    {
       
        text:
        <Fragment>
            <i class="fas fa-sort-numeric-down"></i>
            &nbsp;
            <label style={{fontSize:10}}>Estado</label>
        </Fragment>,
        dataField:"estado",
        style:{
            textAlign:'center', // para celdas.
            fontSize:"13px"
        },
        headerStyle:()=>{
            return{
                width:"8%"
            }
        },
        
    },

    
    {
       
        text:
        <Fragment>
            <i class="fas fa-sort-numeric-down"></i>
            &nbsp;
            <label style={{fontSize:10}}>Operaciones</label>
        </Fragment>,
        dataField:"operaciones",
        style:{
            textAlign:'justify', // para celdas.
        },
        headerStyle:()=>{
            return{
                width:"15%"
            }
        },
        
    }
]