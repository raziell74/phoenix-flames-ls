// Mock component that returns an empty SVG
const MockIcon = () => <svg data-testid="mock-icon" />;

// Create a Proxy that returns the MockIcon for any accessed property
const handler = {
  get: () => MockIcon,
};

const defaultExport = new Proxy({}, handler);
export default defaultExport;
export const Icons = new Proxy({}, handler);

import * as React from "react";

export const Check = () => <div data-testid="check-icon" />;
