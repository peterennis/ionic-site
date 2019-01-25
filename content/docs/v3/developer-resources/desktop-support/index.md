---
layout: fluid/docs_base
category: resources
id: desktop-support
title: Desktop Support in Ionic
header_sub_title: Ionic Resources
---

### Desktop Support in Ionic

<a class="improve-v2-docs" href='https://github.com/ionic-team/ionic-site/edit/master/content/docs/resources/desktop-support/index.md'>
  Improve this doc
</a>


Ionic was originally built with mobile applications in mind. Users quickly discovered that it is also a great solution for progressive web applications and desktop applications. There are some points to consider to make sure an Ionic app can work smoothly across all devices and screen sizes.


### Layout

Most people don't even notice the layout of an app, but it can have a huge impact on experience and usability. Consider this pretty common UI pattern:


```html
<ion-content>
  <ion-list>
    <ion-item>Item 1</ion-item>
    <ion-item>Item 2</ion-item>
    <ion-item>Item 3</ion-item>
    <ion-item>Item 4</ion-item>
    <ion-item>Item 5</ion-item>
  </ion-list>
</ion-content>
```

This will render 5 list items with a width of 100% each. This may look great on a mobile phone, but viewing this on a desktop browser is a different story. While mobile devices all have different screen sizes, they tend to fall into a range of 350px - 600px in width. Compare that to a desktop screen size of anywhere between 720px to 1080px, and sometimes even more, and you get a different experience.

The items become stretched and distorted because of the wide screen width. To improve this experience consider using the `ion-grid` component.

We can rewrite this list view into something more usable on larger screens.

```html
<ion-content>
  <ion-grid fixed>
    <ion-list>
      <ion-item>Item 1</ion-item>
      <ion-item>Item 2</ion-item>
      <ion-item>Item 3</ion-item>
      <ion-item>Item 4</ion-item>
      <ion-item>Item 5</ion-item>
    </ion-list>
  </ion-grid>
</ion-content>
```

By wrapping our list in an `<ion-grid>` element, we're adding the Ionic grid system to our layout. Adding the `fixed` attribute to the grid element tells it to have a fixed width based on the screen size. Having a fixed width is perfect for larger screens.

The grid can do more with the addition of the `<ion-row>` and `<ion-col>` elements. Similar to Bootstrap, we can define a grid layout where the columns in the grid are sized at certain breakpoints.

```html
<ion-grid>
  <ion-row>
    <ion-col
      col-12 col-sm-9 col-md-6 col-lg-4 col-xl-3
      *ngFor="let item of [1,2,3,4,5]">
      <ion-card>Item {{item}}</ion-card>
    </ion-col>
  </ion-row>
</ion-grid>
```

There's a lot going on here so let's dissect it a bit:

- The `ion-col` gets its width from the `col-{size}` attributes added to it, where `{size}` is the number of columns to take up out of the total available columns. The default number of available columns is 12.
- The `col-` attribute can have a breakpoint added before the size, `col-{breakpoint}-{size}`. This sets the size for the specified breakpoint and above.
- If you apply a size without a breakpoint argument, it assumes the smallest break point, `xs`, so `col-12` === `col-xs-12`.

A living example of this is the example app, [Ionic Conference](https://github.com/ionic-team/ionic-conference-app/blob/master/src/pages/speaker-list/speaker-list.html) which uses the grid for it's speaker view.

### Storage

Most apps at some point will need to store some sort of data locally. Whether it's storing some json from an XHR request, or saving an auth token, you have many different storage options that you can use. On top of this, if you're running your app in a native environment, you can create a full SQLite database and store data there. All of these different storage mechanisms have their benefits and defects, but we shouldn't have to worry about that.


In this case, [Ionic's Storage library](https://github.com/ionic-team/ionic-storage) is a perfect candidate for our multi-environment use case. Built on top of the well tested [LocalForage](https://github.com/localForage/localForage) library, Ionic's storage class provides an adaptable storage mechanism that will pick the best storage solution for the current run time.


Currently this means it will run through SQLite for native, IndexDB (if available), WebSql, or Local Storage. By handling all of this, it frees you up to write to storage using a sane API.


```ts
class MyClass {
  constructor(public storage: Storage) {}

  setData(key, value) {
    this.storage.set(key, value)
    .then(res => console.log(res))
  }
  getData(key) {
    this.storage.get(key)
    .then(keyVal => console.log('Key is', keyVal))
  }
}
```

There are other storage solutions out there as well, such as PouchDB, which provide a similar, adaptable storage mechanism.

### Plugins

In a native environment, you're bound to make calls to some sort of native API. But in a web environment, these API calls won't work since there's no native bridge. There are a few way to handle this.


- Use Ionic Native plugins when possible.

Ionic Native has its own internal logic to detect if it is inside of a native environment. Instead of throwing a runtime error, it will simply print a warning informing you of the situation, if it is not and Cordova plugins are not available. This way your app won't break and it will continue to work - although without the native functionality.

- Detect native platform.

In your app's logic, when ever you need to make a native API call, it's a safe idea to always check if you're in a native environment first. For example:

```js
this.platform.ready()
.then(() => {
    if(this.platform.is('cordova')) {
      // make your native calls
    } else {
      // handle thing accordingly
    }
})
```

This bit of pseudo code can be a big help when targeting environments that you're not sure will have access to the native APIs.

- Fallback to browser based APIs

Many native APIs that people tend to use (for example, the File API), are available in the browser these days. The APIs are always improving and catching up to native, so be sure to research them. Taking the first two points into consideration, we can create a nice experience that will adapt for the platform you're on.


### Parting words

This article only touches on a few basic concepts, but there are many things to consider when making an app that is truly cross platform and cross environment.

As more common patterns are solidified, they will be documented here as a point of reference.
