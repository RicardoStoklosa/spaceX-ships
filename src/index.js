import dotenv from 'dotenv';
import {ShipsInCSV} from './Handlers/SpaceXApiHandler.js'

dotenv.config();

ShipsInCSV()
    .then((shipsCSV) => console.log(shipsCSV))