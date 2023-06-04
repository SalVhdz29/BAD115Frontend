export const columnas_tabla=[
    {
        dataField:"numero_fila",
        text:"No."
    },
    {
        dataField:"codigo_asignatura",
        text:"Codigo Asignatura"
    },
    {
        dataField:"nombre_asignatura",
        text:"Nombre Asignatura"
    },
    {
        dataField:"prerequisitos",
        text:"Prerequisitos"
    },
    {
        dataField:"duracion_semanas",
        text:"Duración (semanas)"
    },
    {
        dataField:"metodologias",
        text:"Metodologias"
    }
]
export const columnas_tabla_editar=[
    {
        dataField:"numero_fila",
        text:"No.",
        style:{
            textAlign:'center', // para celdas.
             fontSize:"12px"
        },
        headerStyle:()=>{
            return{
                width:"2%",
                fontSize:"12px"
            }
        },
    },
    {
        dataField:"codigo_asignatura",
        text:"Codigo Asignatura",
        style:{
            textAlign:'center', // para celdas.
             fontSize:"12px"
        },
        headerStyle:()=>{
            return{
                width:"8%",
                fontSize:"12px"
            }
        },
    },
    {
        dataField:"nombre_asignatura",
        text:"Nombre Asignatura",
        style:{
            textAlign:'center', // para celdas.
             fontSize:"12px"
        },
        headerStyle:()=>{
            return{
                width:"8%",
                fontSize:"12px"
            }
        },
    },
    {
        dataField:"prerequisitos",
        text:"Prerequisitos",
        style:{
            textAlign:'justify', // para celdas.
             fontSize:"12px"
        },
        headerStyle:()=>{
            return{
                width:"20%",
                fontSize:"12px"
            }
        },
    },
    {
        dataField:"duracion_semanas",
        text:"Duración (semanas)",
        style:{
            textAlign:'center', // para celdas.
             fontSize:"12px"
        },
        headerStyle:()=>{
            return{
                width:"5%",
                fontSize:"12px"
            }
        },
    },
    {
        dataField:"metodologias",
        text:"Metodologias",
        style:{
            textAlign:'justify', // para celdas.
             fontSize:"12px"
        },
        headerStyle:()=>{
            return{
                width:"20%",
                fontSize:"12px"
            }
        },
    },
    {
        dataField:"area_conocimiento",
        text:"Area Conocimiento",
        style:{
            textAlign:'justify', // para celdas.
             fontSize:"12px"
        },
        headerStyle:()=>{
            return{
                width:"20%",
                fontSize:"12px"
            }
        },
    },
    {
        dataField:"operaciones",
        text:"Operaciones"
    }
]