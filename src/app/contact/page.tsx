import Layout from "@/modules/common/layouts/layout";
import SendIcon from "@mui/icons-material/Send";

export default function Contact() {
  return (
    <Layout>
      <section className="mt-5 flex flex-col gap-3">
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14939.055420696037!2d-101.2039503!3d20.5976991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842c84f779dd8bf5%3A0xa0413a72835ad1f0!2sParque%20Cipreses!5e0!3m2!1ses!2smx!4v1752883039550!5m2!1ses!2smx"
            width="700"
            height="400"
            loading="lazy"
            className="w-full rounded-2xl"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <form className="flex flex-col gap-5 mt-4">
          <label className="text-white font-semibold text-2xl" htmlFor="name">
            Contact Form
          </label>
          <div className="flex gap-5">
            <input
              className="bg-transparent p-4 w-full rounded-xl border border-neutral-700 placeholder:font-semibold outline-none text-white font-semibold placeholder:text-neutral-600"
              type="text"
              name="name"
              id=""
              placeholder="Full name"
            />
            <input
              className="bg-transparent p-4 w-full rounded-xl border border-neutral-700 placeholder:font-semibold outline-none text-white font-semibold placeholder:text-neutral-600"
              type="email"
              name="email"
              id=""
              placeholder="Email address"
            />
          </div>
          <textarea
            className="bg-transparent p-4 w-full rounded-xl border border-neutral-700 placeholder:font-semibold outline-none text-white font-semibold placeholder:text-neutral-600"
            name="message"
            id=""
            placeholder="Write your message"
          ></textarea>
          <div className="flex justify-end">
            <button className="flex gap-3 text-lg text-yellow-200 bg-gradient-to-br from-neutral-800 to-neutral-900 py-3 px-5 rounded-xl shadow-lg">
              <SendIcon className="-rotate-45" sx={{ color: "#fef08a" }} />
              Send Message
            </button>
          </div>
        </form>
      </section>
    </Layout>
  );
}
