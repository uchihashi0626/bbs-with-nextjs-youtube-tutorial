import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@radix-ui/react-label";
import Link from "next/link";
import Image from "next/image";
import { BBSData } from "../types/types";

interface BBSDataProps {
  bbsData: BBSData;
}

const BBSCard = ({ bbsData }: BBSDataProps) => {
  const { id, title, content, createdAt, username } = bbsData;

  return (
    <div className="flex flex-col h-full">
      <Card className="flex flex-col h-full">
        <CardHeader className="flex-shrink-0">
          <CardTitle>{title}</CardTitle>
          <CardDescription>{username}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">{content}</CardContent>
        <CardFooter className="flex flex-shrink-0 justify-between">
          <Link href={`/bbs-posts/${id}`} className="text-blue-500">
            Read More
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default BBSCard;
