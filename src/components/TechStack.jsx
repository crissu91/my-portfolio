   import react from  "../assets/React-logo.png";
   import node from "../assets/Node-logo.png";
   import javascript from "../assets/JavaScript-logo.png";
   import typescript from "../assets/TypeScript-logo.png";
   import postgresql from "../assets/postgresql-logo.png";
   import sql from "../assets/sql-logo.png";
   import express from "../assets/express-logo.png";
   import html from "../assets/HTML-logo.png";
   import css from "../assets/CSS-logo.png";
   import tailwind from "../assets/tailwind-logo.png";
   import svelte from "../assets/svelte-logo.png";
   import supabase from "../assets/supabase-logo.png";

function TechStack() {
    const logos = [react, node, javascript, typescript, postgresql, sql, express, html, css, tailwind, svelte, supabase]
    return (
        <div>
            <h1 className="flex items-center justify-center text-4xl font-medium mb-6 text-gray-700 pt-20 ">Tech Stack</h1>
            <div className="grid grid-cols-4 lg:grid-cols-5  place-items-center p-4">
                {logos.map(logo => <img className="max-w-24 max-h-20 p-2" src={logo} alt={logo} key={logo} />)}          
            </div>
        </div>
    )
}

export default TechStack;