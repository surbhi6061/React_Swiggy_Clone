import { screen, render } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("it should render RestaurantCard component with props Data ", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);
  const name = screen.getByText("Nandhana Palace");
  expect(name).toBeInTheDocument();
});
