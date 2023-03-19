import React ,{FC} from "react";
import { FaTimes } from "react-icons/fa";
export type task={
    id: number
    name: string
    check: boolean
}
interface Props {
    task: task;
    handleDelete?: (id:number) => void;
    handleCheckBox?: (id:number ,check:boolean) => void;

}
const Task: FC<Props> = ({ task, handleDelete, handleCheckBox }) => {
  return (
    <div className={`task`}>
      <h3>
        {task.name}{" "}
        {handleCheckBox && (
          <input
            type={"checkbox"}
            checked={task.check ? true : false}
            onChange={(e) => handleCheckBox(task.id, task.check ? false : true)}
          />
        )}
        {handleDelete && (
          <FaTimes
            style={{ color: "red", cursor: "pointer" }}
            onClick={() => handleDelete(task.id)}
          />
        )}
      </h3>
    </div>
  );
};

export default Task;
