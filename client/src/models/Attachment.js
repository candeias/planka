import { Model, attr, fk } from 'redux-orm'

import ActionTypes from '../constants/ActionTypes'

export class Attachment extends Model {
  static modelName = 'Attachment'

  static fields = {
    id: attr(),
    url: attr(),
    coverUrl: attr(),
    name: attr(),
    cardId: fk({
      to: 'Card',
      as: 'card',
      relatedName: 'attachments',
    }),
  }

  static reducer({ type, payload }, sAttachment) {
    switch (type) {
      case ActionTypes.LOCATION_CHANGE_HANDLE:
      case ActionTypes.CORE_INITIALIZE:
      case ActionTypes.PROJECT_MANAGER_CREATE_HANDLE:
      case ActionTypes.BOARD_MEMBERSHIP_CREATE_HANDLE:
        if (payload.attachments) {
          payload.attachments.forEach((attachment) => {
            sAttachment.upsert(attachment)
          })
        }

        break
      case ActionTypes.SOCKET_RECONNECT_HANDLE:
        if (payload.attachments) {
          // FIXME: bug with oneToOne relation in Redux-ORM
          const attachmentIds = payload.attachments.map(
            (attachment) => attachment.id,
          )

          sAttachment
            .all()
            .toModelArray()
            .forEach((attachmentModel) => {
              if (!attachmentIds.includes(attachmentModel.id)) {
                attachmentModel.delete()
              }
            })

          payload.attachments.forEach((attachment) => {
            sAttachment.upsert(attachment)
          })
        } else {
          sAttachment.all().delete()
        }

        break
      case ActionTypes.BOARD_FETCH__SUCCESS:
        payload.attachments.forEach((attachment) => {
          sAttachment.upsert(attachment)
        })

        break
      case ActionTypes.ATTACHMENT_CREATE:
      case ActionTypes.ATTACHMENT_CREATE_HANDLE:
      case ActionTypes.ATTACHMENT_UPDATE__SUCCESS:
      case ActionTypes.ATTACHMENT_UPDATE_HANDLE:
        sAttachment.upsert(payload.attachment)

        break
      case ActionTypes.ATTACHMENT_CREATE__SUCCESS:
        sAttachment.withId(payload.localId).delete()
        sAttachment.upsert(payload.attachment)

        break
      case ActionTypes.ATTACHMENT_UPDATE:
        sAttachment.withId(payload.id).update(payload.data)

        break
      case ActionTypes.ATTACHMENT_DELETE:
        sAttachment.withId(payload.id).delete()

        break
      case ActionTypes.ATTACHMENT_DELETE__SUCCESS:
      case ActionTypes.ATTACHMENT_DELETE_HANDLE: {
        const attachmentModel = sAttachment.withId(payload.attachment.id)

        if (attachmentModel) {
          attachmentModel.delete()
        }

        break
      }
      default:
    }
  }
}
