import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

function ContactForm() {
    const {register,reset,handleSubmit} = useForm()
function onSubmit(data){
    reset()
    toast.success("message was sent successfully");
}
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" flex flex-col gap-3 my-3 justify-end px-2  md:px-0  items-start">
          <label className=" font-bold" htmlFor="name">
            Full Name
          </label>
          <input
            className=" px-4 placeholder:text-gray-700 focus:outline-none focus:ring focus:ring-[#ff4d30] shadow-md bg-gray-100 w-full py-3 "
            {...register("name")}
            placeholder="E.g : 'omar sabri'"
            type="text"
            required
            id="name"
          />
        </div>
        <div className=" flex flex-col gap-3 my-3 px-2  md:px-0 items-start">
          <label className=" font-bold" htmlFor="email">
            Email
          </label>
          <input
            className=" px-4 placeholder:text-gray-700 focus:outline-none focus:ring focus:ring-[#ff4d30] shadow-md bg-gray-100 w-full py-3 "
            {...register("email")}
            type="email"
            required
            placeholder="youremail@hireme.com"
            id="email"
          />
        </div>
        <div className=" flex flex-col gap-3 my-3 px-2  md:px-0">
          <label className=" font-bold" htmlFor="message">
            Tell us about it{" "}
          </label>
          <textarea
            className=" px-4 placeholder:text-gray-700   focus:outline-none focus:ring focus:ring-[#ff4d30] shadow-md bg-gray-100 w-full py-3 "
            name="message"
            placeholder="write here"
            id="message"
            cols="30"
            rows="10"
            minLength={10}
            maxLength={300}
          ></textarea>
        </div>
      </form>
    );
}

export default ContactForm
