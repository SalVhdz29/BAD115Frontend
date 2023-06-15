export const columnas_tabla=[
    {
        dataField:"numero_fila",
        text:"No.",
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
        dataField:"tipo_evaluacion",
        text:"Tipo Evaluacion",
        style:{
            textAlign:'center', // para celdas.
            fontSize:"12px"
        },
        headerStyle:()=>{
            return{
                width:"15%",
                fontSize:"12px"
            }
        },
    },
    {
        dataField:"unidades_evaluacion",
        text:"Unidades Evaluación",
        style:{
            textAlign:'center', // para celdas.
            fontSize:"12px"
        },
        headerStyle:()=>{
            return{
                width:"15%",
                fontSize:"12px"
            }
        },
    },
    {
        dataField:"contenidos_evaluacion",
        text:"Contenidos",
        style:{
            textAlign:'center', // para celdas.
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
        dataField:"fecha",
        text:"Fecha Evaluación",
        style:{
            textAlign:'center', // para celdas.
            fontSize:"12px"
        },
        headerStyle:()=>{
            return{
                width:"15%",
                fontSize:"12px"
            }
        },
    },
    {
        dataField:"porcentaje_eva",
        text:"Porcentaje",
        style:{
            textAlign:'center', // para celdas.
            fontSize:"12px"
        },
        headerStyle:()=>{
            return{
                width:"15%",
                fontSize:"12px"
            }
        },
    },
    {
        dataField:"operaciones",
        text:"Operaciones",
        style:{
            textAlign:'center', // para celdas.
            fontSize:"12px"
        },
        headerStyle:()=>{
            return{
                width:"15%",
                fontSize:"12px"
            }
        },
    }
];

export const lista_unidades_evaluacion=[
    {
        id_unidad:1,
        nombre_unidad:"UNIDAD I",
        value:1,
        label:"UNIDAD I",
        contenidos:[
            {
                id_contenido:1,
                nombre_contenido: "contenido 1 unidad 1",
                value:1,
                label:"contenido 1 unidad 1",
            },
            {
                id_contenido:2,
                nombre_contenido: "contenido 2 unidad 1",
                value:2,
                label:"contenido 2 unidad 1",
            },
            {
                id_contenido:3,
                nombre_contenido: "contenido 3 unidad 1",
                value:3,
                label:"contenido 3 unidad 1",
            }
        ]
    },
    {
        id_unidad:2,
        nombre_unidad:"UNIDAD II",
        value:2,
        label:"UNIDAD II",
        contenidos:[
            {
                id_contenido:4,
                nombre_contenido: "contenido 1 unidad 2",
                value:4,
                label:"contenido 1 unidad 2",
            },
            {
                id_contenido:5,
                nombre_contenido: "contenido 2 unidad 2",
                value:5,
                label:"contenido 2 unidad 2",
            },
            {
                id_contenido:6,
                nombre_contenido: "contenido 3 unidad 2",
                value:6,
                label:"contenido 3 unidad 2",
            }
        ]
    },
    {
        id_unidad:3,
        nombre_unidad:"UNIDAD III",
        value:3,
        label:"UNIDAD III",
        contenidos:[
            {
                id_contenido:7,
                nombre_contenido: "contenido 1 unidad 3",
                value:7,
                label:"contenido 1 unidad 3",
            },
            {
                id_contenido:8,
                nombre_contenido: "contenido 2 unidad 3",
                value:8,
                label:"contenido 2 unidad 3",
            },
            {
                id_contenido:9,
                nombre_contenido: "contenido 3 unidad 3",
                value:9,
                label:"contenido 3 unidad 3",
            }
        ]
    },
    {
        id_unidad:4,
        nombre_unidad:"UNIDAD IV",
        value:4,
        label:"UNIDAD IV",
        contenidos:[
            {
                id_contenido:10,
                nombre_contenido: "contenido 1 unidad 4",
                value:10,
                label:"contenido 1 unidad 4",
            },
            {
                id_contenido:11,
                nombre_contenido: "contenido 2 unidad 4",
                value:11,
                label:"contenido 2 unidad 4",
            },
            {
                id_contenido:12,
                nombre_contenido: "contenido 3 unidad 4",
                value:12,
                label:"contenido 3 unidad 4",
            }
        ]
    },
    {
        id_unidad:5,
        nombre_unidad:"UNIDAD V",
        value:5,
        label:"UNIDAD V",
        contenidos:[
            {
                id_contenido:13,
                nombre_contenido: "contenido 1 unidad 5",
                value:13,
                label:"contenido 1 unidad 5",
            },
            {
                id_contenido:14,
                nombre_contenido: "contenido 2 unidad 5",
                value:14,
                label:"contenido 2 unidad 5",
            },
            {
                id_contenido:15,
                nombre_contenido: "contenido 3 unidad 5",
                value:15,
                label:"contenido 3 unidad 5",
            }
        ]
    }
]

export const lista_tipos_evaluacion=[
    {
        id_tipo_evaluacion:1,
        tipo_evaluacion:"Evaluación Parcial",
        value:1,
        label:"Evaluación Parcial"
    },
    {
        id_tipo_evaluacion:2,
        tipo_evaluacion:"Examen Corto",
        value:2,
        label:"Examen Corto"
    },
    {
        id_tipo_evaluacion:3,
        tipo_evaluacion:"Examen de Laboratorio",
        value:3,
        label:"Examen de Laboratorio"
    },
    {
        id_tipo_evaluacion:4,
        tipo_evaluacion:"Control de Lectura",
        value:4,
        label:"Control de Lectura"
    }
]

export const lista_evaluaciones=[
    {
        id_evaluacion:1,
        id_tipo_evaluacion:1,
        unidades:[1,2],
        contenidos:[1,2,4],
        fecha_evaluacion:'2023-06-14',
        porcentaje:20
    }
]