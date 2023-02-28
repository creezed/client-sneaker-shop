import { PluginItem } from '@babel/core';

export default function (): PluginItem {
  return {
    visitor: {
      Program(path, state) {
        const forbidden = state.opts?.props || [];

        if (state.opts?.props) {
          forbidden.push(state.opts?.props);
        }

        if (forbidden.length === 0) {
          forbidden.push(/^data-test/);
        }

        path.traverse({
          JSXIdentifier(path2) {
            forbidden.forEach((props: any) => {
              const regularExpressionMatch =
                props instanceof RegExp && props.test(path2.node.name);

              const stringMatch = props === path2.node.name;

              if (regularExpressionMatch || stringMatch)
                path2.parentPath.remove();
            });
          },
        });
      },
    },
  };
}
