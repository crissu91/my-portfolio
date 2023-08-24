import TechStack from "./TechStack";

function Home() {
    return (
        <div>
            <div className="h-screen bg-gray-50 flex items-center">
                <section className="w-full h-full bg-cover bg-center py-32 bg-[url(/background-7.png)]">
                    <div className="container mx-auto mt-auto text-center text-gray-700 p-10">
                        <h1 className="text-5xl font-medium mb-6">Cristina Stefan</h1>
                        <p className="text-xl mb-12">I am an aspiring software developer fueled by a passion for photography, reading, yoga, and traveling.</p>
                        <a href="/resume" className="bg-gradient-to-r from-purple-100 to-purple-300 text-gray py-2 px-4 rounded-lg shadow">Resume</a>
                    <TechStack />
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Home;