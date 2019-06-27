/* eslint-disable no-param-reassign */
import { ReactInstance } from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    fullScreen: true,
    ...options,
  });

  r360.renderToSurface(
    r360.createRoot('VrMemoryGame'),
    r360.getDefaultSurface(),
  );

  r360.compositor.setBackground(r360.getAssetURL('360_world.jpg'));
}

window.React360 = { init };