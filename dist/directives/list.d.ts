import { ListNode, createList } from '../helpers/create-list';
/**
 * Name of the updatable list.
 * @internal
 */
type ListName = string;
/**
 * List data.
 * @internal
 */
type ListData<ITEM, ELEMENT extends ListNode> = {
    name: ListName;
} & Omit<Parameters<typeof createList<ITEM, ELEMENT>>[0], 'container'>;
/**
 * List directive type generator.
 */
export type ListDirective<LISTS extends Record<ListName, Parameters<typeof createList>[0]['items']>> = {
    [k in keyof LISTS]: {
        get: () => LISTS[k];
        update: (items: LISTS[k]) => void;
    };
};
/**
 * Create a list of nodes.
 *
 * Example:
 * const tasks = new Map([
 *   ['gudjIy', "Task 1"],
 *   ['gCoKL9', "Task 2"],
 *   ['e16Amr', "Task 3"],
 * ]);
 *
 * const tpl = html`
 *   <div
 *     ${$list({
 *       name: 'tasks',
 *       items: new Map([
 *         ['gudjIy', "Task 1"],
 *         ['gCoKL9', "Task 2"],
 *         ['e16Amr', "Task 3"],
 *       ]),
 *       key: (task, { key, index }) => key,
 *     })
 *   }>
 *   </div>
 * `;
 *
 * tasks.delete('gCoKL9');
 * tpl.tasks.update(tasks);
 *
 * @param args List data.
 */
export declare const $list: <ITEM, ELEMENT extends ListNode>(args: ListData<ITEM, ELEMENT>) => {
    id: string;
    type: string;
    callback: import("../helpers/create-template-directive").TemplateDirectiveCallback<[ListData<ITEM, ELEMENT>], HTMLElement, import("../h").ParsedTemplate>;
    args: [ListData<ITEM, ELEMENT>];
};
export {};
