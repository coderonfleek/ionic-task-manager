import React from "react";
import { render } from "@testing-library/react";
import Tab1 from "./Tab1";

test("Page title is Task Manager", async () => {
  const { findByText } = render(<Tab1 />);
  await findByText("Task Manager");
});

test("when there are no todos, a no todos message should show", async () => {
  const { findByText } = render(<Tab1 />);
  await findByText("You are yet to add tasks for Today");
});
