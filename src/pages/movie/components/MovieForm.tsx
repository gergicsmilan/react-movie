import { useCallback, useState } from "react";
import { Movie } from "../../../services/api/types";

type Props = {
  handleSubmit: (movie: Movie) => void;
  isPending: boolean;
  isError: boolean;
  movie?: Movie;
  submitText: string;
};

const DEFAULT_NEW_ID = new Date().toString();

const MovieForm = ({
  handleSubmit,
  isPending,
  isError,
  movie,
  submitText,
}: Props) => {
  const [title, setTitle] = useState(movie?.title ?? "");
  const [description, setDescription] = useState(movie?.description ?? "");
  const [ageLimit, setAgeLimit] = useState(movie?.ageLimit ?? "");

  const _handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      handleSubmit({
        _id: movie?._id ?? DEFAULT_NEW_ID,
        title,
        description,
        ageLimit,
      });
    },
    [ageLimit, description, handleSubmit, movie?._id, title]
  );

  return (
    <>
      <form
        style={{
          display: "flex",
          flexFlow: "column",
          gap: "4px",
          maxWidth: "50vw",
        }}
        onSubmit={(e) => _handleSubmit(e)}
      >
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          required
          value={title}
          disabled={isPending}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          name="description"
          required
          value={description}
          disabled={isPending}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label htmlFor="ageLimit">Age limit</label>
        <select
          name="ageLimit"
          id="ageLimit"
          value={ageLimit}
          onChange={(e) => setAgeLimit(e.target.value)}
          disabled={isPending}
          required
        >
          <option value="">Please select an option...</option>

          <option value="0">Family</option>
          <option value="6">6</option>
          <option value="12">12</option>
          <option value="16">16</option>
          <option value="18">18</option>
        </select>
        {isError && <div>Something went wrong...</div>}
        <button type="submit" disabled={isPending}>
          {submitText}
        </button>
      </form>
    </>
  );
};

export default MovieForm;
