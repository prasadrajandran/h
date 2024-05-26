import type {
  TemplateAttrsExp,
  TemplateCallbackExp,
  TemplateDirectiveExp,
} from '../../dist/h';
import { $mergeAll } from '../../dist/directives';
import { html } from '../../dist/index';

export const Icon = (
  type: string,
  updateIcon?: (() => string) | false,
  ...templateArgs: (
    | TemplateAttrsExp
    | TemplateDirectiveExp
    | TemplateCallbackExp
  )[]
) => {
  return $mergeAll(
    html`<i
      class="bi bi-${type}"
      ${templateArgs}
      ${updateIcon &&
      (({ attrMap }) => attrMap({ class: `bi bi-${updateIcon()}` }))}
    ></i>`,
  );
};
