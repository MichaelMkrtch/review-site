import { IMG_BASE_URL } from "../../../secrets.js";

export default function SearchResult({
  posterPath,
  selectedItemIndex,
  renderIndex,
  children,
}) {
  let classes =
    "flex justify-start rounded-md py-2 mt-1 items-center first:!bg-cyan-350/80 hover:bg-neutral-300/40";

  if (selectedItemIndex > 0) {
    classes = classes.replace("first:!bg-cyan-350/80", "first:bg-transparent");
  }

  if (selectedItemIndex === renderIndex) {
    classes += " !bg-cyan-350/80";
  }

  let image;
  let gradient;

  if (posterPath) {
    image = (
      <img src={`${IMG_BASE_URL}w92${posterPath}`} className="w-8 rounded" />
    );
  } else {
    gradient = (
      <div className="h-12 w-8 rounded bg-gradient-to-tr from-indigo-600 to-rose-600"></div>
    );
  }

  return (
    <div className={classes}>
      <div className="pointer-events-none mr-2 flex px-2">
        {posterPath ? image : gradient}
      </div>
      <p>{children}</p>
    </div>
  );
}
