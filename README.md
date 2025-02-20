# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React's `useEffect` hook: an infinite loop caused by incorrectly specifying dependencies. The `bug.js` file contains the buggy code, while `bugSolution.js` provides the corrected version.

**Bug:** The original code has a missing dependency in `useEffect`, causing it to re-run on every render, and the state update creates an infinite loop.  This would cause the browser to freeze or crash.

**Solution:** Correctly specifying the dependencies resolves the issue.