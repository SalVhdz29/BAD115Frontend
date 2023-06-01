import { DateTime } from "luxon"
export const columnas_tabla=[
    {
        dataField:"numero_fila",
        text:"No."
    },
    {
        text:"Grado Academico",
        dataField:"grado_academico"
    },
    {
        dataField:"descripcion_grado_academico",
        text:"Descripcion"
    },
    {
        dataField:"descarga_documento",
        text:"Documento"
    },
    {
        dataField:"operaciones",
        text:"Operaciones"
    }
]

export const columnas_tabla_laboral=[
    {
        dataField:"numero_fila",
        text:"No."
    },
    {
        dataField:"titulo_puesto_experiencia",
        text:"Puesto"
    },
    {
        dataField:"descripcion_experiencia_laboral",
        text:"Descripcion"
    },
    {
        dataField:"fecha_inicio",
        text:"Fecha de Inicio"
    },
    {
        dataField:"fecha_fin",
        text:"Fecha de Finalización"
    },
    {
        dataField:"operaciones",
        text:"Operaciones"
    }
]
//tablas_involuccradas 



export const datos_usuario={
    datos_personales:{
        primer_nombre:"Salvador",
        segundo_nombre:"Enrique",
        tercer_nombre:"",
        primer_apellido:"Hernández",
        segundo_apellido:"Chavez",
        direccion:"avenida buenavida casa 40 block N",
        fecha_nacimiento: DateTime.now(),
        correo_electronico:"salvador@hotmail.com",
        correo_eletronico_institucional: "HC14038@ues.edu.sv",
        pais:{
            id_pais:1,
            pais:"El Salvador",
            value:1,
            label: "El Salvador"
        },
        departamento:{
            id_departamento:1,
            departamento: "San Salvador",
            value:1,
            label:"San Salvador"
        },
        municipio:{
            id_municipio:1,
            municipio:"San Salvador",
            value:1,
            label:"San Salvador",
            id_departamento:1,
        },
        dui:"045657789",
        nit:"07132823451224",
        nup:"1234556789",
        numero_pasaporte:"N/A",
        documento_personal:"N/A",
        telefono_personal:"71096788",
        telefono_oficina:"22447777"
    },
    lista_pais:[
        {
            id_pais:1,
            pais:"El Salvador",
            value:1,
            label:"El Salvador",
        },
        {
            id_pais:2,
            pais:"Otro Country",
            value:2,
            label:"Otro Country",
        }

    ],
    lista_departamentos:[
        {
            id_departamento:1,
            departamento:"San Salvador",
            value:1,
            label:"San Salvador",
        },
        {
            id_departamento:2,
            departamento:"Jan Vijente",
            value:2,
            label:"Jan Vijente",
        },
        {
            id_departamento:3,
            departamento:"Otro",
            value:3,
            label:"Otro",
        },
    ],
    lista_municipios:[
        {
            id_municipio:1,
            municipio:"San Salvador",
            id_departamento:1,
            value:1,
            label:"San Salvador",
        },
        {
            id_municipio:2,
            municipio:"Soyapango",
            id_departamento:1,
            value:2,
            label:"Soyapango",
        },
        {
            id_municipio:3,
            municipio:"Muni Jan 1",
            id_departamento:1,
            value:3,
            label:"Muni Jan 1",
        },
        {
            id_municipio:4,
            municipio:"Muni Jan 2",
            id_departamento:2,
            value:4,
            label:"Muni Jan 2",
        },
        {
            id_municipio:5,
            municipio:"Muni Otro 1",
            id_departamento:3,
            value:5,
            label:"Muni Jan 1",
        },
        {
            id_municipio:6,
            municipio:"Muni Otro 2",
            id_departamento:3,
            value:6,
            label:"Muni Otro 2",
        }
    ],
    lista_expediente_academico:[
        {
            id_grado_academico:1,
            grado_academico:"Grado Academico 1",
            descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            documento:"",
        },
        {
            id_grado_academico:2,
            grado_academico:"Grado Academico 2",
            descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            documento:"",
        },
        {
            id_grado_academico:3,
            grado_academico:"Grado Academico 3",
            descripcion:" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            documento:"",
        }
    ],
    lista_experiencia_laboral:[
        {
            id_experiencia_laboral:1,
            puesto:"Puesto 1",
            descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            fecha_inicio: DateTime.now(),
            fecha_fin: DateTime.now()        
        },
        {
            id_experiencia_laboral:2,
            puesto:"Puesto 2",
            descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            fecha_inicio: DateTime.now(),
            fecha_fin: DateTime.now()        
        },
    ],
    documentacion_profesor:{
        id_documentacion_profesor: 1,
        tipo_profesor: "",
        documento_profesor: "",
        tipo_documentacion_profesor: "cv",
        fecha_creacion_documento: DateTime.now(),
        
    },
    bandera_edicion: true
}