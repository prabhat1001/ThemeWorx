import React from "react";
import { useParams } from "react-router-dom";
import { ThemesData } from "../data/themesData";
import CodeBlock from "../components/CodeBlock";
import Footer from "./Footer.jsx";

const ThemesDetail = () => {
  const { slug } = useParams();

  const theme = ThemesData.find((t) => t.slug === slug);

  if (!theme) return <h1 className="text-white p-10">Theme not found.</h1>;

  return (
    <div className="w-full min-h-screen bg-black text-white flex flex-col items-center">
      {/* Theme Banner */}
      <div className="w-full  min-h-screen flex justify-center  bg-black">
        <div className=" relative w-full h-screen  flex flex-col overflow-hidden">
          <img
            src={theme.bannerImg}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className=" absolute bottom-0 w-full h-[60vh] bg-gradient-to-t from-black from-10% to-transparent to-80%"></div>
        </div>
      </div>

      {/* Theme Tag Line */}
      <div className=" w-full h-[40vh] md:h-[20vh] flex justify-center items-center">
        <div className="h-full lg:w-[60vw] md:w-[80vw] w-[80vw]">
          <h1 className="text-white font-lacquer text-3xl md:text-4xl text-center flex justify-center items-center h-full">
            {theme.tagline}
          </h1>
        </div>
      </div>

      {/* Theme Image */}
      <div className=" w-full h-auto  lg:p-20  p-10 mt-[4rem]">
        <h1 className="text-3xl font-poppins">Theme Preview</h1>
        <div className=" mt-8 w-full  lg:h-[100vh] rounded-[1rem] aspect-video border-2 border-[#8d8d8d] overflow-hidden ">
          {/* theme Img */}
          <img
            src={theme.previewImg}
            alt={theme.title}
            className="w-full h-full object-fit rounded-[1rem]"
          />
        </div>
      </div>

      {/* Description */}
      <div className=" w-full h-auto  lg:p-20  p-10">
        <h1 className="text-3xl font-poppins">Description</h1>
        <div className=" mt-8 w-full  ">
          <p className="text-xl text-[#929292]">{theme.description}</p>
        </div>
      </div>

      {/* Installation */}
      <div className=" w-full h-auto  lg:p-20  p-10">
        <h1 className="text-3xl font-poppins">
          {" "}
          How to Install This VSCode Theme ?
        </h1>
        <div className=" mt-8 w-full  ">
          <ul className="text-xl text-[#929292] leading-loose font-poppins">
            <li>1. Open Visual Studio Code.</li>
            <li>
              2. Press{" "}
              <span className="font-mono text-[#cecece] bg-[#1f1f1f] p-1 rounded text-center">
                {" "}
                Ctrl + Shift + P
              </span>{" "}
              (or{" "}
              <span className="font-mono text-[#cecece] bg-[#1f1f1f]  p-1 rounded text-center">
                Cmd + Shift + P
              </span>{" "}
              on Mac) to open the Command Palette.
            </li>
            <li>
              3. Type and select:{" "}
              <span className="font-mono text-[#cecece] bg-[#1f1f1f]  p-1 rounded text-center">
                Preferences: Open User Settings (JSON)
              </span>
            </li>
            <li>4. Copy the theme code provided below 👇</li>
          </ul>

          {/* code box */}
          <div className="mt-8 w-full h-[80vh] bg-[#222] rounded-[2rem] overflow-y-scroll">
            <CodeBlock className="w-full h-full" code={theme.themeCode} />
          </div>

          <ul className="text-xl text-[#929292] leading-loose pt-8 font-poppins">
            <li>
              {" "}
              5. Paste it inside your{" "}
              <span className="font-mono text-[#cecece] bg-[#1f1f1f] p-1 rounded text-center">
                {" "}
                settings.json
              </span>{" "}
              under the{" "}
              <span className="font-mono text-[#cecece] bg-[#1f1f1f] p-1 rounded text-center">
                "workbench.colorCustomizations"
              </span>{" "}
              &{" "}
              <span className="font-mono text-[#cecece] bg-[#1f1f1f] p-1 rounded text-center">
                "editor.tokenColorCustomizations"
              </span>{" "}
              sections.
            </li>
            <li>6. If these sections already exist, than either replace the existing values or comment out older entries and keep the new configuration.</li>
            <li>7. Save the file. Your theme should apply instantly!</li>
          </ul>
        </div>
      </div>


      {/* Note: */}
      <div className=" w-full h-auto lg:px-10  p-10">
        <div className="w-[85vw] p-10 lg:ml-10 border-2 border-green-600 rounded-2xl bg-[#001106c0] font-poppins text-green-400 text-l italic leading-loose ">
                NOTE: These configure settings will apply to all profile in VScode. If you want to change theme or want to undo the theme later, it's better to copy - paste the previously existing values of  {" "}
                <span className="font-mono text-[#cecece] bg-[#01441b5b] p-1 rounded text-center"> {" "} workbench.colorCustomizations </span> 
                  & {" "}
                 <span className="font-mono text-[#cecece] bg-[#01441b5b] p-1 rounded text-center"> {" "} editor.tokenColorCustomizations{" "} </span> {" "} sections and save it somewhere like notepad for future use.
        </div>
      </div>
      

      {/* Remove and Change Theme */}

      <div className=" w-full h-auto  lg:p-20  p-10 mb-[10vh]">
        <h1 className="text-3xl font-poppins">
          {" "}
          How to Change or Remove the Theme ?
        </h1>
        <div className=" mt-8 w-full  ">

          {/* disclosure widget 1 */}
          <details open>
          <summary className=" text-xl text-[#d1d1d1] leading-loose font-poppins">
            {" "}
             To change the theme :
          </summary>
          <ul className="text-xl text-[#929292] leading-loose font-poppins">
            <li>
              1. Press{" "}
              <span className="font-mono text-[#cecece] bg-[#1f1f1f] p-1 rounded text-center">
                {" "}
                Ctrl + Shift + P
              </span>{" "}
              → Select{" "}
              <span className="font-mono text-[#cecece] bg-[#1f1f1f] p-1 rounded text-center">
                {" "}
                Preferences: Color Theme{" "}
              </span>{" "}
            </li>
            <li>
              2. Pick any theme from the list to override the current one.
            </li>
          </ul>
          </details>

          {/* disclosure widget 2 */}
          <details open>
          <summary className="text-xl text-[#d1d1d1] leading-loose font-poppins mt-10">
            {" "}
             To remove the custom theme :
          </summary>
          <ul className="text-xl text-[#929292] leading-loose font-poppins">
            <li>
              1. Open Delete or comment out the following: again ({" "}
              <span className="font-mono text-[#cecece] bg-[#1f1f1f] p-1 rounded text-center">
                {" "}
                Ctrl + Shift + P
              </span>{" "}
              →{" "}
              <span className="font-mono text-[#cecece] bg-[#1f1f1f] p-1 rounded text-center">
                {" "}
                Open Settings (JSON)
              </span>{" "}
              ){" "}
            </li>
            <li>
              2. Delete or comment out the following:
              <br />
              <span className="font-mono text-[#cecece] bg-[#1f1f1f] p-1 rounded text-center">
                {" "}
                "workbench.colorCustomizations"
              </span>{" "}
              &{" "}
              <span className="font-mono text-[#cecece] bg-[#1f1f1f] p-1 rounded text-center">
                {" "}
                "editor.tokenColorCustomizations"
              </span>
            </li>
            <li>
              3. Save the file. VSCode will revert to your previously selected
              theme.
            </li>
          </ul>
          </details>

        </div>
      </div>

      {/* Footer */}
      <Footer />
      
    </div>
  );
};

export default ThemesDetail;
