import { createFileRoute } from "@tanstack/react-router";
import Section from "../../components/Section";
import vestBanner from "/vest/banner.webp";
import vestMainPage from "/vest/vestmainpage.png";
import vestWorks from "/vest/vestwork.webp";
import vestMapCrop from "/vest/vestmapcrop.webp";
import vestSearch from "/vest/vestsearch.webp";
import mapProviders from "/vest/mapproviders.webp";
import vestFeatures from "/vest/vestfeatures.webp";

import downArrow from "/assets/down.png";

export const Route = createFileRoute("/projects/vest")({
  component: Vest,
});

function Vest() {
  return (
    <>
      <Section styling={""}>
        <div className="flex justify-center flex-col items-center gap-4 relative">
          <h1 className="text-4xl">The Gazeta Vest Project</h1>
          <h2 className="text-2xl text-neutral-400 pb-5">From a little button to a big app</h2>
          <img className="w-3/4 rounded border border-white lg:w-1/2" src={vestBanner} alt="" />
          <img src={downArrow} alt="" className="w-12 h-12 animate-bounce mt-10" />
        </div>
      </Section>
      <Section styling={""}>
        <div className="grid-cols-1">
          <p className="lg:text-xl">Gazeta Vest is a regional newspaper that operates in a Chernihiv city.</p>
          <a href="https://vestgazeta.com.ua/" className="mb-2 text-blue-500 hover:text-blue-700">
            Link to website
          </a>
          <img src={vestMainPage} className="w-2/3 mx-auto rounded border" alt="Main page of Vest's website" />
          <p className="text-sm text-neutral-500 text-center mt-2 mb-2">Main page of Vest's website</p>
        </div>
      </Section>
      <Section styling={""}>
        <div className="flex flex-row">
          <div className="w-1/2 my-auto">
            <p className="lg:text-xl">
              I used to do small improvements to their website like changing margins, paddings, fonts, redesigning the
              featured section, adding functional buttons.
            </p>
            <br />
            <p className="lg:text-xl my-auto">
              To meet expectations, I worked closely with the client: brainstorming ideas, prototyping, and reviewing
              every detail together before implementing changes. This ensured that each update looked good and worked
              exactly as intended.
            </p>
          </div>

          <img src={vestWorks} alt="Implemented elements by me" className="w-2xs rounded border mx-auto" />
        </div>
      </Section>
      <Section styling={""}>
        <div className="">
          <p className="mb-2 lg:text-xl">
            <b>Task</b>
          </p>
          <p className="text-xl">
            Once again, client went to me to get things done. The final product was a map of the city’s businesses.
          </p>
          <ul className="list-disc mb-2">
            <li className="text-lg font-light">It took 25 days to develop a stable version.</li>
            <li className="text-lg font-light">A few more days were spent polishing it to perfection.</li>
          </ul>
          <img
            src={vestMapCrop}
            className="w-3/4 rounded border border-white lg:w-1/2 mx-auto"
            alt="Main page of Vest's website"
          />
        </div>
      </Section>
      <Section styling={""}>
        <div className="flex flex-row">
          <div className="w-1/2">
            <img src={vestSearch} alt="Coffee written in search bar" className="w-2xs rounded border mx-auto" />
            <p className="text-sm text-neutral-500 text-center mt-2 mb-2">Coffee written in search bar</p>
          </div>
          <div className="my-auto w-1/2 text-xl">
            <p className="mb-2">
              <b>The idea</b>
            </p>
            <p className="">
              The idea behind the map was simple but powerful: there was only one competitor in the local market. The
              goal was to help businesses appear on the map and connect with customers who might not even know they
              existed.
            </p>
          </div>
        </div>
      </Section>
      <Section styling={""}>
        <div>
          <p className="mb-2">
            <b>Map provider</b>
          </p>
          <div className="mb-4">
            <img
              src={mapProviders}
              className="w-3/4 rounded border border-white lg:w-1/2 mx-auto"
              alt="Main page of Vest's website"
            />
            <p className="text-sm text-neutral-500 text-center mt-2 mb-2">Comparison of different map providers</p>
          </div>

          <p className="text-xl">
            The project used Mapbox as the map provider — I chose it for its generous free tier and developer-friendly
            library Mapbox GL JS.
            <br />
            Since the website was not built on React, I decided to use TypeScript to keep the codebase clean and avoid
            unnecessary complexity for future developers.
          </p>
        </div>
      </Section>
      <Section styling={""}>
        <div className="flex flex-row">
          <div className="text-xl">
            <p className="">Key features I implemented:</p>
            <ul className="list-disc">
              <li>AJAX-based marker loading with business details in popups</li>
              <li>Businesses search with smart search input behavior (clear, enable/disable, close button)</li>

              <li>Filtering businesses by category and taxonomy support</li>
              <li>Infinite scrolling for list of businesses</li>
              <li>QR codes in popups for Google Maps routing</li>
              <li>Businesses can add links to their social media</li>
              <li>Photo gallery up to 5 pictures</li>
            </ul>
          </div>

          <div className="w-1/2">
            <img src={vestFeatures} alt="Coffee written in search bar" className="w-2xs rounded border mx-auto" />
            <p className="text-sm text-neutral-500 text-center mt-2 mb-2">
              Some of the features (gallery, loading animation, QR code)
            </p>
          </div>
        </div>
      </Section>
      <Section styling={""}>
        <div className="grid-cols-1">
          <p className="">
            <b>Gazeta Vest</b> is a regional newspaper that operates in a Chernihiv city.
          </p>
          <a href="https://vestgazeta.com.ua/" className="mb-2 text-blue-500 hover:text-blue-700">
            Link to website
          </a>
          <img src={vestMainPage} alt="Main page of Vest's website" />
          <p className="text-sm text-neutral-500 text-center mb-2">Main page of Vest's website</p>
          <p className="">
            As mobile usage keeps growing, I also built a mobile version of the app. It mirrors the desktop
            functionality but is optimized for comfort. The business list is hidden by default to give more focus to the
            map. A single tap on the search button reveals categories and search options — familiar yet mobile-friendly.
          </p>
        </div>
      </Section>
    </>
  );
}
