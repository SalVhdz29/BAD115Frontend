import logo200Image from 'assets/img/logo/logo_200.png';
import logoSerrano from 'assets/img/logo/logoSerrano.png';
import sidebarBgImage from 'assets/img/sidebar/sidebar-4.jpg';
import SourceLink from 'components/SourceLink';
import React,{useEffect, useState} from 'react';
import { FaGithub, FaTooth, FaUserAlt, FaUsers,FaFileMedical, FaProductHunt,FaBoxes,FaServicestack,FaMoneyBillAlt } from 'react-icons/fa';
import {VscFileSubmodule} from 'react-icons/vsc';
import {ImProfile} from 'react-icons/im';
import request from 'superagent';
//import { IoFileTrayFullSharp } from 'react-icons/io';
import {
  MdAccountCircle,
  MdArrowDropDownCircle,
  MdBorderAll,
  MdBrush,
  MdChromeReaderMode,
  MdDashboard,
  MdExtension,
  MdGroupWork,
  MdInsertChart,
  MdKeyboardArrowDown,
  MdNotificationsActive,
  MdPages,
  MdRadioButtonChecked,
  MdSend,
  MdStar,
  MdTextFields,
  MdViewCarousel,
  MdViewDay,
  MdViewList,
  MdWeb,
  MdWidgets,
  MdDateRange,
  MdSchool
} from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import {
  // UncontrolledTooltip,
  Collapse,
  Nav,
  Navbar,
  NavItem,
  NavLink as BSNavLink,
} from 'reactstrap';
import bn from 'utils/bemnames';
import { GrResources } from 'react-icons/gr';
import SubMenu from './SubMenu/SubMenu';

import { connect } from 'react-redux';
import Cookies from 'js-cookie';
import swal from 'sweetalert';
import { OBTENER_DATOS_USUARIO_TOKEN } from '../../api/apiTypes';

 //actions
 import { setDatosUsuario, setTokenUsuario, setListaPermisos } from '../../store/actions';
const sidebarBackground = {
  backgroundImage: `url("${sidebarBgImage}")`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};

// const navComponents = [
//   { to: '/ButtonPage', name: 'buttons', exact: false, Icon: MdRadioButtonChecked },
//   {
//     to: '/ButtonGroupPage',
//     name: 'button groups',
//     exact: false,
//     Icon: MdGroupWork,
//   },
//   { to: '/FormPage', name: 'forms', exact: false, Icon: MdChromeReaderMode },
//   { to: '/InputGroupPage', name: 'input groups', exact: false, Icon: MdViewList },
//   {
//     to: '/DropdownPage',
//     name: 'dropdowns',
//     exact: false,
//     Icon: MdArrowDropDownCircle,
//   },
//   { to: '/BadgePage', name: 'badges', exact: false, Icon: MdStar },
//   { to: '/AlertPage', name: 'alerts', exact: false, Icon: MdNotificationsActive },
//   { to: '/ProgressPage', name: 'progress', exact: false, Icon: MdBrush },
//   { to: '/ModalPage', name: 'modals', exact: false, Icon: MdViewDay },
// ];

// const navContents = [
//   { to: '/TypographyPage', name: 'typography', exact: false, Icon: MdTextFields },
//   { to: '/TablePage', name: 'tables', exact: false, Icon: MdBorderAll },
// ];

// const pageContents = [
//   { to: '/login', name: 'login / signup', exact: false, Icon: MdAccountCircle },
//   {
//     to: '/login-modal',
//     name: 'login modal',
//     exact: false,
//     Icon: MdViewCarousel,
//   },
// ];

const navItems = [
  { to: '/', name: 'Inicio', exact: true, Icon: MdDashboard },
  { to: '/CardPage', name: 'cards', exact: false, Icon: MdWeb },
  { to: '/ChartPage', name: 'charts', exact: false, Icon: MdInsertChart },
  { to: '/WidgetPage', name: 'widgets', exact: false, Icon: MdWidgets },
];

const dashBoard={ to:'/administracion_maestrias', name:'Dashboard', exact:false, Icon:MdDashboard};

