import React , {FC} from "react";
import Task from "./Task";
import { task } from "./Task";
interface Props{
    tasks: (string | Object | any )[];
    onDelete?: (...arg: any)=> void;
    onCheck?: (...arg: any)=> void;

}

const Tasks: FC<Props> = ({ tasks, onDelete, onCheck}) => {
  return (
    <>
      {tasks.map((item: task) => {
        return (
          <Task
            key={item?.id}
            task={item}
            handleDelete={onDelete}
            handleCheckBox={onCheck}
          />
        );
      })}
    </>
  );
};

export default Tasks;