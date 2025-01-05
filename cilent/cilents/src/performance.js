export const reportPerformance = (onPerfEntry) => {
    if (onPerfEntry && onPerfEntry instanceof Function) {
      const entries = performance.getEntriesByType('navigation');
      entries.forEach((entry) => {
        onPerfEntry(entry);
      });
    }
  };
  