const contents=[
  //Modulo Seguridad
  { to:'/gestion_usuarios', name: 'Gestión de Usuarios', exact: false, Icon: FaUserAlt},
  { to:'/gestion_roles', name: 'Gestión de Roles', exact: false, Icon: FaUsers},
  { to:"/gestion_recursos", name: 'Gestión de Recursos', exact: false, Icon: GrResources},
  { to:'/gestion_modulos', name: 'Gestión de Modulos', exact: false, Icon: VscFileSubmodule},


  //Modulo Pacientes
  // {to:'/Expediente', name:'Expedientes', exact:false, Icon: FaFileMedical},
  // {to:'/NuevoExpediente', name: 'Expediente', exact:false, Icon: ImProfile},
  // {to:"/CitasPorAtender", name:"Citas de Hoy", exact:false, Icon: MdDateRange},
  // {to:"/Insumo", name:"Gestión de Insumos", exact:false, Icon: FaProductHunt},
  // {to:"/InventarioLote", name:"Gestion de Inventarios", exact:false,Icon:FaBoxes},
  // {to:"/infoServicios", name:"Gestion de Servicios", exact:false, Icon: FaServicestack},
  // {to:"/GestionEmpleados",name:"Gestion de Empleados", exact:false, Icon: FaUsers},
  // {to:"/MonitoreoCuentas",name:" Monitoreo de Cuentas", exact: false, Icon: FaMoneyBillAlt },
  // {to:"/CitasAgendadas", name:"Citas Agendadas",exact:false, Icon:MdDateRange},
  // {to:"/Reporteria", name:"Reporteria", exact:false, Icon:FaMoneyBillAlt},
  // {to:'/', name:'BusquedaPacientes', exact:false, Icon:MdDashboard },

]

const bem = bn.create('sidebar');

