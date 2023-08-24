import shareit from "../assets/shareit.png";
import ncnews from "../assets/nc-news.png";

function Projects() {
    return (
        <div className="flex items-center min-h-lg p-10 space-x-4 flex-wrap justify-around space-y-4 w-full h-full bg-cover bg-center py-32 bg-[url(/background-5.png)] p-10">
    <div className="max-w-md rounded overflow-hidden shadow-lg h-3/4">
        <img className="w-full h-96" src={shareit} alt="shareit project screenshot"/>
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-4">ShareIt</div>
                <p className="text-gray-700 text-base mb-4">
                    ShareIt is a social media platform developed by the 405 Found team with a unique focus on mental health. The website if mobile responsive and has been created using Svelte.js, Typescript, Supabase and Tailwind CSS. 
                    Users can create account, update details including avatar image, can vote and comment on stories, post stories, delete their own stories and comments, filter stories.
                    </p>
                <a className="text-gray-500 hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="https://share-it-test-app.netlify.app">Click here to check it out</a>
            </div>
        <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#sveltejs</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#typescript</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#tailwindcss</span>
         </div>
    </div>
    <div className="max-w-md rounded overflow-hidden shadow-lg h-3/4">
        <img className="w-full h-96" src={ncnews} alt="nc news project screenshot"/>
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-4">NC News</div>
                <p className="text-gray-700 text-base mb-4">
                Northcoders News is a social news aggregation site developed with React.js, Node.js and styled with CSS.
                Each article has user curated ratings and can be voted using the API. Users can also add comments about an article, log in, sign up and see their account details.A user can remove their own comments.
                All data come from own implementation of the Northcoders News API server.
                    </p>
                    <a className="text-gray-500 hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="https://crissu-nc-news.netlify.app">Click here to check it out</a>
            </div>
        <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#reactjs</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#css</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#nodejs</span>
         </div>
    </div>
        
    </div>

        )
    }
    
    export default Projects;
    