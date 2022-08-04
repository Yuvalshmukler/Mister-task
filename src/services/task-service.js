import { firbaseService } from "./firebase-service";


export const taskService = {
    query,
    remove,
    /*    getById,
      ,
       save,
       getEmptyTask,
   } */
}

function query() {
    return firbaseService.query()
}
function remove(taskId) {
    return firbaseService.remove(taskId)
}


