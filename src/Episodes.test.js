import React from "react";
import Episodes from "./components/Episodes";
import { render } from "@testing-library/react";

test("Episodes shows data when rendered with episodes", () => {
  //Arrange
  const { queryAllByTestId, getAllByTestId, rerender } = render(
    <Episodes episodes={[]} />
  );
  //to check that there are not episodes when the component mounts
  const initialEpisodes = queryAllByTestId(/episodes/i);
  expect(initialEpisodes).toHaveLength(0);
  expect(initialEpisodes).toEqual([]);

  //Act
  //rerender the component with episodes data
  rerender(<Episodes error="" episodes={data} />);
  const episodes = getAllByTestId(/episodes/i);
  //Assert
  expect(episodes).toHaveLength(5);
});

const data = [
  {
    id: 909345,
    url:
      "http://www.tvmaze.com/episodes/909345/stranger-things-2x05-chapter-five-dig-dug",
    name: "Chapter Five: Dig Dug",
    season: 2,
    number: 5,
    airdate: "2017-10-27",
    airtime: "",
    airstamp: "2017-10-27T12:00:00+00:00",
    runtime: 60,
    image: {
      medium:
        "http://static.tvmaze.com/uploads/images/medium_landscape/132/332050.jpg",
      original:
        "http://static.tvmaze.com/uploads/images/original_untouched/132/332050.jpg",
    },
    summary:
      "<p>Jim is trapped in the Upside Down, and Joyce enlists Bob to help find him. Meanwhile, Nancy and Jonathan go to Murray, and El learns about the circumstances surrounding her birth.</p>",
    _links: { self: { href: "http://api.tvmaze.com/episodes/909345" } },
  },
  {
    id: 909346,
    url:
      "http://www.tvmaze.com/episodes/909346/stranger-things-2x06-chapter-six-the-spy",
    name: "Chapter Six: The Spy",
    season: 2,
    number: 6,
    airdate: "2017-10-27",
    airtime: "",
    airstamp: "2017-10-27T12:00:00+00:00",
    runtime: 60,
    image: {
      medium:
        "http://static.tvmaze.com/uploads/images/medium_landscape/132/332052.jpg",
      original:
        "http://static.tvmaze.com/uploads/images/original_untouched/132/332052.jpg",
    },
    summary:
      "<p>Owens and his team try to find a way to end the shadow creature's influence on Will. Meanwhile, Dustin and Lucas find unlikely allies in their quest to find Dart.</p>",
    _links: { self: { href: "http://api.tvmaze.com/episodes/909346" } },
  },
  {
    id: 909347,
    url:
      "http://www.tvmaze.com/episodes/909347/stranger-things-2x07-chapter-seven-the-lost-sister",
    name: "Chapter Seven: The Lost Sister",
    season: 2,
    number: 7,
    airdate: "2017-10-27",
    airtime: "",
    airstamp: "2017-10-27T12:00:00+00:00",
    runtime: 60,
    image: {
      medium:
        "http://static.tvmaze.com/uploads/images/medium_landscape/132/332055.jpg",
      original:
        "http://static.tvmaze.com/uploads/images/original_untouched/132/332055.jpg",
    },
    summary:
      "<p>El travels to Chicago to find her sister Eight, aka Kali, who has teamed up with other outcasts to kill the men who tormented her at Hawkins Labs.</p>",
    _links: { self: { href: "http://api.tvmaze.com/episodes/909347" } },
  },
  {
    id: 909348,
    url:
      "http://www.tvmaze.com/episodes/909348/stranger-things-2x08-chapter-eight-the-mind-flayer",
    name: "Chapter Eight: The Mind Flayer",
    season: 2,
    number: 8,
    airdate: "2017-10-27",
    airtime: "",
    airstamp: "2017-10-27T12:00:00+00:00",
    runtime: 60,
    image: {
      medium:
        "http://static.tvmaze.com/uploads/images/medium_landscape/132/332059.jpg",
      original:
        "http://static.tvmaze.com/uploads/images/original_untouched/132/332059.jpg",
    },
    summary:
      "<p>When the demo-dogs overrun Hawkins Labs, one of the group saves the others at the cost of their own life. When the others get back to the Byers house, they realize what they're facing and try to get answers from a captive Will.</p>",
    _links: { self: { href: "http://api.tvmaze.com/episodes/909348" } },
  },
  {
    id: 909349,
    url:
      "http://www.tvmaze.com/episodes/909349/stranger-things-2x09-chapter-nine-the-gate",
    name: "Chapter Nine: The Gate",
    season: 2,
    number: 9,
    airdate: "2017-10-27",
    airtime: "",
    airstamp: "2017-10-27T12:00:00+00:00",
    runtime: 60,
    image: {
      medium:
        "http://static.tvmaze.com/uploads/images/medium_landscape/132/332064.jpg",
      original:
        "http://static.tvmaze.com/uploads/images/original_untouched/132/332064.jpg",
    },
    summary:
      "<p>The group splits up to close the gate, evict the Mind Flayer from Will, and drive the demo-dogs away from Hawkins Lab.</p>",
    _links: { self: { href: "http://api.tvmaze.com/episodes/909349" } },
  },
];
