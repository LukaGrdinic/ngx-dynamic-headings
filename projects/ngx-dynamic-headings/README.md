# ngx-dynamic-headings

Dynamic Headings Generation Library

## Usage

To use the library in your project, install ngx-dynamic-headings from npm:

```
npm install ngx-dynamic-headings --save
```

Import the directive in your standalone component:

```
import { Component } from '@angular/core';
import { NgxDynamicHeadingDirective } from 'ngx-dynamic-headings';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ NgxDynamicHeadingDirective ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}

```

Then use the \<h\> tags wherever you want dynamic headings to be generated

```
<h1>This is the h1 heading</h1>

<div>
  <h>This will generate an h2 heading at runtime</h>
  <h>This will generate an h2 heading at runtime</h>
  <div>
    <h>This will generate h3 heading at runtime</h>
    <h>This will generate h3 heading at runtime</h>
  </div>
</div>
```
