React components for efficiently rendering large lists and tabular data

React window works by only rendering part of a large data set (just enough to fill the viewport). This helps address some common performance bottlenecks:

1. It reduces the amount of work (and time) required to render the initial view and to process updates.
2. It reduces the memory footprint by avoiding over-allocation of DOM nodes.
