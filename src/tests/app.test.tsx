import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { App } from "@/App";

describe("main routes", () => {
  it("renders the professional name on the home route", async () => {
    const view = render(<MemoryRouter initialEntries={["/"]}><App /></MemoryRouter>);
    expect(await view.findAllByText("MD. Abdul Lotif")).not.toHaveLength(0);
  });
  it("renders published skills", async () => {
    const view = render(<MemoryRouter initialEntries={["/skills"]}><App /></MemoryRouter>);
    expect(await view.findByText("MikroTik RouterOS")).toBeInTheDocument();
  });
});
