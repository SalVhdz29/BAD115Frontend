import React, {Fragment, useState, useEffect} from 'react';
import { Container,
    Row, Col,
    ButtonToggle,
    Label,FormGroup,
    Card,
    CardHeader,CardBody,Button
 } from "reactstrap";
 import Select from 'react-select';
import swal from "sweetalert";
import {
    MdSchool,
    MdWarningAmber,
    MdViewHeadline
} from 'react-icons/md';
import{
    AvForm,
    AvField
} from 'availity-reactstrap-validation';
import {FiEdit3} from 'react-icons/fi';
import {FaSave} from 'react-icons/fa';
import {MdOutlineCancel} from 'react-icons/md';
import { DateTime } from 'luxon';
//Component
import DataTable from '../DataTable/DataTable';
import DateSelector from '../DateSelector/DateSelector';
//json
import { columnas_tabla, columnas_tabla_laboral, datos_usuario } from './Json/columnas_tabla';
