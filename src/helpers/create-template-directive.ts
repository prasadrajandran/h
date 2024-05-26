import type { ParsedTemplate, TemplateExpIndex } from '../h';

/**
 * Parsed Template Directives.
 * @internal
 */
export type ParsedTemplateDirectives<K = unknown, V = unknown> = Record<
  keyof K,
  V
>;

/**
 * An instance of a template directive expression.
 * @internal
 */
export interface TemplateDirectiveInstance<
  DIRECTIVE_ARGS extends unknown[] = unknown[],
  DIRECTIVE_NODE extends Element = HTMLElement,
> {
  /**
   * Node that the directive is attached to.
   *
   * Note: If this is a "node" type directive, it will be attached to a
   * "template" element that serves as a placeholder.
   */
  node: DIRECTIVE_NODE;
  /**
   * Index position of the directive instance.
   */
  index: TemplateExpIndex;
  /**
   * Arguments provided to the directive.
   */
  args: DIRECTIVE_ARGS;
}

/**
 * Template directive's callback.
 * @internal
 */
export type TemplateDirectiveCallback<
  DIRECTIVE_ARGS extends unknown[],
  DIRECTIVE_NODE extends Element = HTMLElement,
  PARSED_TEMPLATE extends ParsedTemplate = ParsedTemplate,
> = (
  template: PARSED_TEMPLATE,
  instances: TemplateDirectiveInstance<DIRECTIVE_ARGS, DIRECTIVE_NODE>[],
) => void;

/**
 * Property that identifies an object as an instance of a template directive
 * expression.
 * @internal
 */
export const directiveId = '__cI4Mp6yr0__';

/**
 * Create an "attr" template directive.
 * @param definition Template directive definition.
 */
export const createAttrTemplateDirective = <
  DIRECTIVE_ARGS extends unknown[] = unknown[],
  DIRECTIVE_NODE extends Element = HTMLElement,
  PARSED_TEMPLATE extends ParsedTemplate = ParsedTemplate,
>(
  callback: TemplateDirectiveCallback<
    DIRECTIVE_ARGS,
    DIRECTIVE_NODE,
    PARSED_TEMPLATE
  >,
) => {
  return (...args: DIRECTIVE_ARGS) => ({
    id: directiveId,
    type: 'attr',
    callback,
    args,
  });
};

/**
 * Create a "node" template directive.
 * @param definition Template directive definition.
 */
export const createNodeTemplateDirective = <
  DIRECTIVE_ARGS extends unknown[] = unknown[],
  PARSED_TEMPLATE extends ParsedTemplate = ParsedTemplate,
>(
  callback: TemplateDirectiveCallback<
    DIRECTIVE_ARGS,
    HTMLTemplateElement,
    PARSED_TEMPLATE
  >,
) => {
  return (...args: DIRECTIVE_ARGS) => ({
    id: directiveId,
    type: 'node',
    callback,
    args,
  });
};
