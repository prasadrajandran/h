import type { TemplateDirectiveExp } from '../h';
/**
 * Is `exp` a template directive?
 * @internal
 * @param exp Expression to check.
 */
export declare const isTemplateDirective: (exp: unknown) => exp is TemplateDirectiveExp;
