import { RootState } from "@/redux-beta/store";
import { useSelector } from "react-redux";

function Education_out() {
  const education = useSelector((state: RootState) => state.data.education);

  return (
    <>
      {education.degree ? (
        <div id="plain-container" className="px-8 dark:text-white mb-1">
          <h1 className="font-semibold tracking-tight">EDUCATION</h1>
          <hr className="border-black dark:border-white border-t" />
          <div id="part_container" className="flex flex-col mt-1 leading-[1.4]">
            <table className="w-full">
              <tbody>
                <tr>
                  <td className="py-0 px-2">
                    <h1 className="font-semibold">{education.degree}</h1>
                  </td>
                  <td className="py-0 px-2 text-right font-semibold">
                    {education.bachelor_duration}
                  </td>
                </tr>
                <tr>
                  <td className="py-0 px-2">{education.college}</td>
                  <td className="py-0 px-2 text-right">
                    {education.bachelor_score}
                  </td>
                </tr>
                <tr>
                  <td className="py-0 px-2" colSpan={2}>
                    <li className="italic ml-2">{education.branch}</li>
                  </td>
                </tr>
              </tbody>
            </table>

            {education.int_school ? (
              <table className="w-full">
                <tr>
                  <td className="py-0 px-2">
                    <h1 className="font-semibold">Intermediate</h1>
                  </td>
                  <td className="py-0 px-2 text-right font-semibold">
                    {education.int_year}
                  </td>
                </tr>
                <tr>
                  <td className="py-0 px-2">{education.int_school}</td>
                  <td className="py-0 px-2 text-right">
                    {education.int_score}
                  </td>
                </tr>
              </table>
            ) : null}
            {education.hs_school ? (
              <table className="w-full">
                <tr>
                  <td className="py-0 px-2">
                    <h1 className="font-semibold">High-school</h1>
                  </td>
                  <td className="py-0 px-2 text-right font-semibold">
                    {education.hs_year}
                  </td>
                </tr>
                <tr>
                  <td className="py-0 px-2">{education.hs_school}</td>
                  <td className="py-0 px-2 text-right">{education.hs_score}</td>
                </tr>
              </table>
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Education_out;
