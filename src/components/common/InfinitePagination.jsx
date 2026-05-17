import { useEffect, useRef } from "react";
import Spinner from "./Spinner";

const InfinitePagination = ({ hasMore, isLoading, onLoadMore }) => {
  const loaderRef = useRef(null);

  useEffect(() => {
    if (!hasMore || isLoading) {
      return;
    }

    const handleIntersection = (entries) => {
      const entry = entries[0];

      if (entry.isIntersecting) {
        onLoadMore();
      }
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.3
    });

    const loaderElement = loaderRef.current;

    if (loaderElement) {
      observer.observe(loaderElement);
    }

    return () => {
      if (loaderElement) {
        observer.unobserve(loaderElement);
      }
      observer.disconnect();
    };
  }, [hasMore, isLoading, onLoadMore]);

  return (
    <div ref={loaderRef} className="text-center py-4">
      {hasMore && isLoading && <Spinner />}
    </div>
  );
};

export default InfinitePagination;
