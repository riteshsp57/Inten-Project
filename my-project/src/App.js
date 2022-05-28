import logo from "./logo.svg";
import "./App.css";
import Batch from "./components/Batch";
import Specs from "./components/Specs";
import cake from "./cake.svg";
import peoples from "./peoples.svg";
import clock from "./clock.svg";
import calendar from "./calendar.svg";
import Footer from "./components/footer";

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
              <div className="flex justify-center items-center">
                <span
                  style={{
                    boxSizing: "border-box",
                    display: "inline-block",
                    overflow: "hidden",
                    width: "initial",
                    height: "initial",
                    background: "none",
                    opacity: 1,
                    border: 0,
                    margin: 0,
                    padding: 0,
                    position: "relative",
                    maxWidth: "100%",
                  }}
                >
                  <span
                    style={{
                      boxSizing: "border-box",
                      display: "block",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0,
                      maxWidth: "100%",
                    }}
                  >
                    <img
                      alt
                      aria-hidden="true"
                      src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27500%27%20height=%27300%27/%3e"
                      style={{
                        display: "block",
                        maxWidth: "100%",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                      }}
                    />
                  </span>
                  <img
                    alt
                    src="/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fyounglabs-8c353.appspot.com%2Fo%2Fcourse%2520cover%2520pictures%252Freading.webp%3Falt%3Dmedia%26token%3D34617f04-1c15-4bff-a75e-8a6668ad373a&w=1080&q=75"
                    decoding="async"
                    data-nimg="intrinsic"
                    className="h-fit md:w-fit lg:w-5/6 portrait:mb-6 rounded-lg"
                    style={{
                      position: "absolute",
                      inset: 0,
                      boxSizing: "border-box",
                      padding: 0,
                      border: "none",
                      margin: "auto",
                      display: "block",
                      width: 0,
                      height: 0,
                      minWidth: "100%",
                      maxWidth: "100%",
                      minHeight: "100%",
                      maxHeight: "100%",
                    }}
                    srcSet="/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fyounglabs-8c353.appspot.com%2Fo%2Fcourse%2520cover%2520pictures%252Freading.webp%3Falt%3Dmedia%26token%3D34617f04-1c15-4bff-a75e-8a6668ad373a&w=640&q=75 1x, /_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fyounglabs-8c353.appspot.com%2Fo%2Fcourse%2520cover%2520pictures%252Freading.webp%3Falt%3Dmedia%26token%3D34617f04-1c15-4bff-a75e-8a6668ad373a&w=1080&q=75 2x"
                  />
                  <noscript />
                </span>
              </div>
            </div>
          </div>

          <div className="lg:w-full mx-auto my-10">
            <Batch
              eff={"grow pb-4 rounded-lg flex flex-col border-2 px-4"}
              title={"Details"}
              description={"CLASS 1- Criss-cross multiplication \nCLASS 2- Subtraction with numbers near to 10 and multiples of 10 Cutoff method addition/ Vyavakalanam method Dot method addition/ Rekhanth method \nCLASS 3- Multiplication upto 100 (Done mentally) \nCLASS 4- Subtraction with Numbers near 10 and multiple of 10 \nCLASS 5- Digit sum method Multiplication using base method part 1/ Nikhilam method, Fractions \nCLASS 6- Base method multiplication part 2 Division part 1 \nCLASS 7 - LCM and HCF \nCLASS 8- Multiplication with series of 9 Division part 2 \nCLASS 9- Multiplication with series of 1 Multiplication with 21,31 41 91 Base complement method subtraction/ Nikhil am method ,Division of any number by 11 \nCLASS 10- Division with series of 9 Multiplication by digits 12 to 19 Multiplication with 5, 25, 125 Percentage"}
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
      <Footer/>
    </>
  );
}

export default App;
