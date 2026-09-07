import { useAppSelector } from "@/redux-beta/hooks";
import Hr from "@/components/Hr";
import ContactInfo from "./ContactInfo";

// `interactive` enables drag-to-reorder on the contact-info block — the print
// portal renders the same layout statically, no dnd-kit involved there.
function Intro_out({ interactive = false }: { interactive?: boolean }) {
  const intro = useAppSelector((state) => state.data.intro);
  const looks = useAppSelector((state) => state.looks);
  const showIntroSeparator = useAppSelector((state) => state.looks.showIntroSeparator);

  return (
    <>
      <div
        id="header"
        className={` text-black py-8 px-8 flex flex-nowrap gap-4 ${showIntroSeparator ? "border-b border-black border-dashed" : ""} mb-4 rounded-t-md transition-all duration-300`}
        style={{ backgroundColor: looks.headerColor }}
      >
        {intro.picture && looks.imageEnable ? (
          <img
            className="border-black border object-cover w-[100px] rounded"
            src={intro.picture}
          />
        ) : null}

        <div className="w-full flex flex-col gap-1">
          <h1 className="font-bold text-4xl tracking-tight">{intro.name}</h1>
          <p className="mt-[-5px]">{intro.profile}</p>
          <hr className="border-black border-t " />
          <ContactInfo intro={intro} interactive={interactive} />
        </div>
      </div>
      {intro.summary ? (
        <div id="plain-container" className=" px-8 mb-1 ">
          <h1 className="font-semibold tracking-tight">SUMMARY</h1>
          <Hr/>
          <p className="leading-[1.2] mt-1">{intro.summary}</p>
        </div>
      ) : null}
    </>
  );
}
export default Intro_out;
