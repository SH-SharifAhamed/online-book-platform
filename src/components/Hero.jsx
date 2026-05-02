import BookCard from "./BookCard";


const Hero = async () => {
     
     const res = await fetch(
       "https://online-book-platform.vercel.app/data.json",
     );
     const books = await res.json();
     // 4 books sliced from the top
     const topBooks = books.slice(0, 4);
     

     return (
          <div>
               <h1 className="text-3xl font-bold mt-5">popolar Books</h1>
               <div>
                    {topBooks.map(book => <BookCard key={book.id} book={book} />)}
               </div>
          </div>
     );
};

export default Hero;