import { Model, attr, fk } from 'redux-orm'

import ActionTypes from '../constants/ActionTypes'

export class Notification extends Model {
  static modelName = 'Notification'

  static fields = {
    id: attr(),
    type: attr(),
    data: attr(),
    isRead: attr(),
    userId: fk({
      to: 'User',
      as: 'user',
      relatedName: 'notifications',
    }),
    actionId: fk({
      to: 'Action',
      as: 'action',
      relatedName: 'notifications',
    }),
    cardId: fk({
      to: 'Card',
      as: 'card',
      relatedName: 'notifications',
    }),
  }

  static reducer({ type, payload }, sNotification) {
    switch (type) {
      case ActionTypes.LOCATION_CHANGE_HANDLE:
      case ActionTypes.PROJECT_MANAGER_CREATE_HANDLE:
      case ActionTypes.BOARD_MEMBERSHIP_CREATE_HANDLE:
        if (payload.notifications) {
          payload.notifications.forEach((notification) => {
            sNotification.withId(notification.id).deleteWithRelated()
          })
        }

        break
      case ActionTypes.SOCKET_RECONNECT_HANDLE:
        sNotification.all().delete()

        payload.notifications.forEach((notification) => {
          sNotification.upsert(notification)
        })

        break
      case ActionTypes.CORE_INITIALIZE:
        payload.notifications.forEach((notification) => {
          sNotification.upsert(notification)
        })

        break
      case ActionTypes.NOTIFICATION_CREATE_HANDLE:
        sNotification.upsert(payload.notification)

        break
      case ActionTypes.NOTIFICATION_DELETE:
        sNotification.withId(payload.id).deleteWithRelated()

        break
      case ActionTypes.NOTIFICATION_DELETE__SUCCESS:
      case ActionTypes.NOTIFICATION_DELETE_HANDLE: {
        const notificationModel = sNotification.withId(payload.notification.id)

        if (notificationModel) {
          notificationModel.deleteWithRelated()
        }

        break
      }
      default:
    }
  }

  deleteRelated() {
    if (this.action && !this.action.isInCard) {
      this.action.delete()
    }
  }

  deleteWithRelated() {
    this.deleteRelated()
    this.delete()
  }
}
