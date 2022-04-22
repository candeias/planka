import { Model, attr, fk } from 'redux-orm'

import ActionTypes from '../constants/ActionTypes'

export class Task extends Model {
  static modelName = 'Task'

  static fields = {
    id: attr(),
    name: attr(),
    isCompleted: attr({
      getDefault: () => false,
    }),
    cardId: fk({
      to: 'Card',
      as: 'card',
      relatedName: 'tasks',
    }),
  }

  static reducer({ type, payload }, sTask) {
    switch (type) {
      case ActionTypes.LOCATION_CHANGE_HANDLE:
      case ActionTypes.CORE_INITIALIZE:
      case ActionTypes.PROJECT_MANAGER_CREATE_HANDLE:
      case ActionTypes.BOARD_MEMBERSHIP_CREATE_HANDLE:
        if (payload.tasks) {
          payload.tasks.forEach((task) => {
            sTask.upsert(task)
          })
        }

        break
      case ActionTypes.SOCKET_RECONNECT_HANDLE:
        sTask.all().delete()

        if (payload.tasks) {
          payload.tasks.forEach((task) => {
            sTask.upsert(task)
          })
        }

        break
      case ActionTypes.BOARD_FETCH__SUCCESS:
        payload.tasks.forEach((task) => {
          sTask.upsert(task)
        })

        break
      case ActionTypes.TASK_CREATE:
      case ActionTypes.TASK_CREATE_HANDLE:
      case ActionTypes.TASK_UPDATE__SUCCESS:
      case ActionTypes.TASK_UPDATE_HANDLE:
        sTask.upsert(payload.task)

        break
      case ActionTypes.TASK_CREATE__SUCCESS:
        sTask.withId(payload.localId).delete()
        sTask.upsert(payload.task)

        break
      case ActionTypes.TASK_UPDATE:
        sTask.withId(payload.id).update(payload.data)

        break
      case ActionTypes.TASK_DELETE:
        sTask.withId(payload.id).delete()

        break
      case ActionTypes.TASK_DELETE__SUCCESS:
      case ActionTypes.TASK_DELETE_HANDLE: {
        const taskModel = sTask.withId(payload.task.id)

        if (taskModel) {
          taskModel.delete()
        }

        break
      }
      default:
    }
  }
}
