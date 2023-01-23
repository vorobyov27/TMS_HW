import { BaseForm } from '../../framework/helpers/baseForm';
import { Elements } from '../../framework/elements/manager/elements'
import { ElementsManager } from "../../framework/elements/manager/elementManager";

export abstract class DefaultPage extends BaseForm {

  constructor(pageLocator: string) {
    super(pageLocator);
  }
}