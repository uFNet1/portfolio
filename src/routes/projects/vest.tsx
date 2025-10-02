import { createFileRoute } from "@tanstack/react-router";
import Section from "../../components/Section";
import vestBanner from "/vest/banner.webp";
import vestMainPage from "/vest/vestmainpage.webp";
import vestWorks from "/vest/vestwork.webp";
import vestMapCrop from "/vest/vestmapcrop.webp";
import vestSearch from "/vest/vestsearch.webp";
import mapProviders from "/vest/mapproviders.webp";
import vestFeatures from "/vest/vestfeatures.webp";
import vestMobileMap from "/vest/vestmobilemap.webp";
import vestMobileSearch from "/vest/vestmobilesearch.webp";
import vestMobileBanner from "/vest/vestmobilebanner.webp";
import downArrow from "/assets/down.png";

export const Route = createFileRoute("/projects/vest")({
  component: Vest,
});

const textStyles = "lg:text-xl";
const subTextStyles = "text-sm text-neutral-500 text-center mt-2 mb-2 lg:text-base";
const textTitleStyles = "mb-2 lg:text-xl";
const imageTitle = "w-3/4 rounded border border-white lg:w-1/2";
const imageBigStyles = "w-3/4 rounded border border-white mx-auto";
const imageSmall = "w-3/4 rounded border border-white lg:w-1/2 mx-auto";
const listItemStyles = "ml-8";

function Vest() {
  return (
    <>
      <Section styling={""}>
        <div className="flex justify-center flex-col items-center gap-4 relative">
          <h1 className="text-4xl">The Gazeta Vest Project</h1>
          <h2 className="text-2xl text-neutral-400 pb-5">From a little button to a big app</h2>
          <img className={imageTitle} src={vestBanner} alt="" />
          <img src={downArrow} alt="" className="w-12 h-12 animate-bounce mt-10" />
        </div>
      </Section>

      <Section styling={""}>
        <div>
          <p className={textTitleStyles}>
            <b>Client</b>
          </p>
          <p className={textStyles}>Gazeta Vest is a regional newspaper that operates in a Chernihiv city.</p>
          <a href="https://vestgazeta.com.ua/" className="mb-2 text-blue-500 hover:text-blue-700">
            Link to website
          </a>
          <img src={vestMainPage} className={imageBigStyles} alt="Main page of Vest's website" />
          <p className={subTextStyles}>Main page of Vest's website</p>
        </div>
      </Section>

      <Section styling={""}>
        <div className="flex flex-row">
          <div className="w-1/2 my-auto">
            <p className={textTitleStyles}>
              <b>Connection</b>
            </p>
            <p className={textStyles}>
              I used to do small improvements to their website like changing margins, paddings, fonts, redesigning the
              featured section, adding functional buttons.
            </p>
            <br />
            <p className={textStyles}>
              To meet expectations, I worked closely with the client: brainstorming ideas, prototyping, and reviewing
              every detail together before implementing changes. This ensured that each update looked good and worked
              exactly as intended.
            </p>
          </div>
          <div className="w-1/2">
            <img src={vestWorks} alt="Implemented elements by me" className={imageSmall} />
            <p className={subTextStyles}>Elemebnts implemented by me</p>
          </div>
        </div>
      </Section>

      <Section styling={""}>
        <div className="">
          <p className={textTitleStyles}>
            <b>Task</b>
          </p>
          <p className={textStyles}>
            Once again, client went to me to get things done. The final product was a map of the city’s businesses.
          </p>
          <ul className="list-disc mb-10 text-xl">
            <li className={listItemStyles}>It took 25 days to develop a stable version.</li>
            <li className={listItemStyles}>A few more days were spent polishing it to perfection.</li>
          </ul>
          <div>
            <img src={vestMapCrop} className={imageBigStyles} alt="UI of the map" />
            <p className={subTextStyles}>UI of the map</p>
          </div>
        </div>
      </Section>

      <Section styling={""}>
        <div className="flex flex-row">
          <div className="w-1/2">
            <img src={vestSearch} alt="Coffee written in search bar" className={imageSmall} />
            <p className={subTextStyles}>Coffee written in search bar</p>
          </div>
          <div className="my-auto w-1/2 text-xl">
            <p className={textTitleStyles}>
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
          <p className={textTitleStyles}>
            <b>Map provider</b>
          </p>
          <div className="mb-4">
            <img src={mapProviders} className={imageBigStyles} alt="Comparison of different map providers" />
            <p className={subTextStyles}>Comparison of different map providers</p>
          </div>

          <p className={textStyles}>
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
          <div className="text-xl my-auto w-1/2">
            <p className={textTitleStyles}>
              <b>Key features I implemented</b>
            </p>
            <ul className="list-disc">
              <li className={listItemStyles}>AJAX-based marker loading with business details in popups</li>
              <li className={listItemStyles}>
                Businesses search with smart search input behavior (clear, enable/disable, close button)
              </li>
              <li className={listItemStyles}>Filtering businesses by category and taxonomy support</li>
              <li className={listItemStyles}>Infinite scrolling for list of businesses</li>
              <li className={listItemStyles}>QR codes in popups for Google Maps routing</li>
              <li className={listItemStyles}>Businesses can add links to their social media</li>
              <li className={listItemStyles}>Photo gallery up to 5 pictures</li>
            </ul>
          </div>

          <div className="w-1/2">
            <img
              src={vestFeatures}
              alt="Some of the features (gallery, loading animation, QR code)"
              className={imageSmall}
            />
            <p className={subTextStyles}>Some of the features (gallery, loading animation, QR code)</p>
          </div>
        </div>
      </Section>

      <Section styling={""}>
        <div className="grid-cols-1">
          <div className="flex flex-row gap-5 mx-auto justify-center">
            <img className="w-1/4 rounded border" src={vestMobileMap} alt="" />
            <img className="w-1/4 rounded border" src={vestMobileSearch} alt="" />
            <img className="w-1/4 rounded border" src={vestMobileBanner} alt="" />
          </div>

          <p className={subTextStyles}>Mobile design</p>
          <p className={textStyles}>
            As mobile usage keeps growing, I also built a mobile version of the app. It mirrors the desktop
            functionality but is optimized for comfort. The businesses list is hidden by default to give more focus to
            the map. A single tap on the search button reveals categories and search options — familiar yet
            mobile-friendly.
          </p>
        </div>
      </Section>
    </>
  );
}
