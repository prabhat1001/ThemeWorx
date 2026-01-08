import React from "react";
import { useParams } from "react-router-dom";
import { ThemesData } from "../data/themesData";
import CodeBlock from "../components/CodeBlock";

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
        <div className=" mt-8 w-full lg:h-[90vh] bg-[#1b1b1b] rounded-[2rem] aspect-video">
          {/* theme Img */}
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
      <di className=" w-full h-auto  lg:p-20  p-10">
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
                Preferences: Open Settings (JSON)
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
            <li>6. If they already exist, just merge the values.</li>
            <li>7. Save the file. Your theme should apply instantly!</li>
          </ul>
        </div>
      </di>

      {/* Remove and Change Theme */}

      <div className=" w-full h-auto  lg:p-20  p-10">
        <h1 className="text-3xl font-poppins">
          {" "}
          How to Change or Remove the Theme ?
        </h1>
        <div className=" mt-8 w-full  ">
          <details>
          <summary className="text-xl text-[#d1d1d1] leading-loose font-poppins">
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

          <details>
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

      
    </div>
  );
};

export default ThemesDetail;
