export default function ReviewForm() {
  return (
    <form>
      <textarea
        rows={4}
        placeholder="Write your review here"
        className="block w-full resize-none rounded bg-[#232323] p-2 placeholder:text-[#434343] focus:outline-none"
      ></textarea>
    </form>
  );
}
