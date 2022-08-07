# React Lazyload Images

This tutorial is meant to showcase how to lazyload images in a react application using the NPM library: [React Lazy Load Image Component](https://www.npmjs.com/package/react-lazy-load-image-component)

### Default

Default image in react without the lazyload effect
[Source](https://react-lazyload-image.netlify.app/default)

```js
import Image from "../images/bird.jpg";
<img className="image" src={Image} width={800} height={550} alt="Fishy" />;
```

### Placeholder

This illustrates the lazyload image component with a placeholder image.
To test this, visit the [/placeholder](https://react-lazyload-image.netlify.app/default) page, set throttling in developer tools to Good 2G, and refresh the page to see the effect.

Adding a placeholder image is very simple, simply add `placeholderSrc=""` attribute with your placeholder image within the quotes to the `LazyLoadImage` component.

```js
import { LazyLoadImage } from "react-lazy-load-image-component";
import Image from "../images/bird.jpg";
import PlaceholderImage from "../images/placeholder.jpg";

<LazyLoadImage
  src={Image}
  width={800}
  height={500}
  placeholderSrc={PlaceholderImage}
  alt="bird"
/>;
```

### Blur

This illustrates the lazyload image component with a placeholder image and a blur effeect.
To test this, visit the [/blur](https://react-lazyload-image.netlify.app/default) p

Combining the placeholder image and blur effect provides the best experience for users. To enable it, add the placeholder image and add and effect set to `blur`.

You can add effects like:

- blur: renders a blurred image based on placeholderSrc and transitions to a non-blurred one when the image specified in the src is loaded.
- black-and-white: renders a black and white image based on placeholderSrc and transitions to a colorful image when the image specified in the src is loaded.
- opacity: renders a blank space and transitions to full opacity when the image is loaded.

> Note: They effects rely on CSS and the corresponding CSS file must be imported:

```js
import { LazyLoadImage } from "react-lazy-load-image-component";
import Image from "../images/bird.jpg";
import PlaceholderImage from "../images/placeholder.jpg";

<LazyLoadImage
  src={Image}
  width={800}
  height={530}
  placeholderSrc={PlaceholderImage}
  effect="blur"
  alt="image"
/>;
```

Tutorial prepared by [Victor Eke](https://github.com/evavic44)

## Resources

- [Demo URL](https://react-lazyload-image.netlify.app/)
- [React Lazy Load Image Component - NPM](https://www.npmjs.com/package/react-lazy-load-image-component)
- [React Lazy Load Image Component - GitHub](https://github.com/Aljullu/react-lazy-load-image-component)
