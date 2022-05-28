import logo from "./logo.svg";
import "./App.css";
import Batch from "./components/Batch";
import Specs from "./components/Specs";
import cake from "./cake.svg";
import peoples from "./peoples.svg";
import clock from "./clock.svg";
import calendar from "./calendar.svg";
import Footer from "./components/footer";
import maths from "./maths.svg"


function App() {
  return (
    <>
      <div className="w-full px-2 pb-px md:px-10 pt-2 md:pt-3 top-0">
        <div className="grid grid-cols-2 md:flex sm:flex-row portrait:items-start justify-between">
          <div className="p-3 pt-0">
            <img
              src="https://app.younglabs.in/_next/image?url=%2FYoungLabsLogo.png&w=256&q=75"
              className="w-48 portrait:max-w-[30%] landscape:w-24 lg:w-24 md:w-24 lg:ml-10 cursor-pointer"
            ></img>
          </div>

          <div className="sm:ml-8 flex justify-center space-x-5 mt-2.5 portrait:justify-self-end md:h-2/3 text-center bg-lime-500 max-w-fit hover:bg-lime-600 text-white rounded-md shadow-md text-xl lg:mr-12">
            <button className="font-semibold px-4 py-1 ">Login</button>
          </div>
        </div>
      </div>
      <hr className="w-full border-t border-gray-150"></hr>
      <div className="w-full flex justify-center font-nunito">
        <div className="w-4/5 portrait:w-5/6 pt-4 flex flex-col">
          <div class="flex text-sky-600 font-bold pb-4">
            <img className="w-5 fill-slate-50" src={maths}></img>
            <p className="font-nunito ml-2">Maths</p>
          </div>
          <h1 className="text-hd pb-4 font-bold text-neutral-700 font-nunito">
            MENTAL MATHS
          </h1>
          <div className="md:grid md:grid-cols-2 flex flex-col-reverse justify-items-evenly align-middle">
            <div className="flex flex-col ">
              <div>
                <p className="text-lg py-2">
                  Have Fun with Math! Get rid of your Math phobia. Become a
                  Human Calculator yourself and be able to calculate 10-15 times
                  faster than before!
                </p>
              </div>
              <div id="courseMetaData" className=" py-4 grid grid-cols-2 ">
                <Specs img_src={`${cake}`} basicInfo={"6 - 8 Years"} />
                <Specs img_src={`${peoples}`} basicInfo={"7 - 8 Students"} />
                <Specs img_src={`${clock}`} basicInfo={"60 Mins Per Class"} />
                <Specs img_src={`${calendar}`} basicInfo={"5 Weeks Duration"} />
              </div>
              <div class=" border-2 rounded-md py-6 text-center bg-gray-100 text-slate-600">
                <p class="p-1 text-pr font-semibold">
                  ₹1499 INR For 10 Live Classes
                </p>
              </div>
            </div>
            
            <div className="flex justify-center items-center">
              <span className='p-2.5'>
                <img
                  alt
                  src="https://careerswithstem.com.au/wp-content/uploads/2018/09/In-text-image-MATT-500x300.jpg"
                  decoding="async"
                  data-nimg="intrinsic"
                  className="h-fit md:w-fit lg:w-5/6 portrait:mb-6 rounded-lg"
                  style={{
                    // position: "absolute",
                    inset: 0,
                    boxSizing: "border-box",
                    //padding:"10px",
                    border: "none",
                    margin: "auto",
                    display: "block",
                    width: '500px',
                    height: '300px',
                    
                  }}
                  
                />
              </span>
            </div>
          </div>
          <div class="mt-8 border-t-2">
            <p class="font-nunito text-pr text-gray-700 py-4 font-semibold ">Available Batches</p>
          </div>
          

          <div className="lg:w-full mx-auto my-10">
            <Batch
              eff={"grow pb-4 rounded-lg flex flex-col border-2 px-4"}
              title={"Details"}
              description={
                "CLASS 1- Criss-cross multiplication \nCLASS 2- Subtraction with numbers near to 10 and multiples of 10 Cutoff method addition/ Vyavakalanam method Dot method addition/ Rekhanth method \nCLASS 3- Multiplication upto 100 (Done mentally) \nCLASS 4- Subtraction with Numbers near 10 and multiple of 10 \nCLASS 5- Digit sum method Multiplication using base method part 1/ Nikhilam method, Fractions \nCLASS 6- Base method multiplication part 2 Division part 1 \nCLASS 7 - LCM and HCF \nCLASS 8- Multiplication with series of 9 Division part 2 \nCLASS 9- Multiplication with series of 1 Multiplication with 21,31 41 91 Base complement method subtraction/ Nikhil am method ,Division of any number by 11 \nCLASS 10- Division with series of 9 Multiplication by digits 12 to 19 Multiplication with 5, 25, 125 Percentage"
              }
              number={"1"}
            />
            <Batch
              eff={"grow pb-4 rounded-lg border-2 flex mt-4 px-4 flex-col"}
              title={"Homework"}
              description={
                "Comprehensive home assignments will be provided , which will be an extension of what is done is the class."
              }
              number={"2"}
            />
            <Batch
              eff={"grow pb-4 rounded-lg flex border-2 mt-4 px-4 flex-col"}
              title={"Learning Goals"}
              description={
                "Have Fun with Math! Get rid of your Math phobia. Become a Human Calculator yourself and be able to calculate 10-15 times faster than before!"
              }
              number={"3"}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
