import { ComponentChildren } from "preact";
import { useEffect, useState } from "preact/hooks";

function LazyImage({ children, src, alt, ...rest }: LazyImageProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const imageToLoad = new Image();
    imageToLoad.src = src;

    imageToLoad.onload = () => {
      setLoading(false);
    };
  }, [src]);

  return <>{loading ? children : <img src={src} alt={alt} {...rest} />}</>;
}

type LazyImageProps = {
  children?: ComponentChildren;
  alt?: string;
  src?: string;
  className?: string;
};

export default LazyImage;
