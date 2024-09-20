// import { CONTACT } from "../constants";

// const Contact = () => {
//    return (
//       <div className="border-b border-neutral-900 pb-20">
//          <h1 className="my-10 text-center text-4xl">Get in Touch</h1>
//          <div className="text-center tracking-tighter">
//             <p className="my-4">{CONTACT.address}</p>
//             <p className="my-4">{CONTACT.phoneNo}</p>
//             <a href="#" className="border-b">{CONTACT.email}</a>
//          </div>
//       </div>
//    );
// };

// export default Contact;



import { CONTACT } from "../constants";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <h1 className="my-10 text-center text-4xl">Get in Touch</h1>
      <div className="text-center tracking-tighter">
        <p className="my-4">{CONTACT.address}</p>
        <p className="my-4">{CONTACT.phoneNo}</p>
        <a href={`mailto:${CONTACT.email}`} className="my-4 block border-b">
          {CONTACT.email}
        </a>
        <a
          href="https://tosinehindero.com.amazonaws.com/Resume.pdf" // Update with the actual path to your resume
          download
          className="mt-8 inline-block rounded bg-orange-700 px-6 py-3 text-white hover:bg-purple-800 transition-colors"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Contact;
