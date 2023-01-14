import { ComponentChildren, Fragment } from "preact";
import { useState, useEffect } from "preact/hooks";

const LazyImage = ({ placeholder, src, alt, ...rest }: LazyImageProps) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const imageToLoad = new Image();
    imageToLoad.src = src;

    imageToLoad.onload = () => {
      setLoading(false);
    };
  }, [src]);

  return <Fragment>{loading ? placeholder : <img src={src} alt={alt} {...rest} />}</Fragment>;
};

type LazyImageProps = {
  placeholder?: ComponentChildren;
  alt?: string;
  src?: string;
  className?: string;
};

export default LazyImage;
