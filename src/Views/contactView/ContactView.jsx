import "./ContactView.css";
import BasicButton from "../../components/basicButton/BasicButton";

const ContactView = () => {
  return (
    <>
      <section className="contact">
        <div>
          <h1>
            <span> &lt;!-- </span> contact <span>--&gt;</span>
          </h1>
          <p>
            <span>&#47; *</span>
            Whether you&apos;re looking for a full-time developer or freelance
            support, I&apos;m here to help you create a seamless and engaging
            web experience. <br /> Get in touch, and let&apos;s start crafting
            your perfect project.
            <span> *&#47;</span>
          </p>
        </div>
        <form>
          <div>
            <label htmlFor="">Name</label>
            <input type="text" />
            <label htmlFor="">Email</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">Message</label>
            <textarea id="message" name="message" rows="5"></textarea>
            <BasicButton text="send message" />
          </div>
        </form>
        <div>
          <BasicButton text="goBack" />
        </div>
      </section>
    </>
  );
};
export default ContactView;
