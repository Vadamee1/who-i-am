import Gifts from "@/components/pages/dedicatory/Gifts";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Flower, Flower2 } from "lucide-react";
import Image from "next/image";

export default function Dedicatory() {
  return (
    <Card className="w-96 bg-gradient-to-br from-pink-100 to-rose-100 border-2 border-rose-300 shadow-lg">
      <CardHeader>
        <CardTitle className="flex justify-between">
          <Image alt="Girasol" src="/imgs/girasol.ico" height={40} width={40} />
          <Image alt="Girasol" src="/imgs/girasol.ico" height={40} width={40} />
        </CardTitle>
      </CardHeader>
      <CardContent className="grid gap-3">
        <div className="bg-sky-100 rounded-lg border-2 border-pink-500 ">
          <p className="text-gray-700 text-center italic">
            Son para ti, conejita. 🐰
          </p>
        </div>
        <Gifts />
      </CardContent>
      <CardFooter className="grid">
        <div className="text-center text-sm text-gray-600">
          <p>To: Valery</p>
          <p>From: Brillitos.</p>
        </div>
        <div className="flex justify-between mt-5">
          <Flower2 className="text-rose-400 h-6 w-6" />
          <Flower className="text-rose-400 h-6 w-6" />
          <Flower2 className="text-rose-400 h-6 w-6" />
        </div>
      </CardFooter>
    </Card>
  );
}
