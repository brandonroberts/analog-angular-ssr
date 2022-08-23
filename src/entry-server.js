import 'zone.js/dist/zone.js';
import { renderApplication } from '@angular/platform-server';
import { AppComponent } from './app/app.component';

export async function render(url, document) {
  const appId = getSelector(AppComponent);

  const html = await renderApplication(AppComponent, {
    appId,
    document,
    url
  });

  return html;
}

function getSelector(cmp) {
  return cmp['ɵcmp'].selectors[0][0];
}