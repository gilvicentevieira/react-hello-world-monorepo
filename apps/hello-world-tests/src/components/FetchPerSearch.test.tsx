import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import FetchPerSearch from "./FetchPerSearch";
import '@testing-library/jest-dom/extend-expect';
import fetchMock from "jest-fetch-mock";

fetchMock.enableMocks();

const mockHeroData = {
  results: [
    { id: 1, name: "Superman" },
    { id: 2, name: "Batman" },
  ],
};

describe("FetchPerSearch component", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  test("displays heroes after a search", async () => {
    // Mock the API response with predefined data
    fetchMock.mockResponseOnce(JSON.stringify(mockHeroData));

    // Render the component
    render(<FetchPerSearch />);

    // Simulate typing in the search input
    fireEvent.change(screen.getByPlaceholderText("Hero"), {
      target: { value: "super" },
    });

    // Expect the loading text to appear while the API call is being made
    expect(screen.getByText("Loading...")).toBeInTheDocument();

    // Wait for the heroes to be displayed after the API call resolves
    await waitFor(() => {
      expect(screen.getByText("Superman")).toBeInTheDocument();
      expect(screen.getByText("Batman")).toBeInTheDocument();
    });

    // Expect loading text to disappear after heroes are displayed
    expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
  });

  test("shows no heroes found message when search returns no results", async () => {
    // Mock the API response with empty results
    fetchMock.mockResponseOnce(JSON.stringify({ results: [] }));

    // Render the component
    render(<FetchPerSearch />);

    // Simulate typing in the search input
    fireEvent.change(screen.getByPlaceholderText("Hero"), {
      target: { value: "unknown" },
    });

    // Expect the loading text to appear
    expect(screen.getByText("Loading...")).toBeInTheDocument();

    // Wait for the "No heroes found" message to be displayed
    await waitFor(() => {
      expect(screen.getByText("No heroes found. Search again")).toBeInTheDocument();
    });

    // Expect loading text to disappear
    expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
  });
});
