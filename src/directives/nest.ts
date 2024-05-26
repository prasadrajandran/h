import type { ParsedTemplate } from '../h';
import { createNodeTemplateDirective } from '../helpers/create-template-directive';

/**
 * Name of the nested template.
 * @internal
 */
type NestedTemplateName = string;

/**
 * Nest directive type generator.
 */
export type NestDirective<
  NESTED_TEMPLATE extends { [P in keyof NESTED_TEMPLATE]: ParsedTemplate },
> = NESTED_TEMPLATE;

/**
 * Creates a reference to another parsed template.
 *
 * Example:
 *
 * const Component = () => html`
 *   <div>
 *     <p>${$text('label')}</p>
 *   </div>
 * `;
 *
 * const tpl = html`
 *   <div>
 *     ${$nest('componentA', Component())}
 *     ${$nest('componentB', Component())}
 *   </div>
 * `;
 *
 * tpl.componentA.label = 'Something...';
 * tpl.componentB.label = 'Else...';
 */
export const $nest = createNodeTemplateDirective<
  [NestedTemplateName, ParsedTemplate]
>((template, instances) => {
  instances.forEach(({ node, args: [name, componentTemplate] }) => {
    node.appendChild(componentTemplate.$.node);
    Object.defineProperty(template, name, {
      value: componentTemplate,
      enumerable: true,
    });
  });
});
