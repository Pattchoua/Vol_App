import cleaning from "../assets/cleaning.png";
import homeless from "../assets/homeless.png";
import education from "../assets/education.png";
import animalWelfare from "../assets/animalWelfare.png";
import healthcareSupport from "../assets/healthcareSupport.png";
import disasterRelief from "../assets/disasterRelief.png";
import { useNavigate } from "react-router-dom";

const causesData = [
  {
    title: "Environmental Conservation",
    image: cleaning,
  },
  {
    title: "Homeless Shelter Support",
    image: homeless, 
  },
  {
    title: "Youth Education and Mentorship",
    image: education, 
  },
  {
    title: "Animal Welfare",
    image: animalWelfare,
  },
  {
    title: "Disaster Relief and Emergency Response",
    image: disasterRelief,
  },
  {
    title: "Healthcare Support",
    image: healthcareSupport,
  },
];

const Causes = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">
          Join Us on the Journey <br /> Choose a Cause to Support
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {causesData.map((cause, index) => (
            <div
              key={index}
              className="rounded-lg shadow-md bg-white overflow-hidden group hover:opacity-90 transition-all duration-300"
              style={{
                width: "100%",
                background: `url(${cause.image}) center/cover no-repeat`,
                filter: "brightness(80%)",
                paddingBottom: "75%",
                position: "relative",
              }}
            >
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-60 flex flex-col justify-center">
                <h2 className="text-xl font-semibold mb-2 text-white text-center">
                  {cause.title}
                </h2>
                <button
                  className="bg-[#A9BE93] hover:bg-[#2A4434] text-white py-2 px-4 rounded w-full"
                  onClick={() => navigate("/login")}
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Causes;
