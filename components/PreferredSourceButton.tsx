export default function PreferredSourceButton() {
  return (
    <button
      type="button"
      className="aio-preferred-source-btn inline-flex items-center justify-center gap-3 rounded-[6px] bg-[#0D7377] px-5 py-3 font-bold text-white transition-colors hover:bg-[#0A5E62]"
    >
      <img
        src="https://www.google.com/favicon.ico"
        alt=""
        width={16}
        height={16}
        className="h-4 w-4 shrink-0"
      />
      <span>Add AIO Growth SEO to Google Preferred Sources</span>
    </button>
  );
}
