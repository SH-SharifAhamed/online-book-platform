import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";
import React from "react";
import { HiBookOpen } from "react-icons/hi";
import { MdOutlineCategory } from "react-icons/md";
import { FcRating } from "react-icons/fc";
import { CiEdit } from "react-icons/ci";
import { HiArrowCircleRight } from "react-icons/hi";
import { HiCurrencyBangladeshi } from "react-icons/hi";
// import { IoMdStar } from "react-icons/io";

const BookCard = ({ book }) => {
  console.log(book);

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
        {/* <p className="text-gray-700">{book.description}</p> */}
        <div className="relative flex items-center justify-evenly mt-2">
          <Chip className="flex items-center gap-2 text-sm text-gray-500">
            <MdOutlineCategory className="text-red-700 text-2xl" /> Category:{" "}
            {book.category}
          </Chip>
          <span className="flex items-center gap-2 text-sm text-gray-500 ml-4">
            {" "}
            <HiBookOpen className="text-green-600 text-2xl" /> Available:{" "}
            {book.available_quantity}
          </span>
          {/* <span className="flex items-center gap-2 text-sm text-gray-500 ml-4">
            {" "}
            <HiCurrencyBangladeshi className="text-green-600 text-2xl" /> Price:{" "}
            {book.price}
          </span> */}
          <Chip className="text-sm font-bold">
            <HiCurrencyBangladeshi /> price: {book.price}
          </Chip>
        </div>

        <div className="flex items-center justify-evenly mt-2">
          <span className="flex items-center gap-2 text-sm text-gray-500">
            <FcRating className="text-yellow-500 text-2xl" /> Rating:{" "}
            {book.rating}
          </span>
          {/* <span className="flex items-center gap-2 text-sm text-gray-500 ml-4">
            {" "}
            <IoMdStar className="text-green-600 text-2xl" /> Reviews:{" "}
            {book.reviews}
          </span> */}
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
