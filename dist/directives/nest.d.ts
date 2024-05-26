import type { ParsedTemplate } from '../h';
/**
 * Nest directive type generator.
 */
export type NestDirective<NESTED_TEMPLATE extends {
    [P in keyof NESTED_TEMPLATE]: ParsedTemplate;
}> = NESTED_TEMPLATE;
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
export declare const $nest: (args_0: string, args_1: ParsedTemplate) => {
    id: string;
    type: string;
    callback: import("../helpers/create-template-directive").TemplateDirectiveCallback<[string, ParsedTemplate], HTMLTemplateElement, ParsedTemplate>;
    args: [string, ParsedTemplate];
};