const  Sidebar =props => {
 

  // const[ isOpenComponents, setIsOpenComponents] = useState(true);
  // const[ isOpenContents, setIsOpenContents ] = useState(true);
  // const[ isOpenPages, setIsOpenPages] = useState(true);

  const [listaRecursos, setListaRecursos] =useState([]);

  useEffect(()=>{
    _inicializar();
  },[])

  useEffect(()=>{
    props.state.permisos!=null?(setListaRecursos(props.state.permisos)):(setListaRecursos([]))
  },[props.state.permisos])

  const _inicializar=async()=>{
    try{
      const token = Cookies.get('token');
      let datos_usuario = await request.post(process.env.REACT_APP_ENDPOINT_BASE_URL + OBTENER_DATOS_USUARIO_TOKEN)
                                            .set('Accept', 'application/json')
                                            .set("Authorization", "Bearer " + token);
      datos_usuario = datos_usuario.body;
      datos_usuario.correo_electronico_usuario= "werwe"; // borrar Al modificar servicio.
  

      props.setListaPermisos(datos_usuario.permisos)
    }catch(e){
      console.log("Error: ",e)
      // swal({
      //   title:"Error al obtener permisos de usuario",
      //   icon:"error",
      //   text:"Ha ocurrido un error al obtener los permisos del usuario, pongase en contacto con el equipo de desarrollo",
      //   button:"Aceptar"
      // });
    }
  }


  


    return (
      <aside className={bem.b()} data-image={sidebarBgImage}>
        <div className={bem.e('background')} style={sidebarBackground} />
        <div className={bem.e('content')}>
          <Navbar>
            <SourceLink className="navbar-brand d-flex">

              <span className="text-white">
                Gestion de <br/> Maestrias <MdSchool />
              </span>
            </SourceLink>
          </Navbar>
          <Nav vertical>
            {/* {navItems.map(({ to, name, exact, Icon }, index) => (
              <NavItem key={index} className={bem.e('nav-item')}>
                <BSNavLink
                  id={`navItem-${name}-${index}`}
                  className="text-uppercase"
                  tag={NavLink}
                  to={to}
                  activeClassName="active"
                  exact={exact}
                >
                  <Icon className={bem.e('nav-item-icon')} />
                  <span className="">{name}</span>
                </BSNavLink>
              </NavItem>
            ))}

            <NavItem
              className={bem.e('nav-item')}
              //onClick={this.handleClick('Components')}
            >
              <BSNavLink className={bem.e('nav-item-collapse')}>
                <div className="d-flex">
                  <MdExtension className={bem.e('nav-item-icon')} />
                  <span className=" align-self-start">Components</span>
                </div>
                <MdKeyboardArrowDown
                  className={bem.e('nav-item-icon')}
                  style={{
                    padding: 0,
                    transform: isOpenComponents
                      ? 'rotate(0deg)'
                      : 'rotate(-90deg)',
                    transitionDuration: '0.3s',
                    transitionProperty: 'transform',
                  }}
                />
              </BSNavLink>
            </NavItem>
            <Collapse isOpen={isOpenComponents}>
              {navComponents.map(({ to, name, exact, Icon }, index) => (
                <NavItem key={index} className={bem.e('nav-item')}>
                  <BSNavLink
                    id={`navItem-${name}-${index}`}
                    className="text-uppercase"
                    tag={NavLink}
                    to={to}
                    activeClassName="active"
                    exact={exact}
                  >
                    <Icon className={bem.e('nav-item-icon')} />
                    <span className="">{name}</span>
                  </BSNavLink>
                </NavItem>
              ))}
            </Collapse> */}
       
                <NavItem key={1} className={bem.e('nav-item')}>
                <BSNavLink
                  id={`navItem-${dashBoard.name}-${1}`}
                  className="text-uppercase"
                  tag={NavLink}
                  to={dashBoard.to}
                  activeClassName="active"
                  exact={dashBoard.exact}
                >
                  <dashBoard.Icon className={bem.e('nav-item-icon')} />
                  <span className="">{dashBoard.name}</span>
                </BSNavLink>
              </NavItem>
        

            {
              listaRecursos.map(modulo=>{
                  let {nombre_modulo,
                       id_modulo,
                       recursos
                      } = modulo;

                  let navContent =[];

                  recursos.map(recurso_it =>{
                    //obteniendo los recursos de este módulo.
                    let content = contents.find(content_it => content_it.to == recurso_it.ruta);

                    content!=null?(navContent.push(content)):(content=null)
                  });


                return(
                    <SubMenu 
                        bem = {bem}
                        navComponents={navContent}
                        nombreModulo={nombre_modulo}
      
                    />
                )
              })
            }

           
{/* 
            <NavItem
              className={bem.e('nav-item')}
              onClick={this.handleClick('Contents')}
            >
              <BSNavLink className={bem.e('nav-item-collapse')}>
                <div className="d-flex">
                  <MdSend className={bem.e('nav-item-icon')} />
                  <span className="">Contents</span>
                </div>
                <MdKeyboardArrowDown
                  className={bem.e('nav-item-icon')}
                  style={{
                    padding: 0,
                    transform: isOpenContents
                      ? 'rotate(0deg)'
                      : 'rotate(-90deg)',
                    transitionDuration: '0.3s',
                    transitionProperty: 'transform',
                  }}
                />
              </BSNavLink>
            </NavItem>
            <Collapse isOpen={isOpenContents}>
              {navContents.map(({ to, name, exact, Icon }, index) => (
                <NavItem key={index} className={bem.e('nav-item')}>
                  <BSNavLink
                    id={`navItem-${name}-${index}`}
                    className="text-uppercase"
                    tag={NavLink}
                    to={to}
                    activeClassName="active"
                    exact={exact}
                  >
                    <Icon className={bem.e('nav-item-icon')} />
                    <span className="">{name}</span>
                  </BSNavLink>
                </NavItem>
              ))}
            </Collapse>

            <NavItem
              className={bem.e('nav-item')}
              onClick={this.handleClick('Pages')}
            >
              <BSNavLink className={bem.e('nav-item-collapse')}>
                <div className="d-flex">
                  <MdPages className={bem.e('nav-item-icon')} />
                  <span className="">Pages</span>
                </div>
                <MdKeyboardArrowDown
                  className={bem.e('nav-item-icon')}
                  style={{
                    padding: 0,
                    transform: isOpenPages
                      ? 'rotate(0deg)'
                      : 'rotate(-90deg)',
                    transitionDuration: '0.3s',
                    transitionProperty: 'transform',
                  }}
                />
              </BSNavLink>
            </NavItem>
            <Collapse isOpen={isOpenPages}>
              {pageContents.map(({ to, name, exact, Icon }, index) => (
                <NavItem key={index} className={bem.e('nav-item')}>
                  <BSNavLink
                    id={`navItem-${name}-${index}`}
                    className="text-uppercase"
                    tag={NavLink}
                    to={to}
                    activeClassName="active"
                    exact={exact}
                  >
                    <Icon className={bem.e('nav-item-icon')} />
                    <span className="">{name}</span>
                  </BSNavLink>
                </NavItem>
              ))}
            </Collapse> */}
          </Nav>
        </div>
      </aside>
    );
  
}

const mapStateToProps=reducers=>{
  return{
    state: reducers.permisosReducer
  }
}
const mapDispatchToProps = dispatch => {
  return{
    setListaPermisos: (permisos) => dispatch(setListaPermisos(permisos)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps) (Sidebar);
