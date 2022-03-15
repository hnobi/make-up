import DB from "../models/db";
import Makeup from "../models/Makeup";
import datas from './../data'

DB._connect();
Makeup.collection.drop();
Makeup.create(datas).then(d => console.log(d)).catch(e => console.log(e))


