export const columnas_tabla_prerequisitos=[
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
        text:"Asignatura"
    },
    {
        dataField:"ciclo_maestria_asignatura",
        text:"Ciclo impartido"
    },
];

export const columnas_tabla_areas_conocimiento=[
    {
        dataField:"numero_fila",
        text:"No."
    },
    {
        dataField:"area_conocimiento",
        text:"Area Conocimiento"
    },
    {
        dataField:"descripcion",
        text:"Descripcion"
    },
];

export const data_asignatura={
    codigo_asignatura:"MAT115",
    nombre_asignatura:"Matemática I",
    prerequisitos:[
        {
            codigo_asignatura:"MAA114",
            nombre_asignatura:"Matematica I",
            ciclo_maestria_asignatura:"I"
        },
        {
            codigo_asignatura:"MAA114",
            nombre_asignatura:"Matematica I",
            ciclo_maestria_asignatura:"I"
        },
        {
            codigo_asignatura:"MAA114",
            nombre_asignatura:"Matematica I",
            ciclo_maestria_asignatura:"I"
        }
    ],
    areas_conocimiento:[
        {
            area_conocimiento:"Nombre Area Conocimiento",
            descripcion:"Lorem ipsum no me acuerdo que mas pone esta onda así que lo agrego asi jsjsjsj que hueva pegarlo directamente de donde lo tenia"
        },
        {
            area_conocimiento:"Nombre Area Conocimiento",
            descripcion:"Lorem ipsum no me acuerdo que mas pone esta onda así que lo agrego asi jsjsjsj que hueva pegarlo directamente de donde lo tenia"
        },
        {
            area_conocimiento:"Nombre Area Conocimiento",
            descripcion:"Lorem ipsum no me acuerdo que mas pone esta onda así que lo agrego asi jsjsjsj que hueva pegarlo directamente de donde lo tenia"
        },
        {
            area_conocimiento:"Nombre Area Conocimiento",
            descripcion:"Lorem ipsum no me acuerdo que mas pone esta onda así que lo agrego asi jsjsjsj que hueva pegarlo directamente de donde lo tenia"
        }
    ]
}