import Nav from "../../components/nav";
import Topiclist from "../../components/Topiclist";

export default function Home() {
  return (

    
    <section className="p-8 bg-white rounded-lg shadow-md max-w-md mx-auto">

    <h2 className="text-2xl font-semibold mb-4 text-purple-700">
      Tailwind Check Component
    </h2>
    <p className="mb-6 text-gray-600">
      This box tests padding, rounded corners, shadows, font, and text colors.
    </p>
    <button className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-bold rounded transition">
      Click Me
    </button>
  
  
    <Topiclist/>
  
  </section>



  );
}
