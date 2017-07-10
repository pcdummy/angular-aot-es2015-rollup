import './polyfills';
import './styles';

import { platformBrowser } from '@angular/platform-browser';

import { AppModuleNgFactory } from './aot/app/app.ngfactory';

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
