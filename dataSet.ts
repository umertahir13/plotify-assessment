import { ITask } from "./controllers/progress";
export enum data {
    Foundation = "Foundation",
    Discovery = "Discovery",
    Delivery = "Delivery",
  
  }
  interface IStep{
    taskDescription:string;
    id:number;
    status:boolean
}
interface IDataSet{
    Foundation:Array<IStep>;
    Discovery:Array<IStep>;
    Delivery:Array<IStep>;
}
let dataSet:IDataSet = {
    Foundation:[],
    Discovery:[],
    Delivery:[],

}
export default dataSet;