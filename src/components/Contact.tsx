import Button from "@/components/Button";
import SocialIcons from "@/components/SocialIcons";
import MaybeMotion from "@/components/MaybeMotion";

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="flex flex-col justify-center items-center w-full max-w-[600px] py-24 mx-auto space-y-8"
    >
      <MaybeMotion
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.25 }}
        className="flex flex-col justify-center items-center w-full max-w-[600px] py-24 mx-auto space-y-8"
      >
        <div className="flex flex-col items-center space-y-2">
          <div className="flex text-green-accent text-md font-mono gap-2">
            <span>04.</span>
            <p>What&apos;s next?</p>
          </div>
          <h1 className="text-4xl md:text-5xl text-off-white font-extrabold">
            Get In Touch
          </h1>
        </div>
        <p className="text-gray-accent text-md max-w-[500px] text-center">
          I&apos;m always open to discussing new projects, ideas, or
          opportunities. Whether you have a question, want to collaborate, or
          just want to say hi, feel free to reach out!
        </p>
        <Button
          text="Say Hello"
          link="mailto:karldstencell@gmail.com"
          bg_colour="primary-blue"
          button_padding="py-4 px-6"
        />
        <div className="flex w-full items-center justify-center">
          <SocialIcons size={50} orientation="row" />
        </div>
      </MaybeMotion>
    </section>
  );
};

export default Contact;
