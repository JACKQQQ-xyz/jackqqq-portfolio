import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

function LoadMore({
  items = [], itemsPerLoad = 4, renderItem, showLoadLess = true, // opsional
  gridClassName = "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4", // default grid
}) {
  const [visibleCount, setVisibleCount] = useState(itemsPerLoad);

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + itemsPerLoad, items.length));
  };

  const handleLoadLess = () => {
    setVisibleCount((prev) => Math.max(prev - itemsPerLoad, itemsPerLoad));
  };

  const visibleItems = items.slice(0, visibleCount);

  return (
    <div className="text-center py-10">
      {/* Grid bisa di-custom lewat props */}
      <div className={`grid gap-4 ${gridClassName}`}>
        <AnimatePresence>
          {visibleItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {renderItem(item, index)}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="mt-6 flex justify-center gap-4">
        {visibleCount < items.length && (
          <button
            onClick={handleLoadMore}
            className="text-yellow-400 hover:text-white"
          >
            Load More
          </button>
        )}

        {showLoadLess && visibleCount > itemsPerLoad && (
          <button onClick={handleLoadLess} className="hover:text-yellow-400">
            Load Less
          </button>
        )}
      </div>
    </div>
  );
}

export default LoadMore;
