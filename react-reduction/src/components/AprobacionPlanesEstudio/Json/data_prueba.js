export const columnas_tabla =[
    {
        dataField:"numero_fila",
        text:"No."
    },
    {
        dataField:"autor",
        text:"Autor",
    },
    {
        dataField:"nombre_maestria",
        text:"Maestria"
    },
    {
        dataField:"estado",
        text:"Estado",
    },
   
    {
        dataField:"titulo_otorgado",
        text:"Titulo Otorgado"
    },
    {
        dataField:"fecha_creacion",
        text:"Fecha Creación"
    },
    {
        dataField:"operaciones",
        text:"Operaciones"
    },
]

export const datos_prueba_json={
    lista_maestrias:[
        {
            id_maestria:1,
            value:1,
            label:"Maestria 1",
            nombre_maestria:"Maestria 1",
            codigo_maestria:"MATT115"
        },
        {
            id_maestria:2,
            value:2,
            label:"Maestria 2",
            nombre_maestria:"Maestria 2",
            codigo_maestria:"MATT115"
        },
        {
            id_maestria:3,
            value:3,
            label:"Maestria 3",
            nombre_maestria:"Maestria 3",
            codigo_maestria:"MATT115"
        },
        {
            id_maestria:4,
            value:4,
            label:"Maestria 4",
            nombre_maestria:"Maestria 4",
            codigo_maestria:"MATT115"
        }
    ],
    lista_estados:[
        {
            id_estado:1,
            value:1,
            label:"Estado 1",
            text:"Estado 1"
        },
        {
            id_estado:2,
            value:2,
            label:"Estado 2",
            text:"Estado 2"
        },
        {
            id_estado:3,
            value:3,
            label:"Estado 3",
            text:"Estado 3"
        },
        {
            id_estado:4,
            value:4,
            label:"Estado 4",
            text:"Estado 4"
        },
        {
            id_estado:5,
            value:5,
            label:"Estado 5",
            text:"Estado 5"
        }
    ],
    planes_estudio:[
        {
           id_plan_estudio:1,
           autor:{
            id_usuario:1,
            nombre_autor:"Salvador Hernandez"
           },
           maestria:{
            codigo_maestria:"MATT115",
            nombre_maestria:"Maestria en ciencias de la computación"
           },
           estado:{
            id_estado:1,
            estado:"Propuesto"
           },
           titulo_otorgado:"Master en ciencias de la computación",
           fecha_creacion:"01/05/2023"

        },
        {
            id_plan_estudio:2,
            autor:{
             id_usuario:1,
             nombre_autor:"Salvador Hernandez"
            },
            maestria:{
             codigo_maestria:"MAT1154",
             nombre_maestria:"Maestria en ciencias de la computación"
            },
            estado:{
             id_estado:2,
             estado:"Estado 2"
            },
            titulo_otorgado:"Master en ciencias de la computación",
            fecha_creacion:"01/05/2023"
 
         },
         {
            id_plan_estudio:3,
            autor:{
             id_usuario:1,
             nombre_autor:"Salvador Hernandez"
            },
            maestria:{
             codigo_maestria:"MAT1154",
             nombre_maestria:"Maestria en ciencias de la computación"
            },
            estado:{
             id_estado:3,
             estado:"Estado 3"
            },
            titulo_otorgado:"Master en ciencias de la computación",
            fecha_creacion:"01/05/2023"
 
         },
         {
            id_plan_estudio:4,
            autor:{
             id_usuario:1,
             nombre_autor:"Salvador Hernandez"
            },
            maestria:{
             codigo_maestria:"MAT1154",
             nombre_maestria:"Maestria en ciencias de la computación"
            },
            estado:{
             id_estado:4,
             estado:"Estado 4"
            },
            titulo_otorgado:"Master en ciencias de la computación",
            fecha_creacion:"01/05/2023"
 
         }
    ]

}