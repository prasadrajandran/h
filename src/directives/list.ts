import { createAttrTemplateDirective } from '../helpers/create-template-directive';
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
export type ListDirective<
  LISTS extends Record<ListName, Parameters<typeof createList>[0]['items']>,
> = {
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
export const $list = <ITEM, ELEMENT extends ListNode>(
  args: ListData<ITEM, ELEMENT>,
) => {
  return createAttrTemplateDirective<[ListData<ITEM, ELEMENT>]>(
    (template, instances) => {
      instances.forEach(({ node, args: [opts] }) => {
        const { name } = opts;
        const list = { ...opts, container: node };
        Object.defineProperty(template, name, {
          enumerable: true,
          value: {
            get: () => list.items,
            update: (
              items: Parameters<typeof createList<ITEM, ELEMENT>>[0]['items'],
            ) => {
              list.items = items;
              createList(list);
            },
          },
        });
        createList(list);
      });
    },
  )(args);
};
