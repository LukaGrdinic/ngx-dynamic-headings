# ngx-dynamic-headings

Dynamic Headings Generation Library

## Usage

To use the library in your project, install ngx-dynamic-headings from npm:

```
npm install ngx-dynamic-headings --save
```

Add the package to NgModule imports:

```
import { NgxDynamicHeadingsModule } from 'ngx-dynamic-headings';

@NgModule({
  ...
  imports: [NgxDynamicHeadingsModule,...]
  ...
})
```

Then use the **<h>** component wherever you want dynamic headings to be generated

```
<h>This heading level will be dynamically generated</h>
```