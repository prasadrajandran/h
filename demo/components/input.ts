import type { ElementRef, TemplateAttrsExp } from '../../dist/h';
import { _mergeAll, _ref } from '../../dist/directives';
import { html } from '../../dist/index';

type Props = TemplateAttrsExp<{
  size?: 'sm' | 'lg';
  ref?: string;
  update?: (ref: ElementRef) => unknown;
}>;

export const Input = ({ size, ref, update, ...props }: Props = {}) => {
  const inputSize = size ? `form-control-${size}` : '';
  return _mergeAll(
    html<HTMLInputElement>/* html */ `<input
      type="text"
      class="form-control ${inputSize}"
      ${props}
      ${ref ? _ref(ref) : ''}
      ${update || ''}
    />`,
  );
};
