import blackball from "../assets/Images/Page1blackballimg.webp";
import whiteball from "../assets/Images/Page1whiteballimg.webp";

function Rotateball() {
  return (
    <div className="absolute top-[80%] left-[85%] sm:left-[94%] transform -translate-x-1/2 -translate-y-1/2 gap-4 flex flex-col">
      {[whiteball, blackball].map((item, idx) => {
        return (
          <div
            key={idx}
            className="img_div w-[45px] sm:w-[70px] h-[45px] sm:h-[70px] animate-spin transition-all"
          >
            <img src={item} alt="" className="w-full h-full" />
          </div>
        );
      })}
    </div>
  );
}

export default Rotateball;
