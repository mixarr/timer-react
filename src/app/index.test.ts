import { render, screen } from "@testing-library/react";

import App from ".";

describe("App", () => {
  it("Some string", () => {
    render(App());
    expect(screen.getByText(/Time manager/i)).toBeInTheDocument();
  });
});
