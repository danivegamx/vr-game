/* eslint-disable no-param-reassign */
import { ReactInstance, Surface } from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    fullScreen: true,
    ...options,
  });

  const surface = new Surface(
    1200,
    900,
    Surface.SurfaceShape.Cylinder,
  );

  r360.renderToSurface(
    r360.createRoot('VrMemoryGame'),
    surface,
  );

  r360.compositor.setBackground(r360.getAssetURL('360_world.jpg'));
}

window.React360 = { init };
