import { Card, Chip } from "@heroui/react";
import Image from "next/image";
import { CiEdit } from "react-icons/ci";
import { MdOutlineCategory } from "react-icons/md";
import { HiCurrencyBangladeshi } from "react-icons/hi";
import { FcRating } from "react-icons/fc";

const BookDetelisPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch("https://online-book-platform.vercel.app/data.json");
  const books = await res.json();

  const book = books.find((p) => p.id == id);

  return (
    <div className="max-w-5xl w-full mx-auto mt-8 px-4">
      <Card
        className="flex flex-col md:flex-row gap-6 p-4 sm:p-6 
  transition-all duration-300 
  hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-1 hover:bg-linear-to-br hover:from-blue-300/50 hover:to-purple-200/50"
      >
        <div className="w-full md:w-55 flex justify-center md:justify-start">
          <Image
            src={book.image_url}
            width={220}
            height={220}
            alt={book.title}
            className="rounded-md object-cover w-full max-w-55 h-auto"
          />
        </div>

        <div className="flex-1 space-y-3 pt-2 border-t-2 border-solid border-gray-300 md:border-t-0 md:pt-0">
          <h3 className="text-xl sm:text-2xl font-bold leading-snug">
            {book.title}
          </h3>

          <p className="flex items-center gap-2 text-gray-600 font-semibold text-sm sm:text-base">
            <CiEdit className="text-blue-700 text-xl sm:text-2xl" />
            {book.author}
          </p>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            {book.description}
          </p>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <Chip className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
              <MdOutlineCategory className="text-red-600 text-lg sm:text-xl" />
              Category: {book.category}
            </Chip>

            <Chip className="flex items-center gap-1 text-xs sm:text-sm font-semibold bg-gray-100 px-2 py-1 rounded-md">
              <HiCurrencyBangladeshi className="text-green-500 text-base sm:text-lg" />
              Price: {book.price}
            </Chip>

            <span className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
              <FcRating className="text-lg sm:text-xl" />
              <span className="font-medium">Rating:</span>
              <span className="font-semibold">{book.rating ?? "N/A"}</span>
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-xs sm:text-sm text-gray-600 pt-2">
            <div className="flex items-center gap-2">
              <span className="font-medium text-gray-700">Reviews:</span>
              <span className="px-2 py-0.5 rounded-full bg-gray-100 text-gray-700">
                {book.reviews}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="font-medium text-gray-700">Available:</span>
              <span
                className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                  book.available_quantity > 0
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-600"
                }`}
              >
                {book.available_quantity > 0
                  ? book.available_quantity
                  : "Out of stock"}
              </span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default BookDetelisPage;
