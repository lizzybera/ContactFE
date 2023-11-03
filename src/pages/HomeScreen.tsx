import { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { contact, deleteContact } from "../api/contactApi";
import { useViewContact } from "../hooks/useHooks";
import { RiDeleteBin3Line } from "react-icons/ri";

const HomeScreen = () => {
  const [opt, setOpt] = useState<boolean>(false);

  const getRandomColor = () => {
    return `#${(((1 << 24) * Math.random()) | 0).toString(16)}`;
  };

  const { contacts } = useViewContact();

  const [parent] = useAutoAnimate();

  const onOpt = () => {
    setOpt(!opt);
  };

  const model = yup.object({
    name: yup.string().required(),
    phoneNumber: yup.string().required(),
    category: yup.string().required(),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(model),
  });

  const onhandleSubmit = handleSubmit((data: any) => {
    //   const {name, phoneNumber, category} = data
    console.log("data", data);

    contact(data).then(() => {
      reset();
      onOpt();
    });
  });

  const [state, setState] = useState<string>("");

  let filteredContacts = []
  if(contacts){
    filteredContacts = contacts.filter((res : any) => res.category.includes(state.toLowerCase())
    )
    console.log(filteredContacts);
    
  }

  return (
    <div
      className="w-full h-[100%] justify-center items-center flex flex-col "
      ref={parent}
    >
      {/* icon to add */}
      <div
        className="w-[50px] h-[50px]  rounded-md text-[30px] hover:scale-[1.1] cursor-pointer hover:bg-rose-500 hover:border-white hover:text-white border-rose-400 flex justify-center items-center text-rose-400 border-[2px] mt-5"
        onClick={() => {
          onOpt();
        }}
      >
        +
      </div>

      <div className="flex">
        <input
        type="text"
        placeholder="search by category"
        className="w-[250px] h-[40px]  mt-3 rounded-full border border-rose-700 p-3 outline-rose-700 shadow-lg"
        onChange={(e: any) => {
          setState(e.target.value);
        }}
      />
      
      </div>

      {/* form */}
      {opt ? (
        <form
          onSubmit={onhandleSubmit}
          className="w-[500px] mobile:w-[90%] mt-1 py-3 duration-[300ms] "
        >
          {/* Name */}
          <div className="mt-4">
            <div className="ml-4  text-rose-900 font-[500] text-[15px]">
              Name
            </div>
            <input
              type="text"
              className="w-full  h-[40px] rounded-md p-5  placeholder: outline-rose-400 outline-1 border-rose-200 border-[2px] "
              placeholder="Names"
              {...register("name")}
            />
            {errors?.name?.message && (
              <div className="text-end text-[15px] text-red-500">error</div>
            )}
          </div>

          {/* phone Number */}
          <div className="mt-4">
            <div className="ml-4 text-rose-900 font-[500] text-[15px]">
              Phone Number
            </div>
            <input
              type="text"
              className="w-full  h-[40px] rounded-md p-5  placeholder: outline-rose-400 outline-1 border-rose-200 border-[2px] "
              placeholder="Phone Numbers"
              {...register("phoneNumber")}
            />
            {errors?.phoneNumber?.message && (
              <div className="text-end text-[15px] text-red-500">error</div>
            )}
          </div>

          {/* category */}
          <div className="mt-4">
            <div className="ml-4 text-rose-900 font-[500] text-[15px] ">
              Category
            </div>

            <select
              // value={opt}
              // onChange={(e) => {
              //   setOpt(e.target.value);
              // }}

              {...register("category")}
              className="w-full h-[40px]  border-rose-200 rounded-md  border-[2px] outline-none"
            >
              <option value="business" className="h-[30px]">
                business
              </option>
              <option value="bff" className=" h-[20px]">
                bff
              </option>
              <option value="loved" className=" h-[20px]">
                loved
              </option>
            </select>
          </div>

          {/* button */}
          <button
            type="submit"
            className="w-full  h-[40px] mt-6 flex justify-center items-center p-5  bg-rose-600 text-white font-[500]"
          >
            Add
          </button>
          <div></div>
        </form>
      ) : null}

      {/* readContacts */}

      {filteredContacts?.map((props: any) => (
        <div key={props?._id}>
          <div className="w-[500px] mobile:w-[300px] mt-8 py-3 duration-[300ms] ">
            <div className="w-full h-[60px] flex justify-between items-center px-3 cursor-pointer border-pink-500 rounded-md duration-[350ms] hover:bg-pink-300 ">
              <div
                className="h-[35px] w-[35px] flex justify-center duration-[300ms] text-white items-center rounded-[30px]"
                style={{ backgroundColor: `${getRandomColor()}` }}
              >
                {props?.image}
              </div>

              <div className="flex justify-center items-center flex-col">
                <div className="text-[20px] font-[600]">{props?.name}</div>
                <div className="text-[15px]">{props?.phoneNumber}</div>
              </div>

              <div>
               {props?.category}
              </div>

              <div
                className="h-[25px] w-[25px] flex justify-center items-center rounded-[30px] border-rose-600 border text-[12px] text-rose-400 "
                onClick={() => {
                  deleteContact(props?._id);
                }}
              >
                {" "}
                <RiDeleteBin3Line />{" "}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeScreen;
