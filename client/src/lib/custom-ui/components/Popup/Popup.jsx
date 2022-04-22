import { Popup as SemanticUIPopup } from 'semantic-ui-react'

import PopupHeader from './PopupHeader'

export class Popup extends SemanticUIPopup {
  static Header = PopupHeader
}
