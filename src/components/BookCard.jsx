import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";
import React from "react";
import { HiBookOpen } from "react-icons/hi";
import { MdOutlineCategory } from "react-icons/md";
import { FcRating } from "react-icons/fc";
import { CiEdit } from "react-icons/ci";
import { HiArrowCircleRight } from "react-icons/hi";
import { HiCurrencyBangladeshi } from "react-icons/hi";


const BookCard = ({ book }) => {

  return (
    <Card
      className="w-full overflow-hidden border rounded-xl shadow-lg 
             p-3 sm:p-4 lg:p-5 
             transition-all duration-500 ease-out hover:shadow-2xl 
             hover:-translate-y-2 hover:scale-[1.02] hover:bg-linear-to-br 
             hover:from-white/80 hover:to-gray-50 group relative z-0"
    >
      <div className="space-y-3">
        <div className="relative w-full aspect-square">
          <Image
            src={book.image_url}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt={book.image_url}
            className="object-cover rounded-lg"
          />
        </div>

        <h2 className="text-xl font-bold">{book.title}</h2>
        <p className="flex items-center gap-2 text-gray-600 font-bold">
          {" "}
          <CiEdit className="text-blue-700 font-bold text-2xl" /> {book.author}
        </p>

        <div className="flex flex-wrap items-center justify-center sm:justify-between gap-3 mt-3">
          <Chip className="flex items-center gap-2 text-sm text-gray-600">
            <MdOutlineCategory className="text-red-600 text-lg sm:text-xl" />{" "}
            Category: {book.category}
          </Chip>
          <span className="flex items-center gap-2 text-xs sm:text-sm text-gray-600 font-semibold">
            {" "}
            <HiBookOpen className="text-green-600 text-lg sm:text-xl" />{" "}
            Available: {book.available_quantity}
          </span>

          <Chip className="flex items-center gap-1 text-xs sm:text-sm font-semibold bg-gray-100 px-2 py-1 rounded-md">
            <HiCurrencyBangladeshi className="text-base text-green-500 sm:text-lg" />{" "}
            price: {book.price}
          </Chip>
          <span className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
            <FcRating className="text-lg sm:text-xl" />{" "}
            <span className="font-medium">Rating:</span>
            <span className="font-semibold">{book.rating ?? "N/A"}</span>
          </span>
        </div>

        <div className="flex items-center justify-center">
          <Button
            href={`/book/${book.id}`}
            className="mt-4 flex items-center gap-2 w-sm 
               bg-linear-to-r from-blue-500 to-purple-600 
               text-white font-medium
               hover:from-purple-600 hover:to-blue-500
               transition-all duration-300"
          >
            View Details <HiArrowCircleRight />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default BookCard;
