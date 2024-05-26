/**
 * A name for the updatable text node.
 * @internal
 */
type UpdatableTextNodeName = string;
/**
 * Text directive type generator.
 */
export type TextDirective<NODE_NAME extends UpdatableTextNodeName> = Record<NODE_NAME, string>;
/**
 * Creates an updatable text node.
 *
 * Example:
 * const tpl = html`
 *   <div>
 *     <p>${$text('label', 'Optional default value')}</p>
 *   </div>
 * `;
 * tpl.label = 'Lorem ipsum...';
 */
export declare const $text: (...args: [string] | [string, string]) => {
    id: string;
    type: string;
    callback: import("../helpers/create-template-directive").TemplateDirectiveCallback<[string] | [string, string], HTMLTemplateElement, import("../h").ParsedTemplate>;
    args: [string] | [string, string];
};
export {};
