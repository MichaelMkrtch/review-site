export default function SearchResult({
  selectedItemIndex,
  renderIndex,
  children,
}) {
  let classes =
    "flex justify-start rounded-md py-2 mt-1 align-middle first:!bg-cyan-350/80 hover:bg-neutral-300/40";

  if (selectedItemIndex > 0) {
    classes = classes.replace("first:!bg-cyan-350/80", "first:bg-transparent");
  }

  if (selectedItemIndex === renderIndex) {
    classes += " !bg-cyan-350/80";
  }

  return (
    <div className={classes}>
      <div className="mr-2 flex px-2">
        <img />
      </div>
      <p>{children}</p>
    </div>
  );
}
