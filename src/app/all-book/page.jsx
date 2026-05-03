import BookCard from "@/components/BookCard";


const allBooksPage = async () => {
     const res = await fetch(
       "https://online-book-platform.vercel.app/data.json",
     );
     const books = await res.json();
     return (
          <div className="max-w-5xl w-full mx-auto mt-8 px-4">
               <h1 className="text-2xl sm:text-3xl font-bold my-5">All Books</h1>

               <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
                    {books.map(book=> <BookCard key={book.id} book={book} />
                    )}
               </div>


          </div>
     );
};

export default allBooksPage;