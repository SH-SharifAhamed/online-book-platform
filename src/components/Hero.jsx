import Marquee from "react-fast-marquee";
import BookCard from "./BookCard";


const Hero = async () => {
  const res = await fetch("https://online-book-platform.vercel.app/data.json", {
    cache: "no-store",
  });
  const books = await res.json();
  // 4 books sliced from the top
  const topBooks = books.slice(8, 13);

  return (
    <div className="max-w-5xl w-full mx-auto mt-8 px-4">
      <Marquee
        pauseOnHover
        speed={50}
        className="bg-linear-to-r from-blue-500 to-purple-600 rounded-2xl text-white py-2"
      >
         Find Your Next Read • Explore Books • New Arrivals • Best Sellers •
      </Marquee>
      <h1 className="text-2xl sm:text-3xl font-bold my-5">Popular Books</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5">
        {topBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Hero;
