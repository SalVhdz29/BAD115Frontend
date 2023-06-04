import React from 'react';
import { Redirect } from 'react-router-dom';

import DashboardPage from '../pages/DashboardPage';
import AuthPage from '../pages/AuthPage';
// import  AlertPage from '../pages/AlertPage';
// import  AuthModalPage from'pages/AuthModalPage';
// import BadgePage from'pages/BadgePage';
// import ButtonGroupPage from 'pages/ButtonGroupPage';
// import ButtonPage from 'pages/ButtonPage';
// import CardPage from 'pages/CardPage';
// import ChartPage from 'pages/ChartPage';
// import DropdownPage from 'pages/DropdownPage';
// import FormPage from 'pages/FormPage';
// import InputGroupPage from 'pages/InputGroupPage';
// import ModalPage from 'pages/ModalPage';
// import ProgressPage from 'pages/ProgressPage';
// import TablePage from 'pages/TablePage';
// import TypographyPage from 'pages/TypographyPage';
// import WidgetPage from 'pages/WidgetPage';
import BasePage from '../components/BasePage/BasePage';
import GestionUsuarios from '../components/GestionUsuarios/GestionUsuarios';
import TipoRecurso from '../components/TipoRecurso/TipoRecurso';
// import NuevoTipoRecurso from '../components/TipoRecurso/NuevoTipoRecurso/NuevoTipoRecurso';
import GestionRoles from '../components/GestionRoles/GestionRoles';
// import Expediente from '../components/Expediente/';
// import Insumo from '../components/Insumo/Insumo';
import infoRecursos from '../components/GestionRecursos/infoRecursos/infoRecursos'; 
import AdministracionMaestrias from '../components/AdministracionMaestrias/AdministracionMaestrias';
import AdministracionAsignaturas from '../components/AdministracionAsignaturas/AdministracionAsignaturas';
import AdministracionCohortes from '../components/AdministracionCohortes/AdministracionCohortes.';
import MayaCurricularMaestria from '../components/MayaCurricularMaestria/MayaCurricularMaestria';
import PlanEstudiosMaestria from '../components/PlanEstudiosMaestria/PlanEstudiosMaestria';
import ProgramaEstudioAsignatura from '../components/ProgramaEstudioAsignatura/ProgramaEstudioAsignatura';
import AprobacionPlanesEstudio from '../components/AprobacionPlanesEstudio/AprobacionPlanesEstudio';
import ConfiguracionCuentaEmpleado from '../components/ConfiguracionCuentaEmpleado.js/ConfiguracionCuentaEmpleado';
import SistemaEvaluacion from '../components/SistemaEvaluacion/SistemaEvaluacion';
// import NuevoRecurso from '../components/GestionRecursos/NuevoRecurso/NuevoRecurso';
// import BusquedaPacientes from '../components/BusquedaPacientes/BusquedaPacientes';
// import CitasPorAtender from '../components/CitasPorAtender/CitasPorAtender';
// import Diagnostico from '../components/Diagnostico/Diagnostico';
// import Factura from '../components/Factura/Factura';
// import InventarioLote from '../components/Inventario/InventarioLote';
// import infoServicios from '../components/GestionServicios/infoServicios/infoServicios';

// import GestionDiagnosticos from '../components/GestionDiagnosticos/GestionDiagnosticos';
// import GestionEmpleados from '../components/GestionEmpleados/GestionEmpleados';
// import MonitoreoCuentas from '../components/MonitoreoCuentas/MonitoreoCuentas';
// import CitasAgendadas from '../components/CitasAgendadas/CitasAgendadas';
// import ReporteriaCitas from '../components/Reporteria/Citas/RepoteriaCitas';
const userRoutes =[
    //{path:"/", component: TipoRecurso},
    
    {path:"/", component: AdministracionMaestrias},
    //{path:"/", component: DashboardPage},
    // {path:"/AlertPage", component: AlertPage},
    // {path: "/AuthModalPage", component: AuthModalPage},
    // {path: "/BadgePage", component: BadgePage},
    // {path:"/ButtonGroupPage", component: ButtonGroupPage},
    // {path:"/ButtonPage", component: ButtonPage},
    // {path:"/CardPage", component:CardPage},
    // {path:"/ChartPage", component:ChartPage},
    // {path:"/DropdownPage", component:DropdownPage},
    // {path:"/FormPage", component:FormPage},
    // {path:"/InputGroupPage", component:InputGroupPage},
    // {path:"/ModalPage", component:ModalPage},
    // {path:"/ProgressPage", component:ProgressPage},
    // {path:"/TablePage", component:TablePage},
    // {path:"/TypographyPage", component:TypographyPage},
    // {path:"/WidgetPage", component: WidgetPage},
    

    //MODULO DE SEGURIDAD
    {path:"/gestion_usuarios", component:GestionUsuarios},
    {path:"/gestion_modulos", component: TipoRecurso},  
    {path:"/gestion_roles", component:GestionRoles },
    {path:"/gestion_recursos", component: infoRecursos},
    //DIRECTOR MAESTRIA
    {path:"/administracion_maestrias", component:AdministracionMaestrias },
    {path:"/maya_curricular", component: MayaCurricularMaestria},
    {path:"/maestria_plan_estudios", component: PlanEstudiosMaestria},
    {path:"/aprobacion_plan_estudio", component: AprobacionPlanesEstudio},
    //COORDINADOR ACADEMICO
    {path:"/configuracion_cuenta_empleado", component: ConfiguracionCuentaEmpleado},
    {path:"/administracion_asignaturas", component: AdministracionAsignaturas},
    {path:"/administracion_cohortes", component: AdministracionCohortes},
    {path:"/programa_asignatura", component: ProgramaEstudioAsignatura},
    {path:"/sistema_evaluacion", component: SistemaEvaluacion},

    
    
    

    // {path:"/Expediente", component:Expediente },
    // {path:"/Insumo", component:Insumo },
    
    // {path:"/NuevoRecurso", component: NuevoRecurso},
    // {path:"/CitasPorAtender", component:CitasPorAtender},
    // {path:"/", component: BusquedaPacientes},
    // {path:"/Diagnostico", component:Diagnostico},
    // {path:"/Factura", component:Factura},
    // {path:"/InventarioLote", component:InventarioLote},
    // {path: "/infoServicios", component: infoServicios},
    // {path:"/GestionDiagnosticos", component:GestionDiagnosticos},
    // {path:"/GestionEmpleados", component:GestionEmpleados},
    // {path:"/MonitoreoCuentas", component:MonitoreoCuentas},
    // {path:"/CitasAgendadas", component:CitasAgendadas},
    // {path:"/Reporteria", component:ReporteriaCitas},
];

const authRoutes=[
    {path:"/login", component:AuthPage}
];


export{
    userRoutes,
    authRoutes
}