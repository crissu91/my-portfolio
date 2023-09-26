import shareit from "../assets/shareit.png";
import ncnews from "../assets/nc-news.png";
import ecommerce from "../assets/ecommerce-shop.png";
import weather_app from "../assets/weather_app.png";

function Projects() {
  return (
    <div className="bg-[url(/background-5.png)] bg-cover bg-center py-26 md:p-10">
      <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6 pt-16">
        Projects
      </h2>
      <div className="flex items-center md:p-10 space-x-4 flex-wrap justify-around space-y-4  ">
        <div className="max-w-md rounded overflow-hidden shadow-lg">
          <img
            className="h-96"
            src={shareit}
            alt="shareit project screenshot"
          />
          <div className="px-6 py-4 h-[350px]">
            <div className="font-bold text-xl mb-4">ShareIt</div>
            <p className="text-gray-700 text-base mb-4">
              ShareIt is a social media platform developed by the 405 Found team
              with a unique focus on mental health. Users can create account,
              update personal details including avatar image, vote and comment
              on stories, post stories, delete their own stories and comments,
              filter stories. The website has been created using Svelte.js,
              Typescript, Supabase and Tailwind CSS, also implemented machine
              learnings (sentiment analysis api).
            </p>
            <a
              className="text-red-500 hover:text-gray-800 dark:hover:text-white py-4 rounded-md text-sm font-medium"
              href="https://share-it-test-app.netlify.app"
            >
              Click here to check it out
            </a>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #svelte
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #typescript
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #tailwind css
            </span>
          </div>
        </div>
        <div className="max-w-md rounded overflow-hidden shadow-lg">
          <img className="h-96" src={ncnews} alt="nc news project screenshot" />
          <div className="px-6 py-4 h-[350px]">
            <div className="font-bold text-xl mb-4">NC News</div>
            <p className="text-gray-700 text-base mb-4">
              Northcoders News is a social news website developed with React.js,
              Node.js and styled with CSS. Each article can be voted using the
              API. Users can also add comments about an article, log in, sign up
              and see their account details.A user can remove their own
              comments. All data come from own implementation of the API server.
            </p>
            <a
              className="text-red-500 hover:text-gray-800 dark:hover:text-white py-4 rounded-md text-sm font-medium"
              href="https://crissu-nc-news.netlify.app"
            >
              Click here to check it out
            </a>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #react
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #css
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #node
            </span>
          </div>
        </div>
        <div className="max-w-md rounded overflow-hidden shadow-lg">
          <img
            className="h-96"
            src={ecommerce}
            alt="e-commerce shop project screenshot"
          />
          <div className="px-6 py-4 h-[350px]">
            <div className="font-bold text-xl mb-4">E-commerce Shop</div>
            <p className="text-gray-700 text-base mb-4">
              E-commerce Shop is a platform where users can see clothing items
              individually, add and remove from cart, see the total of the cart
              items, add or remove amount of items in cart, empty the cart
              completely. This project has been created using React.js, Tailwind
              CSS and FakeStoreApi for fetching the products.
            </p>
            <a
              className="text-red-500 hover:text-gray-800 dark:hover:text-white py-4 rounded-md text-sm font-medium"
              href="https://crissu91-ecommerce-shop.netlify.app"
            >
              Click here to check it out
            </a>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #react
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #tailwind css
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #FakeStoreApi
            </span>
          </div>
        </div>

        <div>
          <div className="max-w-md rounded overflow-hidden shadow-lg">
            <img
              className="h-96"
              src={weather_app}
              alt="weather app project screenshot"
            />
            <div className="px-6 py-4 h-[350px]">
              <div className="font-bold text-xl mb-4">Weather App</div>
              <p className="text-gray-700 text-base mb-4">
                A Weather App created with JavaScript, React, Tailwind CSS,
                Luxon, Unicons, and React-toastify. Data is fetched from
                OpenWeather API. The app is getting temperature, max
                temperature, min temperature, humidity, real feel, sunrise,
                sunset, hourly and daily forecast. Is it also displaying the
                local time at the selected location. For search input, there are
                some quick links on top along with a text box for searching a
                city and also a current location-based search.
              </p>
              <a
                className="text-red-500 hover:text-gray-800 dark:hover:text-white py-4 rounded-md text-sm font-medium"
                href="https://crissu91-weather-app.netlify.app"
              >
                Click here to check it out
              </a>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #react
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #tailwind css
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #Unicons
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
