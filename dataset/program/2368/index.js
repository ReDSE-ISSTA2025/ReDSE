import {Transformer} from '@parcel/plugin';
import {message} from './constants.js';
import {value} from './dep.cjs';
import path from 'path';

export default new Transformer({
  async transform({asset}) {
    if (asset.isSource) {
      asset.addDependency({
        specifier: 'foo',
        specifierType: 'esm'
      });

      let code = await asset.getCode();
      let match = code.match(/[ab]/);
      let v = match ? (await import(`./data/${match[0]}.js`)).value : '';
      asset.setCode(code + `\nconsole.log("${v}")`);

      return [asset];
    }

    return [
      {
        type: 'js',
        content: message + ' ' + value,
      },
    ];
  }
});
